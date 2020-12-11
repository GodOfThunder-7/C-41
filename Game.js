class Game {
    constructor(){}
     getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState = data.val();
 })
}
update(state){
    database.ref('/').update({ gameState: state });
 }
async start(){
    if(gameState === 0){
    player = new Player();
    var playerCountRef = await database.ref('playerCount').once("value");
    if (playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
    }
    form = new Form();
    form.display();
}
car1 = createSprite (100,200);
car1.addImage(car1i);
car2 = createSprite (300,200);
car2.addImage(car2i);
car3 = createSprite (500,200);
car3.addImage(car3i);
car4 = createSprite (700,200);
car4.addImage(car4i);
cars = [car1,car2,car3,car4];
}
play(){
    form.hide();
    //textSize(30);
    //text ("Game Start", 500, 160);
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    if (allPlayers !== undefined){
        background(198,135,103);
        image(track, 0, -displayHeight*4, displayWidth, displayHeight*5);
        //var displayPosition = 130;
        var index = 0;
        var x = 175;
        var y;
        for (var plr in allPlayers){
            index++;
            x = x + 200;
            y = displayHeight - allPlayers[plr].distance;
            cars [index-1].x = x;
            cars [index-1].y = y;
            if (index === player.index){
                stroke(10);
                fill("cyan");
                ellipse (x, y, 80, 80);
                cars[index-1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = cars [index-1].y;
            }
            }
        }
        if (keyDown (UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
        if (player.distance > 4200){
            gameState = 2;
            player.rank++;
            Player.updateCarsAtEnd(player.rank);
            textSize(30);
            text("Your rank is -"+ player.rank, displayWidth/2, y-100);
        }
        drawSprites();
        }
        End(){
            console.log("GameOver");
        }
    }