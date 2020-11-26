function player1Attack1() {
    if (classes[0].status == "active") 
    {
        player1Attack = p1CardSelect1;
        return player1Attack;
    } else {
        alert("your player is not active");
    }
};
function player1Attack2() {
    if (classes[0].status == "active") 
    {
        player1Attack = p1CardSelect2;
        return player1Attack;
    } else {
        alert("your player is not active");
    }
};
function player2Attack1() {
    if (classes[1].status == "active") 
    {
        player2Attack = p2CardSelect1;
        return player2Attack;
    } else {
        alert("your player is not active");
    }
};
function player2Attack2() {
    if (classes[1].status == "active")
    {
        player2Attack = p2CardSelect2;
        return player2Attack;
    } else {
        alert("your player is not active");
    }
};
function player3Attack1() {
    if (classes[2].status == "active")
    {
        player3Attack = p3CardSelect1;
        return player3Attack;
    } else {
        alert("your player is not active");
    }
};
function player3Attack2() {
    if (classes[2].status == "active")
    {
        player3Attack = p3CardSelect2;
        return player3Attack;
    } else {
        alert("your player is not active");
    }
};