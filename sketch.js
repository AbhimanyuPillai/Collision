var movingRect,fixedRect;
var r1,r2,r3,r4;


function setup() {
  createCanvas(800,800);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "blue"
  movingRect.debug = true;

  fixedRect = createSprite(600, 100, 50, 100);
  fixedRect.shapeColor = "blue"
  fixedRect.debug = true;

  r1 = createSprite (100,100,50,50);
  r1.shapeColor = "green"
  r2 = createSprite (200,100,50,50);
  r2.shapeColor = "green"
  r3 = createSprite (300,100,50,50);
  r3.shapeColor = "green"
  r4 = createSprite (400,100,50,50);
  r4.shapeColor = "green"
}

function draw() {
  background(0); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);
  

  if (isTouching(movingRect,r3))
  {
    movingRect.shapeColor = "red";
    r3.shapeColor = "red";
  }

  else 
  {
    movingRect.shapeColor = "green";
    r3.shapeColor = "green";
  }


  drawSprites();
}

