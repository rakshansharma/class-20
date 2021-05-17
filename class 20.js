var fixedrect , movingrect
function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(400, 200, 50, 50);
 movingrect = createSprite(400, 200, 50, 50);


}

function draw() {
  background(255,255,255);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

 if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
  movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
  fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2&&
  movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2){
  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "blue";
 }else{
  fixedrect.shapeColor = "orange";
  movingrect.shapeColor = "orange";
 }

  drawSprites();
}