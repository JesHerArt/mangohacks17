var trashRemovedCount = 0;
var totalTrashedRemoved = 0;
var ttl = 23000;
var health = 3;

$(document).ready(function () {

    console.log("js loading");

    var c=document.getElementById("gameCanvas");
    var middle1 = c.width / 2;
    var middle2 = c.height / 2;
    var stage = new createjs.Stage("gameCanvas");
    stage.enableMouseOver(20);


    var imggg = new Image();
    imggg.src = "images/backdrop2.jpg";
    var netBmppp = new createjs.Bitmap(imggg);
    stage.addChild(netBmppp);

    var turtle = new Image();
    turtle.src = "images/sea_turtle.png";
    var turtleBmp = new createjs.Bitmap(turtle);
    turtleBmp.x = middle1-101;
    turtleBmp.y = middle2-100;
    stage.addChild(turtleBmp);

    $('#gameStart').click(function(e){
        e.preventDefault();

        $(this).addClass('no_show');
        $('#intro').addClass('no_show');
        $('#content').removeClass('no_show');
        $('#titles').removeClass('no_show');

        console.log("game starting");

        createNetTrash();

        createBagTrash();

        createBottleTrash();

        createCanTrash();

        stage.update();
    });

    function createNetTrash() {
        var net = new Image();
        net.src = "images/net.png";
        var netBmp = new createjs.Bitmap(net);
        netBmp.x = -300;
        netBmp.y = Math.random() * (600 - 0) + Math.random();
        stage.addChild(netBmp);

        createjs.Tween.get(netBmp, {loop: true})
          .to({x: middle1 - net.width/2 + Math.random(), y:middle2 - net.height/2 + Math.random()}, ttl + Math.random())
          .on("change", function(event) {

            if ( netBmp.x >= turtleBmp.x){
                //console.log("inside checkIntersection");
                stage.removeChild(netBmp);
                totalTrashedRemoved++;
                console.log("Total trash removed: " + totalTrashedRemoved);
                lowerHealth();
                createjs.Tween.removeTweens(netBmp);
                createNetTrash();
                return;
            }

            });
        //createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", stage);

        netBmp.addEventListener("mouseover", function(event) {
          stage.removeChild(netBmp);
          totalTrashedRemoved++;
          console.log("Total trash removed: " + totalTrashedRemoved);
          createjs.Tween.removeTweens(netBmp);
          createNetTrash();
          createBottleTrash();
          ttl -= 20;
        });
    }

    function createBagTrash() {
        var plastic_bag = new Image();
        plastic_bag.src = "images/plastic_bag.png";
        var placticBagBmp = new createjs.Bitmap(plastic_bag);
        placticBagBmp.x = -170;
        placticBagBmp.y = Math.random() * (600 - 0) + Math.random();
        stage.addChild(placticBagBmp);

        createjs.Tween.get(placticBagBmp, {loop: true})
          .to({x: middle1 - plastic_bag.width/2, y:middle2 - plastic_bag.height/2}, ttl + Math.random())
          .on("change", function(event) {

            if ( placticBagBmp.x >= turtleBmp.x){
                //console.log("inside checkIntersection");
                stage.removeChild(placticBagBmp);
                totalTrashedRemoved++;
                console.log("Total trash removed: " + totalTrashedRemoved);
                lowerHealth();
                createjs.Tween.removeTweens(placticBagBmp);
                createBagTrash();
                return;
            }

            });
        //createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", stage);

        placticBagBmp.addEventListener("mouseover", function(event) {
          stage.removeChild(placticBagBmp);
          totalTrashedRemoved++;
          console.log("Total trash removed: " + totalTrashedRemoved);
          createjs.Tween.removeTweens(placticBagBmp);
          createBagTrash();
          createCanTrash();
          ttl -= 20;
        });
    }

    function createBottleTrash() {
        var water_bottle = new Image();
        water_bottle.src = "images/water_bottle.png";
        var waterBottleBmp = new createjs.Bitmap(water_bottle);
        waterBottleBmp.x = 1100;
        waterBottleBmp.y = Math.random() * (600 - 0) + 0;
        stage.addChild(waterBottleBmp);

        createjs.Tween.get(waterBottleBmp, {loop: true})
          .to({x: middle1 - water_bottle.width/2, y:middle2 - water_bottle.height/2}, ttl + Math.random())
          .on("change", function(event) {

            if ( waterBottleBmp.x <= turtleBmp.x){
                //console.log("inside checkIntersection");
                stage.removeChild(waterBottleBmp);
                totalTrashedRemoved++;
                console.log("Total trash removed: " + totalTrashedRemoved);
                lowerHealth();
                createjs.Tween.removeTweens(waterBottleBmp);
                createBottleTrash();
                return;
            }

            });
        //createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", stage);

        waterBottleBmp.addEventListener("mouseover", function(event) {
          stage.removeChild(waterBottleBmp);
          totalTrashedRemoved++;
          console.log("Total trash removed: " + totalTrashedRemoved);
          createjs.Tween.removeTweens(waterBottleBmp);
          createBottleTrash();
          createNetTrash();
          ttl -= 20;
        });


    }

    function createCanTrash(){
        var can_rings = new Image();
        can_rings.src = "images/can_rings.png";
        var canRingsBmp = new createjs.Bitmap(can_rings);
        canRingsBmp.x = 1310;
        canRingsBmp.y = Math.random() * (600 - 0) + 0;
        stage.addChild(canRingsBmp);

        createjs.Tween.get(canRingsBmp, {loop: true})
          .to({x: middle1 - can_rings.width/2, y:middle2 - can_rings.height/2}, ttl + Math.random())
          .on("change", function(event) {

            if ( canRingsBmp.x <= turtleBmp.x){
                //console.log("inside checkIntersection");
                stage.removeChild(canRingsBmp);
                totalTrashedRemoved++;
                console.log("Total trash removed: " + totalTrashedRemoved);
                lowerHealth();
                createjs.Tween.removeTweens(canRingsBmp);
                createCanTrash();
                return;
            }

            });
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", stage);

        canRingsBmp.addEventListener("mouseover", function(event) {
          stage.removeChild(canRingsBmp);
          totalTrashedRemoved++;
          console.log("Total trash removed: " + totalTrashedRemoved);
          createjs.Tween.removeTweens(canRingsBmp);
          createCanTrash();
          createBagTrash();
          ttl -= 20;
        });
    }

    function lowerHealth() {
        health--;
        console.log("Health lowered to: " + health);
        checkHealth();
    }

    function checkHealth() {
        switch(health){
            case 2: $('#heart1').addClass('no_show');
                    break;

            case 1: $('#heart2').addClass('no_show');
                    break;

            case 0: $('#heart3').addClass('no_show');
                    $('#gameOver').removeClass('no_show');
                    $('#content').addClass('no_show');
                    break;
        }
    }





});


function checkIntersection(seaTurtleRec, trashRect) {

    console.log(seaTurtleRec.x);

    if ( seaTurtleRec.x >= trashRect.x + trashRect.width || seaTurtleRec.x + seaTurtleRec.width <= trashRect.x || seaTurtleRec.y >= trashRect.y + trashRect.height || seaTurtleRec.y + seaTurtleRec.height <= trashRect.y )
    return false;


    return true;

}
