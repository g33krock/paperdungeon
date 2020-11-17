const roundCounter = [
    {
        "turn": 0,
        "poison": 0
    }
];

const attack = [
    {
        "p1attack":0,
        "p2attack":0,
        "p3attack":0,
    }
]

const classes = [
    {
        "class": "warrior",   
        "health": 20,
        "maxHealth":20,
        "aggro": 0,
        "image":"/resources/images/warrior.png",
        "card": [
                {
                "name": "strike",
                "type": "damage",
                "cost": 2,
                "effect": 2,
                "image": "/resources/images/gladius.png",
                "do":() => {}
            },
            {
                "name": "poke",
                "type": "damage",
                "cost": 1,
                "effect": 1,
                "image": "/resources/images/katana.png"
            },
            {
                "name": "fatal blow",
                "type": "damage",
                "cost": 3,
                "effect": 3,
                "image": "/resources/images/reaper-scythe.png"
            },
            {
                "name": "demolish",
                "type": "damage",
                "cost": 4,
                "effect": 4,
                "image": "/resources/images/blade-fall.png"
            },
            {
                "name": "Super Ultra Smash!",
                "type": "damage",
                "cost": 5,
                "effect": 5,
                "image": "/resources/images/lightning-saber.png"
            },
            {
                "name": "Taunt",
                "type": "aggro",
                "cost": 10,
                "effect": 0,
                "image": "/resources/images/palm.png"
            }
        ]
    },
    {    
        "class":"priest", 
        "health": 20,
        "maxHealth":20,
        "aggro": 0,
        "image":"/resources/images/priest.png",
        "card": [
            {
                "name": "heal",
                "type": "healing",
                "cost": 2,
                "effect": 2,
                "image": "/resources/images/hand-bandage.png"
            },
            {
                "name": "minor heal",
                "type": "healing",
                "cost": 1,
                "effect": 1,
                "image": "/resources/images/medicine-pills.png"
            },
            {   
                "name": "major heal",
                "type": "healing",
                "cost": 3,
                "effect": 3,
                "image": "/resources/images/healing.png"
            },
            {   
                "name": "heal 'splosion",
                "type": "healing",
                "cost": 4,
                "effect": 4,
                "image": "/resources/images/health-increase.png"
            },
            {   
                "name": "Omega Heal",
                "type": "healing",
                "cost": 5,
                "effect": 5,
                "image": "/resources/images/defibrilate.png"
            },
            {   
                name: "Fade",
                type: "deaggro",
                cost: 0,
                effect: .5,
                "image": "/resources/images/invisible-face.png"
            }
        ]
    },
    {    
        "class":"rogue", 
        "health": 20,
        "maxHealth":20,
        "aggro": 0,
        "image":"/resources/images/rogue.png",
        "card": [
            {
                "name": "slice",
                type: "damage",
                cost: 2,
                effect: 2,
                "image": "/resources/images/bowie-knife.png"
            },
            {
                name: "cut",
                type: "damage",
                cost: 1,
                effect: 1,
                "image": "/resources/images/butterfly-knife.png"
            },
            {   
                name: "flay",
                type: "damage",
                cost: 3,
                effect: 3,
                "image": "/resources/images/bone-knife.png"
            },
            {   
                name: "garrotte",
                type: "damage",
                cost: 4,
                effect: 4,
                "image": "/resources/images/sword-spin.png"
            },
            {   
                name: "Mega Slice'N'Dice",
                type: "damage",
                cost: 5,
                effect: 5,
                "image": "/resources/images/spinning-blades.png"
            },
            {   
                name: "Poison",
                type: "poison",
                cost: 5,
                effect: 1,
                "image": "/resources/images/poison-bottle.png"
            },
            {   
                name: "Stealth",
                type: "deaggro",
                cost: 0,
                effect: .5,
                "image": "/resources/images/spy.png"
            }
        ]
    }
];

const monsters = [
    {
        "class": "goblin",
        "health": 20,
        "image":"/resources/images/goblin.png",
        "card": [
            {
                name: "bonk",
                type: "damage",
                effect: 3
            },
            {
                name: "big bonk",
                type: "damage",
                effect: 6
            }
        ]
    },
    {
        "class": "ogre",
        "health": 50,
        "image":"/resources/images/ogre.png",
        "card": [
            {
                name: "clobber",
                type: "damage",
                effect: 8
            },
            {
                name: "demolish",
                type: "damage",
                effect: 12
            }
        ] 
    },
    {
        "class": "dragon",
        "health": 50,
        "image":"/resources/images/dragon.png",
        "card": [
            {
                name: "claws",
                type: "damage",
                effect: 10
            },
            {
                name: "jaws",
                type: "damage",
                effect: 15
            }
        ] 
    }
];






