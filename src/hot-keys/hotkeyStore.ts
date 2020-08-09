import {moduleActionContext} from "@/globalState/vuex-store";
import {ActionContext} from "vuex";
import {RootState} from "@/globalState/rootTypings";
import {HotKey, HotKeyModifierState} from "@/hot-keys/hotkeyTypes";
import {NotInGameState} from "@/hot-keys/HotKeyStateMachine";

const mod = {
  namespaced: true,
  state: {
    hotKeys: [] as HotKey[],
    hotKeyStateMachine: new NotInGameState(),
    lastW3cPort: ""
  } as HotKeyModifierState,
  actions: {
    addHotKey(context: ActionContext<HotKeyModifierState, RootState>, hotKey: HotKey) {
      const { commit, rootGetters, state } = moduleActionContext(context, mod);
      const allKeys = state.hotKeys.filter(h => h.key !== hotKey.key);
      const newHotKeys = [...allKeys, hotKey];
      rootGetters.itemHotkeyService.registerKey(hotKey);
      rootGetters.itemHotkeyService.saveHotKeys(newHotKeys);
      commit.SET_HOTKEYS(newHotKeys);
    },
    activateHotKeys(context: ActionContext<HotKeyModifierState, RootState>) {
      const { rootGetters, state } = moduleActionContext(context, mod);
      state.hotKeys.forEach(h => rootGetters.itemHotkeyService.registerKey(h));
    },
    disbleHotKeys(context: ActionContext<HotKeyModifierState, RootState>) {
      const { rootGetters } = moduleActionContext(context, mod);
      rootGetters.itemHotkeyService.disableHotKeys();
    },
    loadHotKeys(context: ActionContext<HotKeyModifierState, RootState>) {
      const { commit, rootGetters } = moduleActionContext(context, mod);

      const hotKeys = rootGetters.itemHotkeyService.loadHotKeys()
      commit.SET_HOTKEYS(hotKeys);
    },
    saveLastW3cPort(context: ActionContext<HotKeyModifierState, RootState>, port: string) {
      const { commit, rootGetters } = moduleActionContext(context, mod);

      rootGetters.itemHotkeyService.saveLastW3cPort(port)
      commit.SET_LAST_W3C_PORT(port);
    },
    loadLastW3cPort(context: ActionContext<HotKeyModifierState, RootState>) {
      const { commit, rootGetters } = moduleActionContext(context, mod);

      const port = rootGetters.itemHotkeyService.loadLastW3cPort()
      commit.SET_LAST_W3C_PORT(port);
    },
    exitGame(context: ActionContext<HotKeyModifierState, RootState>) {
      const { commit, dispatch } = moduleActionContext(context, mod);

      commit.HOTKEY_STATE_EXITED_GAME();
      dispatch.disbleHotKeys();
    },
    enterGame(context: ActionContext<HotKeyModifierState, RootState>) {
      const { commit, dispatch } = moduleActionContext(context, mod);

      commit.HOTKEY_STATE_INGAME();
      dispatch.activateHotKeys();
    }
  },
  mutations: {
    SET_HOTKEYS(state: HotKeyModifierState, hotKeys: HotKey[]) {
      state.hotKeys = hotKeys;
    },
    RESET_HOTKEY_STATE(state: HotKeyModifierState) {
      state.hotKeyStateMachine = state.hotKeyStateMachine.reset();
    },
    HOTKEY_STATE_INGAME(state: HotKeyModifierState) {
      state.hotKeyStateMachine = state.hotKeyStateMachine.enterGame();
    },
    HOTKEY_STATE_EXITED_GAME(state: HotKeyModifierState) {
      state.hotKeyStateMachine = state.hotKeyStateMachine.exitGame();
    },
    SET_LAST_W3C_PORT(state: HotKeyModifierState, port: string) {
      state.lastW3cPort = port;
    }
  },
} as const;

export default mod;
