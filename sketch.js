 const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
//Create a variable for the score
var score =-10;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75,17));
    }

    for (var b = 50; b<=width-10; b=b+50) 
    {
    
       plinkos.push(new Plinko(b,175,17));
    }

     for (var l = 75; l <=width; l=l+50) 
    {
       plinkos.push(new Plinko(l,275,17));
    }

     for (var m = 50; m <=width-10; m=m+50) 
    {
    
       plinkos.push(new Plinko(m,375,17));
    }
      Engine.run(engine);

    
}

function draw() {
  background("black");
  fill("yellow")
  textSize(20);
  //Show the score if the score is above 10
  if (score>=0){
  text("Score : "+score,20,30);
  }else {
  text("Score : 0",20,30)
  }
  Engine.update(engine);
   for (var i = 0; i < plinkos.length; i++) {
       plinkos[i].display();
     
   }
     if(frameCount%60===0){
     particles.push(new Particle(random(width/2-100, width/2+100), 8,8));
     score = score+10;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}


    
  