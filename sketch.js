var car, wall
var speed, weight 




function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50) 
  speed = random(55, 90)
  weight = random(400, 1500)
  wall = createSprite(1000, 200, 60, 100)
  wall.shapeColor = "black"
}

function draw() {
  background(255,255,255); 
  
  car.velocityX = speed
  if ((0.5*weight*speed*speed)/22500<100){
    car.shapeColor = "green"
  }
  if ((0.5*weight*speed*speed)/22500<180&&(0.5*weight*speed*speed)/22500>100){
    car.shapeColor = "yellow"
  }
  if ((0.5*weight*speed*speed)/22500>180){
    car.shapeColor = "red"
  }
  if (car.isTouching(wall)){
    car.velocityX = 0
  }
  drawSprites();
}