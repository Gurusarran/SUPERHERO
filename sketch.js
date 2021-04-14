const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1;

function preload(){
    backgroundImg = loadImage("GamingBackground.png")
}

function setup(){
    var canvas = createCanvas(1515, 725);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,100,70,70);
    box2 = new Box(800,100,70,70);
    box3 = new Box(800,100,70,70);
    box4 = new Box(800,100,70,70);
    box5 = new Box(800,100,70,70);
    box6 = new Box(800,100,70,70);
    

    box7= new Box(700, 100, 70, 70);
    box8= new Box(700, 100, 70, 70);
    box9= new Box(700, 100, 70, 70);
    box10= new Box(700, 100, 70, 70);
    box11= new Box(700, 100, 70, 70);
    box12= new Box(700, 100, 70, 70);

    box13 = new Box(700, 100, 70, 70);
    box14 = new Box(600, 100, 70, 70);
    box15 = new Box(600, 100, 70, 70);
    box16 = new Box(600, 100, 70, 70);
    box17 = new Box(600, 100, 70, 70);
    box18 = new Box(600, 100, 70, 70);
    box19 = new Box(600, 100, 70, 70);
    box20 = new Box(600, 100, 70, 70);

    

    ground = new Ground(0, 600, width+width/2+450, 175);

    monster = new Monster(1100, 500, 200)

    ball = new Hero(200, 200, 120);

    rope = new Rope(ball.body, {x:300, y:50})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ball.display();

    monster.display();

    ground.display();

    fill("darkblue");
    stroke("yellow")
    strokeWeight(6);
    textSize(55)
    text("KILL THE MONSTER", 900, 100)

    fill("red");
    stroke("black")
    strokeWeight(6);
    textSize(45)
    text("THE SUPERHERO GAME", 80, 100)


    fill("black");
    stroke("black")
    strokeWeight(2);
    textSize(20)
    text(" THE CODER:    Hey, hero ! Save this place from the terrible monster ! Drag your mouse to knock down the blocks and push the monster to his doom !", 10, 600)
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}