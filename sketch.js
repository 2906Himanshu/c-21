var fr, mr
function setup() {
  createCanvas(1200,800);
  fr = createSprite(200, 300, 50, 50);
  mr = createSprite(900, 300, 80, 60)
  r1 = createSprite(500, 50, 90, 45)
  r2 = createSprite(120, 470, 70, 70)
  r3 = createSprite(900, 1000, 50, 70)
  r4 = createSprite(900, 350, 50, 50)
  mr.shapeColor="green"
  fr.shapeColor="green"
  r1.shapeColor="green"
  r2.shapeColor = "green"
  r3.shapeColor = "green"
  r4.shapeColor = "green"
  r3.velocityY = -5
  r4.velocityY = 5
}

function draw() {
  background(0);  
  mr.x = mouseX
  mr.y = mouseY

 if( isTouching(mr, r4) ){
  mr.shapeColor="blue"
  r4.shapeColor="blue"
 }
 else{
  mr.shapeColor="green"
  r4.shapeColor="green"
 }
  
 bounce(r3, r4)
  drawSprites();
}

