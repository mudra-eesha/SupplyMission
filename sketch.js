const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(100, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(100, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("black")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle( 100, 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(100, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 //BOX 
	 
    boxleftSprite=createSprite(width/2-100, 610, 20,100);
 	boxleftSprite.shapeColor=color("red");

 	boxBase=createSprite(width/2, 650, 200,20);
	 boxBase.shapeColor=color("red");

	 boxrightSprite=createSprite(width/2+100 , 610, 20,100);
 	boxrightSprite.shapeColor=color("red");

	Engine.run(engine);
  
}

 function draw() {
	
  rectMode(CENTER);
  background("skyblue");

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
}

function keyPressed() {
	if (packageSprite.y -boxBase.y < boxBase.width/2 +  packageSprite.width/2
		&& boxBase.y - packageSprite.y < boxBase.width/2 + packageSprite.width/2){
			boxBase.shapeColor=color("green");
			boxrightSprite.shapeColor=color("green");
			boxleftSprite.shapeColor=color("green");
	}
 if (keyCode === LEFT_ARROW) {
	helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:-20,y:0}
   Matter.Body.translate(packageBody, translation)
   
} 
else if(keyCode === RIGHT_ARROW){
	helicopterSprite.x=helicopterSprite.x+20;
    translation={x:20,y:0}
   Matter.Body.translate(packageBody, translation)
  
}
if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}
