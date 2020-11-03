import {Ability} from "@/hot-keys/RaceSpecificHotkeys/raceSpecificHotkeyTypes";

export const cancel = new Ability('Cancel', 'btncancel', 'cmdcancel', 'ESC', [])
export const cancelBuild = new Ability('Cancel', 'btncancel', 'cmdcancelbuild', 'ESC', [])
export const rally = new Ability('Rally', 'btnrallypoint', 'cmdrally', 'Y', [])

export const defaultUnitAbilities = [
    new Ability("Move", "btnmove", "cmdmove", "M", []),
    new Ability("Stop", "btnstop", "cmdstop", "S", []),
    new Ability("Hold", "btnholdposition", "cmdholdpos", "H", []),
    new Ability("Attack", "btnattack", "cmdattack", "A", []),
    new Ability("Patrol", "btnpatrol", "cmdpatrol", "P", [])
]

export const defaultFighterAbilities = [
    ...defaultUnitAbilities,
    ...Ability.Defaults(3),
]

export const defaultSiegeAbilities = [
    ...defaultUnitAbilities,
    ...Ability.Defaults(2),
    new Ability("Attack Ground", "btnattackground", "cmdattackground", "G", [])
]

export const defaultHeroAbilities = (learningSkills: Ability[]) => [
    ...defaultUnitAbilities,
    ...Ability.Defaults(2),
    new Ability('Hero Abilities', 'btnskillz', 'cmdselectskill', 'O', learningSkills)
]

export const buildingWithCancel = (buildItems: Ability[]) => [
    ...buildItems,
    cancelBuild
]

export const defaultAltar = (heroes: Ability[]) => buildingWithCancel([
    ...Ability.Defaults(4),

    heroes[0],
    ...Ability.Defaults(2),
    rally,

    heroes[1],
    heroes[2],
    heroes[3]]
)

export const defaultMainBuilding = [
    ...Ability.Defaults(2),
    new Ability('Research Backpack', 'btnpackbeast', 'rupm', 'B', []),
    ...Ability.Defaults(3),
    rally
]
