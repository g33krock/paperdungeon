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
                "image": "/resources/images/gladius.png"
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
//Static Hero Classes
var p1class = 0;
var p2class = 1;
var p3class = 2;
//Random Monster Type
var mclass = Math.floor(Math.random() * monsters.length);
var p1img = document.createElement('img'); 
var p2img = document.createElement('img'); 
var p3img = document.createElement('img');
var mimg = document.createElement('img');
var card1 = document.createElement('img');
var card2 = document.createElement('img');
var card3 = document.createElement('img'); 

var player1Attack = 0;
var player2Attack = 0;
var player3Attack = 0;

var p1CardSelect1 = 0;
var p1CardSelect2 = 0;
var p2CardSelect1 = 0;
var p2CardSelect2 = 0;
var p3CardSelect1 = 0;
var p3CardSelect2 = 0;

var p1MonsterHit = 0;
var p2MonsterHit = 0;
var p3MonsterHit = 0;

var poison = 0;

function initCards() {
    p1CardSelect1 = Math.floor(Math.random() * classes[0].card.length);
    p1CardSelect2 = Math.floor(Math.random() * classes[0].card.length);
    p2CardSelect1 = Math.floor(Math.random() * classes[1].card.length);
    p2CardSelect2 = Math.floor(Math.random() * classes[1].card.length);
    p3CardSelect1 = Math.floor(Math.random() * classes[2].card.length);
    p3CardSelect2 = Math.floor(Math.random() * classes[2].card.length);
};

function player1Attack1() {
    player1Attack = p1CardSelect1;
    return player1Attack;
};
function player1Attack2() {
    player1Attack = p1CardSelect2;
    return player1Attack;
};
function player2Attack1() {
    player2Attack = p2CardSelect1;
    return player2Attack;
};
function player2Attack2() {
    player2Attack = p2CardSelect2;
    return player2Attack;
};
function player3Attack1() {
    player3Attack = p3CardSelect1;
    return player3Attack;
};
function player3Attack2() {
    player3Attack = p3CardSelect2;
    return player3Attack;
};



