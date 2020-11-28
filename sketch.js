var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(800,400);

  
  
  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);
  
  wall = createSprite(700, 200, thickness, 100);
  wall.shapeColor = "grey";

  bullet = createSprite(20, 200, 30, 10);
  bullet.shapeColor = "grey";
  

}

function draw() {
  background(255,255,255);  
  
  if (keyDown("space")) {

    bullet.velocityX = speed;

  }


  
  if (wall.x - bullet.x < bullet.width/2 + wall.width/2) {

    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if ( deformation > 10)
    {
      wall.shapeColor = "red";
    }

    if (deformation < 10 && deformation > 10)
    {
      wall.shapeColor = "yellow";
    }
    
    if(deformation < 10)
    {
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}