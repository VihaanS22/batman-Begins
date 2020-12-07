const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
var bruce, boyImg
var forest, forestImg
var bat, batImg
var maxDrops = 100
var drops = []
var photo1, photo2, photo3, photo4, photo5, photo6, photo7
var img, img2, img3, img4, img5, img6, img7
var rainSound

function preload(){
rainSound = loadSound("rain.mp3")
    boyImg = loadImage("bruce.png")
    forestImg = loadImage("forest.png")
    img = loadImage("photo1.png")
    img2 = loadImage("photo5.png")
    img3 = loadImage("photo6.png")
    img4 = loadImage("photo7.png")
    img5 = loadImage("photo8.png")
    img6 = loadImage("photo3.png")
    img7 = loadImage("photo4.png")
    batImg = loadImage("bat.png")
}

function setup(){
createCanvas(displayWidth, displayHeight-200)   
    
engine = Engine.create();
world  = engine.world;

bruce = createSprite(680, 440, 10, 10)
bruce.addAnimation("sad bruce", boyImg)
bruce.scale = 0.4
forest = createSprite(600, 300, 10, 10)
forest.addAnimation("starry night", forestImg)
forest.scale = 1.3

photo1 = createSprite(1100, 140, 10, 10)
photo1.addAnimation("1", img)
photo1.scale= 1.5

photo2 = createSprite(1200, 440, 10, 10)
photo2.addAnimation("2", img2)
photo2.scale= 1.5

photo3 = createSprite(170, 80, 10, 10)
photo3.addAnimation("3", img3)
photo3.scale= 1.3

photo4 = createSprite(200, 380, 10, 10)
photo4.addAnimation("4", img4)
photo4.scale= 1.3

photo5 = createSprite(1300, 200, 10, 10)
photo5.addAnimation("5", img5)
photo5.scale= 1.2

photo6 = createSprite(60, 240, 10, 10)
photo6.addAnimation("6", img6)
photo6.scale= 0.5

photo7 = createSprite(1000, 340, 10, 10)
photo7.addAnimation("7", img7)
photo7.scale= 0.5

bat = createSprite(displayWidth/2-35, 50, 10, 10)
bat.addAnimation("batman", batImg)
bat.scale = 0.5

if(frameCount % 750 === 0){
 
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(400,800), random(80,400)));
        rainSound.play()
    }
  
   
}


}

function draw(){
   background(rgb("226", "186", "6")) 
   Engine.update(engine);

   
forest.display()
bruce.display()
photo1.display()
photo2.display()
photo3.display()
photo4.display()
photo5.display()
photo6.display()
photo7.display()
bat.display()
for(var i = 0; i<maxDrops; i++){
    drops[i].display();
    drops[i].update();
  
}   

}