function fight() {

    card1.src = classes[0].card[player1Attack].image;
    document.getElementById("card1img").appendChild(card1).width = "100";
    card2.src = classes[1].card[player2Attack].image;
    document.getElementById('card2img').appendChild(card2).width = "100";
    card3.src = classes[2].card[player3Attack].image;
    document.getElementById('card3img').appendChild(card3).width = "100";
    

    
    
    

    if (roundCounter[0] > 0) {

    //Random Hero Action  
        p1attack = Math.floor(Math.random() * classes[p1class].card.length);
        p2attack = Math.floor(Math.random() * classes[p2class].card.length);
        p3attack = Math.floor(Math.random() * classes[p3class].card.length);
    } else {
        attack[0].p1attack = player1Attack;
        attack[0].p2attack = player2Attack;
        attack[0].p3attack = player3Attack;
     }
    
    //Value of Hero Action
    var p1hit = classes[p1class].card[attack[0].p1attack].effect;
    var p2hit = classes[p2class].card[attack[0].p2attack].effect;
    var p3hit = classes[p3class].card[attack[0].p3attack].effect;
    //aggro cost
    var p1aggro = classes[p1class].card[attack[0].p1attack].cost;
    var p2aggro = classes[p2class].card[attack[0].p2attack].cost;
    var p3aggro = classes[p3class].card[attack[0].p3attack].cost;
    classes[p1class].aggro = classes[p1class].aggro + p1aggro;
    classes[p2class].aggro = classes[p2class].aggro + p2aggro;
    classes[p3class].aggro = classes[p3class].aggro + p3aggro;
    
    switch(classes[p1class].card[attack[0].p1attack].type) {
        case "damage":
            p1MonsterHit = p1hit;
            break;
        case "healing":
            p1MonsterHit = 0;
            break;
        case "poison":
            p1MonsterHit = 0;
            poison++;
            break;
        case "taunt":
            p1MonsterHit = 0;
            break;
        case "deaggro":
            classes[p1class].aggro = classes[p1class].aggro * classes[p1class].card[attack[0].p1attack].effect;
            p1MonsterHit = 0;

    };
    switch(classes[p2class].card[attack[0].p2attack].type) {
        case "damage":
            p2MonsterHit = p2hit;
            break;
        case "healing":
            p2MonsterHit = 0;
            break;
        case "poison":
            p2MonsterHit = 0;
            poison++;
            break;
        case "taunt":
            p2MonsterHit = 0;
            break;
        case "deaggro":
            classes[p2class].aggro = classes[p2class].aggro * classes[p2class].card[attack[0].p2attack].effect;
            p2MonsterHit = 0;

    };
    switch(classes[p3class].card[attack[0].p3attack].type) {
        case "damage":
            p3MonsterHit = p3hit;
            break;
        case "healing":
            p3MonsterHit = 0;
            break;
        case "poison":
            p3MonsterHit = 0;
            poison++;
            break;
        case "taunt":
            p3MonsterHit = 0;
            break;
        case "deaggro":
            classes[p3class].aggro = classes[p3class].aggro * classes[p3class].card[attack[0].p3attack].effect;
            p3MonsterHit = 0;

    };

    //Invalidate Hero Action if Hero is Dead
    if (classes[p1class].health < 1) {p1hit = 0};
    if (classes[p2class].health < 1) {
        p2hit = 0
    } else if (classes[p2class].card[attack[0].p2attack].type = "healing"){
        p2hit = 0;
        var htarget = Math.floor(Math.random()*classes.length);
        classes[htarget].health = classes[htarget].health + classes[p2class].card[attack[0].p2attack].effect;
    };
    if (classes[p3class].health < 1) {p3hit = 0};

    monsters[mclass].health = monsters[mclass].health-(p1MonsterHit + p2MonsterHit + p3MonsterHit + poison);

    //Calculating Monster Target Based on Player Aggro
    if (classes[p1class].health > 0) {
        var p1taunt = classes[p1class].aggro;
    } else {p1taunt = 0};
    if (classes[p2class].health > 0) {
        var p2taunt = classes[p2class].aggro;
    } else {p2taunt = 0};
    if (classes[p3class].health > 0) {
        var p3taunt = classes[p3class].aggro;
    } else {p3taunt = 0};

    let caggro = Math.max(p1taunt, p2taunt, p3taunt);
    if (caggro == classes[p1class].aggro) {
       mtarget = 0;
    } else if (caggro == classes[p2class].aggro) {
        mtarget =  1;
    } else if (caggro == classes[p3class].aggro) {
        mtarget =  2;
   };

    var mattack = Math.floor(Math.random() * monsters[mclass].card.length);
    classes[mtarget].health = classes[mtarget].health-monsters[mclass].card[mattack].effect;

    if (classes[p1class].health > 0) {
        document.getElementById("p1class").innerHTML =
        `${classes[p1class].class}`;
        document.getElementById("p1action").innerHTML = `${classes[p1class].card[attack[0].p1attack].name}`;
        document.getElementById("p1val").innerHTML =
        `${classes[p1class].card[attack[0].p1attack].effect}`;
        document.getElementById("p1health").innerHTML = 
        `${classes[p1class].health}`;
        document.getElementById("p1aggro").innerHTML =
        `${classes[p1class].aggro}`;
        
            p1img.src =  classes[0].image; 
            document.getElementById('p1punch').appendChild(p1img).width = "200";
    } else {document.getElementById("p1punch").innerHTML = "dead"};

    if (classes[p2class].health > 0) {
        document.getElementById("p2class").innerHTML =
        `${classes[p2class].class}`;
        document.getElementById("p2action").innerHTML = `${classes[p2class].card[attack[0].p2attack].name}`;
        document.getElementById("p2val").innerHTML =
        `${classes[p2class].card[attack[0].p2attack].effect}`;
        document.getElementById("p2health").innerHTML = 
        `${classes[p2class].health}`;
        document.getElementById("p2aggro").innerHTML =
        `${classes[p2class].aggro}`;
        
            p2img.src =  classes[1].image; 
            document.getElementById('p2punch').appendChild(p2img).width = "200";
    } else {document.getElementById("p2punch").innerHTML = "dead"};

    if (classes[p3class].health > 0) {
        document.getElementById("p3class").innerHTML =
        `${classes[p3class].class}`;
        document.getElementById("p3action").innerHTML = `${classes[p3class].card[attack[0].p3attack].name}`;
        document.getElementById("p3val").innerHTML =
        `${classes[p3class].card[attack[0].p3attack].effect}`;
        document.getElementById("p3health").innerHTML = 
        `${classes[p3class].health}`;
        document.getElementById("p3aggro").innerHTML =
        `${classes[p3class].aggro}`;
         
            p3img.src =  classes[2].image; 
            document.getElementById('p3punch').appendChild(p3img).width = "200";
    } else {document.getElementById("p3punch").innerHTML = "dead"};
    
    if (monsters[mclass].health > 0) {
    document.getElementById("mclass").innerHTML = `${monsters[mclass].class}`;
    document.getElementById("maction").innerHTML = `${monsters[mclass].card[mattack].name}`;
    document.getElementById("mtarget").innerHTML = `${classes[mtarget].class}`;
    document.getElementById("mdamage").innerHTML = `${monsters[mclass].card[mattack].effect} ${monsters[mclass].card[mattack].type}`; 
    document.getElementById("mhealth").innerHTML = `${monsters[mclass].health}`;
     
            mimg.src =  monsters[mclass].image; 
            document.getElementById('mpunch').appendChild(mimg).width = "200"; 
    } else {document.getElementById("mpunch").innerHTML = "dead"};

    p1CardSelect1 = Math.floor(Math.random() * classes[0].card.length);
    document.getElementById("p1NO1").innerHTML = `${classes[0].card[p1CardSelect1].name}`;
    p1CardSelect2 = Math.floor(Math.random() * classes[0].card.length);
    document.getElementById("p1NO2").innerHTML = `${classes[0].card[p1CardSelect2].name}`;
    p2CardSelect1 = Math.floor(Math.random() * classes[1].card.length);
    document.getElementById("p2NO1").innerHTML = `${classes[1].card[p2CardSelect1].name}`;
    p2CardSelect2 = Math.floor(Math.random() * classes[1].card.length);
    document.getElementById("p2NO2").innerHTML = `${classes[1].card[p2CardSelect2].name}`;
    p3CardSelect1 = Math.floor(Math.random() * classes[2].card.length);
    document.getElementById("p3NO1").innerHTML = `${classes[2].card[p3CardSelect1].name}`;
    p3CardSelect2 = Math.floor(Math.random() * classes[2].card.length);
    document.getElementById("p3NO2").innerHTML = `${classes[2].card[p3CardSelect2].name}`;

    
    roundCounter[0].turn++;
    document.getElementById("horse").innerHTML = `${roundCounter[0].turn}`;
};

function myMove() {
    var elem1 = document.getElementById("card1");
    var elem2 = document.getElementById("card2");
    var elem3 = document.getElementById("card3");     
    var pos = 0;
    var pos1 = 100;
    var pos2 = 500;
    var pos3 = 1000;

    var id = setInterval(frame, 1);
    function frame() {
      if (pos == 750) {
        clearInterval(id);
      } else {
        pos++; 
        elem1.style.left = pos1 + (.4*pos) + 'px';  
        elem1.style.bottom = pos + 'px';
        elem2.style.left = pos2 + 'px';  
        elem2.style.bottom = pos + 'px';
        elem3.style.left = pos3 + (-.4*pos) + 'px'; 
        elem3.style.bottom = pos + 'px';   
      }
    }
  }