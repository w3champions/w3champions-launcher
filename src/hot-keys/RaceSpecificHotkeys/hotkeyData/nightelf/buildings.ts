import {
    Ability,
    Building,
    Unit,
} from "@/hot-keys/RaceSpecificHotkeys/raceSpecificHotkeyTypes";
import {
    attack,
    cancelBuild, defaultAltar,
    defaultFighterAbilities,
    defaultMainBuilding, rally, stop
} from "@/hot-keys/RaceSpecificHotkeys/hotkeyData/commonHotkeys";
const uproot = new Ability('Uproot', 'btnuproot', 'aro1', 'R', [])

const buildings =
    [
        new Building('Tree of Life', 'btntreeoflife', [
            new Ability('Train Wisp', 'btnwisp', 'hpea', 'P', []),
            ...defaultMainBuilding(
                new Ability('Research Nature’s Blessing', 'btnnaturesblessing', 'renb', 'N', []),
                'repm'
            ),
            Ability.DoubleHotkey('Upgrade', 'btntreeofages', 'etoa', 'U', [], 'etoe'),
            new Ability('Entangle Gold Mine', 'btngoldmine', 'aent', 'G', []),
            uproot,
            cancelBuild
        ]),

        new Building('Entangled Gold Mine', 'btngoldmine', [
            ...Ability.Defaults(9),
            new Ability('Load Wisp', 'btnload', 'slo2', 'L', []),
            new Ability('Unload All', 'btnunload', 'adri', 'U', [])
        ]),

        new Building('Uprooted Ancient', 'btnuproot', [
            ...defaultFighterAbilities,
            new Ability('Eat Tree', 'btneattree', 'aeat', 'E', []),
            ...Ability.Defaults(2),
            uproot
        ]),

        new Building('Ancient of War', 'btnancientoftheearth', [
            new Ability('Train Archer', 'btnarcher', 'earc', 'A', []),
            new Ability('Train Huntress', 'btnhuntress', 'esen', 'H', []),
            new Ability('Train Glaive Thrower', 'btnglaivethrower', 'ebal', 'T', []),
            Ability.Default(),
            new Ability('Research Marksmanship', 'btnmarksmanship', 'remk', 'M', []),
            new Ability('Research Moon Glaive', 'btnupgrademoonglaive', 'remg', 'G', []),
            Ability.Default(),
            rally,
            new Ability('Research Improved Bows', 'btnimprovedbows', 'reib', 'I', []),
            new Ability('Research Sentinel', 'btnsentinel', 'resc', 'S', []),
            new Ability('Research Vorpal Blades', 'btnvorpalblades', 'repb', 'P', []),
            uproot
        ]),

        new Building('Hunter’s Hall', 'btnhuntershall', [
            new Ability('Upgrade Strength of the Moon', 'btnstrengthofthemoon', 'resm', 'M', []),
            new Ability('Upgrade Strength of the Wild', 'btnstrengthofthewild', 'resw', 'W', []),
            new Ability('Research Ultravision', 'btnultravision', 'reuv', 'U', []),
            new Ability('Research Well Spring', 'btnwellspring', 'rews', 'E', []),
            new Ability('Upgrade Moon Armor', 'btnmoonarmor', 'rema', 'A', []),
            new Ability('Upgrade Reinforced Hides', 'btnreinforcedhides', 'rerh', 'R', []),
            ...Ability.Defaults(5),
            cancelBuild
        ]),

        new Building('Ancient Protector', 'btntreant', [
            ...Ability.Defaults(1),
            stop,
            ...Ability.Defaults(1),
            attack,
            ...Ability.Defaults(7),
            uproot
        ]),

        new Building('Moon Well', 'btnmoonwell', [
            ...Ability.Defaults(1),
            new Ability('Replenish Mana and Life', 'btnmanarechargeoff', 'ambt', 'R', []),
        ]),

        new Building('Altar of Elders', 'btnaltarofelders', [
            ...defaultAltar([
                new Ability('Summon Warden', 'btnherowarden', 'ewar', 'W', []),
                new Ability('Summon Demon Hunter', 'btnherodemonhunter', 'edem', 'D', []),
                new Ability('Summon Keeper of the Grove', 'btnkeeperofthegrove', 'ekee', 'K', []),
                new Ability('Summon Priestess of the Moon', 'btnpriestessofthemoon', 'emoo', 'P', []),
            ])
        ])
    ] as Unit[]

export default buildings;
