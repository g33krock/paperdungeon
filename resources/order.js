
function player1() {
    if (classes[0].status != "dead" && classes[0].status != "done") {
        classes[0].status = "active";
        document.getElementById("p1punch").classList.remove('ready');
        document.getElementById("p1punch").classList.add('active');
        document.getElementById("p2punch").classList.remove('active');
        document.getElementById("p3punch").classList.remove('active');
        if (classes[1].status == "active") {
            classes[1].status = "done"
        };
        if (classes[2].status == "active") {
            classes[2].status = "done"
        };
    }
};
function player2() {
    if (classes[1].status != "dead" && classes[1].status != "done") {
        classes[1].status = "active";
        document.getElementById("p2punch").classList.remove('ready');
        document.getElementById("p2punch").classList.add('active');
        document.getElementById("p1punch").classList.remove('active');
        document.getElementById("p3punch").classList.remove('active');
        if (classes[0].status == "active") {
            classes[0].status = "done"
        };
        if (classes[2].status == "active") {
            classes[2].status = "done"
        };
    }
};
function player3() {
    if (classes[2].status != "dead" && classes[2].status != "done") {
        classes[2].status = "active";
        document.getElementById("p3punch").classList.remove('ready');
        document.getElementById("p3punch").classList.add('active');
        document.getElementById("p1punch").classList.remove('active');
        document.getElementById("p2punch").classList.remove('active');
        if (classes[0].status == "active") {
            classes[0].status = "done"
        };
        if (classes[1].status == "active") {
            classes[1].status = "done"
        };
    }
};

function upAndDownShake() {

    //Shake the sprite while the `counter` is less than 
    //the `numberOfShakes`
    if (counter < numberOfShakes) {

      //Reset the sprite's position at the start of each shake
      sprite.x = startX;
      sprite.y = startY;

      //Reduce the magnitude
      magnitude -= magnitudeUnit;

      //Randomly change the sprite's position
      sprite.x += randomInt(-magnitude, magnitude);
      sprite.y += randomInt(-magnitude, magnitude);

      //Add 1 to the counter
      counter += 1;
    }

    //When the shaking is finished, restore the sprite to its original 
    //position and remove it from the `shakingSprites` array
    if (counter >= numberOfShakes) {
      sprite.x = startX;
      sprite.y = startY;
      shakingSprites.splice(shakingSprites.indexOf(sprite), 1);
    }
  }
