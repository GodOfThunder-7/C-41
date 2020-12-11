var gameState = 0;
var playerCount, database;
var form, player, game;
var allPlayers;
var car1, car2, car3, car4, cars;
var car1i, car2i, car3i, car4i;
var track, ground, rankImg;

function preload(){
    car1i = loadImage ("car1.png");
    car2i = loadImage ("car2.png");
    car3i = loadImage ("car3.png");
    car4i = loadImage ("car4.png");
    ground = loadImage ("ground.png");
    track = loadImage ("track.jpg");
    rankImg = loadImage ("Shield.png");
}
function setup(){
    createCanvas(displayWidth, displayHeight);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}
 function draw(){
    if (playerCount === 4){
         game.update(1);
     }
    if (gameState === 1){
        clear();
        game.play();
    }
    if (gameState === 2){
        game.End();
    }
 }