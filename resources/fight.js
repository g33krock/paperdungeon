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
    p1NO1img.src = classes[0].card[p1CardSelect1].image;
    document.getElementById("p1NO1z").appendChild(p1NO1img).width = "50";
    p1CardSelect2 = Math.floor(Math.random() * classes[0].card.length);
    document.getElementById("p1NO2").innerHTML = `${classes[0].card[p1CardSelect2].name}`;
    p1NO2img.src = classes[0].card[p1CardSelect2].image;
    document.getElementById("p1NO2z").appendChild(p1NO2img).width = "50";
    p2CardSelect1 = Math.floor(Math.random() * classes[1].card.length);
    document.getElementById("p2NO1").innerHTML = `${classes[1].card[p2CardSelect1].name}`;
    p2NO1img.src = classes[1].card[p2CardSelect1].image;
    document.getElementById("p2NO1z").appendChild(p2NO1img).width = "50";
    p2CardSelect2 = Math.floor(Math.random() * classes[1].card.length);
    document.getElementById("p2NO2").innerHTML = `${classes[1].card[p2CardSelect2].name}`;
    p2NO2img.src = classes[1].card[p2CardSelect2].image;
    document.getElementById("p2NO2z").appendChild(p2NO2img).width = "50";
    p3CardSelect1 = Math.floor(Math.random() * classes[2].card.length);
    document.getElementById("p3NO1").innerHTML = `${classes[2].card[p3CardSelect1].name}`;
    p3NO1img.src = classes[2].card[p3CardSelect1].image;
    document.getElementById("p3NO1z").appendChild(p3NO1img).width = "50";
    p3CardSelect2 = Math.floor(Math.random() * classes[2].card.length);
    document.getElementById("p3NO2").innerHTML = `${classes[2].card[p3CardSelect2].name}`;
    p3NO2img.src = classes[2].card[p3CardSelect2].image;
    document.getElementById("p3NO2z").appendChild(p3NO2img).width = "50";

    
    roundCounter[0].turn++;
    document.getElementById("horse").innerHTML = `${roundCounter[0].turn}`;
};

function myMove() {
    var monsterCoordinates = document.getElementById('mpunch');
    var elem1 = document.getElementById("card1");
    var elem1a = document.getElementById("p1punch");
    var elem2 = document.getElementById("card2");
    var elem2a = document.getElementById("p2punch");
    var elem3 = document.getElementById("card3");
    var elem3a = document.getElementById("p3punch");
    var height = document.getElementById("myContainer").offsetHeight;     
    var pos = 0;
    var pos1 = (elem1.offsetLeft-monsterCoordinates.offsetLeft)/750;
    var reset1h = elem1a.offsetLeft;
    var reset1v = elem1a.offsetTop;
    var initelem1 = elem1.offsetLeft;
    var vinitelem1 = (elem1.offsetTop / height) * 10;
    var pos2 = (monsterCoordinates.offsetLeft-elem2.offsetLeft)/750;
    var reset2h = elem2a.offsetLeft;
    var reset2v = elem2a.offsetTop;
    var initelem2 = elem2.offsetLeft;
    var vinitelem2 = (elem2.offsetTop / height) * 10;
    var pos3 = (elem3.offsetLeft-monsterCoordinates.offsetLeft)/750;
    var reset3h = elem3a.offsetLeft;
    var reset3v = elem3a.offsetTop;
    var initelem3 = elem3.offsetLeft;
    var vinitelem3 = (elem3.offsetTop / height) * 10;
    var height = document.getElementById("myContainer").offsetHeight;
    var width = document.getElementById("myContainer").offsetWidth;
    console.log(height, width)

    var id = setInterval(frame, 1);
    function frame() {
      if (pos != 500) {
        pos++; 
        elem1.style.left = reset1h + (width * .115) + (pos1 * -pos) + 'px';  
        elem1.style.top = reset1v + (height * .862) - pos + 'px';
        elem2.style.left = reset2h + (width * .115) + (pos2 * -pos) + 'px';  
        elem2.style.top = reset2v + (height * .862) -pos + 'px';
        elem3.style.left = reset3h + (width * .115) + (pos3 * -pos) + 'px';  
        elem3.style.top = reset3v + (height * .862) -pos + 'px';
      } else {
        elem1.style.left = reset1h + (width * .115) + 'px';
        elem1.style.top = reset1v + (height * .862) + 'px';
        elem2.style.left = reset2h + (width * .115) + 'px';
        elem2.style.top = reset2v + (height * .862) + 'px'; 
        elem3.style.left = reset3h + (width * .115) + 'px';
        elem3.style.top = reset3v + (height * .862) + 'px';    
        pos=0 + 'px';
        clearInterval(id);
         
      }
    }
  }