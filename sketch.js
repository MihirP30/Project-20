var car, wall;
var speed, weight;
var deform, deformation;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 50, 400/2);
  wall.shapeColor = color(80,80,80);

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(255,255,255);

  car.velocityX = speed;

  if(isTouching(car,wall)) {
    car.velocityX = 0;
    car.x = 1475;
    deform = 0.5*weight*speed*speed
    deformation = deform/22500
    changeColor();
  }

  drawSprites();
}

function isTouching(target1, target2) {
  if (target1.x - target2.x < target2.width/2 + target1.width/2
      && target2.x - target1.x < target2.width/2 + target1.width/2
      && target1.y - target2.y < target2.height/2 + target1.height/2
      && target2.y - target1.y < target2.height/2 + target1.height/2) {
    return true;
  }
  else {
    return false;
  }
}

function changeColor() {
  if(deformation <= 100) {
    car.shapeColor = "Green"
  }
  else if(deformation > 100 && deformation < 180) {
    car.shapeColor = "Yellow"
  }
  else {
    car.shapeColor = "Red"
  }
}