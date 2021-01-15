//Create variables here
var dog,dogImg,happyDogImg,foodS,foodStock,milkImg;
var database
var count=2;
var feed,lastFed
function preload()
{
  happyDogImg=loadImage("Dog .png")
  dogImg=loadImage("happydog .png")
  milkImg=loadImage("Milk.png")
	//load images here
}

function setup() {

  createCanvas(500,500);
  database = firebase.database();

 foodStock=database.ref('Food')
 foodStock.on("value",readStock)
 dog=createSprite(250,400)
dog.addImage(dogImg)
dog.scale=0.20;
nameDog=createInput("Enter Dog's name")
nameDog.position(600,120)
feedDog=createButton("LastFed")

feedDog.position(600,95)
feed=createButton("Add Food")
feed.position(700,95)
feed.mousePressed(feedDog)
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogImg)
  }
  drawSprites();
  //add styles here
  textSize(20)
  //fill("red")
 // text("Note:Press UP_ARROW to feed Drago milk!",40,100)
 // text("Food Left   : "+foodS,40,150)
}


function readStock(data){
foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
database.ref('/').update({
  Food:x
})
}