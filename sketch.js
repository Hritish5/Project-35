//Create variables here
var database, feed, addFood, fedTime, lastFed;
var dog, happydog, database, foodS, foodStock, dogImg, dogImg2, foodS, foodObj;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(1000, 400);
  database=firebase.database();
  console.log(database);

  foodObj = new Food();

  dog = createSprite(800,200,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
  feed = createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
//foodS = 0;
}


function draw() {  
  if(foodS !== undefined){
    text("Food Remaining: " + foodS, 150,140);
  }
  //if(keyWentDown(UP_ARROW)){
  //  writeStock(foodS);
   // dog.addImage(dogImg2);
 // }
  foodObj.display();
  drawSprites();
  //add styles here
}

function readStock(data){
  foodS=data.val();
  console.log(foodS);
  foodObj.updateFoodStock(foodS);
}

function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
  x = x - 1;
  }
  database.ref('/').update({
  Food:x
  })
}

function feedDog(){
  dog.addImage(dogImg2);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function addFoods(){

  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}