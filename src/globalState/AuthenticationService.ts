import {W3cToken} from "@/globalState/rootTypings";

const Store = window.require("electron-store");
import store from "@/globalState/vuex-store";
import logger from "@/logger";

export class AuthenticationService {
    private store = new Store();

    private w3cAuthenticationCode = "w3cAuthenticationCode";

    public saveAuthToken(token: W3cToken) {
        this.store.set(this.w3cAuthenticationCode, token);
    }

    public deleteAuthToken() {
        this.store.delete(this.w3cAuthenticationCode);
    }

    public loadAuthToken() {
        return this.store.get(this.w3cAuthenticationCode) ?? '';
    }

    public async authorize(code: string): Promise<W3cToken | null> {
        logger.info(`get auth from ${store.state.identificationUrl}`)
        const url = `${store.state.identificationUrl}api/oauth/token?code=${code}&redirectUri=http://localhost:8080/login`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        return response.status !== 200 ? null : await response.json();
    }

    public async getProfile(bearer: string): Promise<W3cToken | null> {
        logger.info(`get auth from ${store.state.identificationUrl}`)
        const url = `${store.state.identificationUrl}api/oauth/battleTag?bearer=${bearer}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        return response.status === 204 ? null : await response.json();
    }
}
