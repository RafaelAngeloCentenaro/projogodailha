var fundo
var personagem1Img
var personagem1
var life=300
var power=0
function preload(){
    imgfundo= loadImage("./assets/imagem fundo.png")
    imgfundofundo= loadImage("./assets/imagem fundo fundo.jpg")
    personagem1Img= loadAnimation("./assets/personagens/1/1_entity_000_WALK_000.png","./assets/personagens/1/1_entity_000_WALK_001.png","./assets/personagens/1/1_entity_000_WALK_002.png","./assets/personagens/1/1_entity_000_WALK_003.png","./assets/personagens/1/1_entity_000_WALK_004.png","./assets/personagens/1/1_entity_000_WALK_005.png","./assets/personagens/1/1_entity_000_WALK_006.png")
    claudioImg = loadAnimation("./assets/Atacar_monstro1/Wraith_01_Attack_000.png","./assets/Atacar_monstro1/Wraith_01_Attack_001.png","./assets/Atacar_monstro1/Wraith_01_Attack_002.png","./assets/Atacar_monstro1/Wraith_01_Attack_003.png","./assets/Atacar_monstro1/Wraith_01_Attack_004.png","./assets/Atacar_monstro1/Wraith_01_Attack_005.png","./assets/Atacar_monstro1/Wraith_01_Attack_006.png","./assets/Atacar_monstro1/Wraith_01_Attack_007.png","./assets/Atacar_monstro1/Wraith_01_Attack_008.png","./assets/Atacar_monstro1/Wraith_01_Attack_009.png","./assets/Atacar_monstro1/Wraith_01_Attack_010.png","./assets/Atacar_monstro1/Wraith_01_Attack_011.png");
    pocaoo = loadImage("./assets/pocoes/Icon7.png")
}
function setup(){
    claudioG=new Group()
    pocoesG=new Group()
    createCanvas(windowWidth,windowHeight)
    fundo=createSprite(width/2,height*0.5)
    fundo.addImage(imgfundo)
    fundo.scale=2
    personagem1=createSprite(width/2,height*0.7)
    personagem1.addAnimation("pirata1",personagem1Img)
    personagem1.scale=0.2
    personagem1.debug=true
    personagem1.setCollider("rectangle",0,0,70,70)
    fundoinvisivel=createSprite(width*0.1,height*0.7,10,height)
    fundoinvisivel2=createSprite(width*0.9,height*0.7,10,height)
    fundoinvisivel3=createSprite(width*0.5,height*0.82,width,10)
    fundoinvisivel4=createSprite(width*0.5,height*0.4,width,10)
    fundoinvisivel.visible=false
    fundoinvisivel2.visible=false
    fundoinvisivel3.visible=false
    fundoinvisivel4.visible=false

}

function draw(){
    background(imgfundofundo)
    drawSprites()
    move()
    criarmonstros()
    pocoes()
    if (personagem1.isTouching(pocoesG)){
      power+=1
      pocoesG.destroyEach()
    }
    if (keyDown("space")&&personagem1.isTouching(claudioG)&&power>0){
      power-=1
      claudioG.destroyEach()
    }
    else if(personagem1.isTouching(claudioG)&&power>0){
      life-=1
    } 
    personagem1.bounceOff(fundoinvisivel)
    personagem1.bounceOff(fundoinvisivel2)
    personagem1.bounceOff(fundoinvisivel3)
    personagem1.bounceOff(fundoinvisivel4)
    claudioG.bounceOff(fundoinvisivel)
    claudioG.bounceOff(fundoinvisivel2)
    claudioG.bounceOff(fundoinvisivel3)
    claudioG.bounceOff(fundoinvisivel4)
}
function move(){
  if (keyDown(UP_ARROW)&&life>0){
    personagem1.y-=5
  }  
  if (keyDown(LEFT_ARROW)&&life>0){
    personagem1.x-=5
  }
  if (keyDown(RIGHT_ARROW)&&life>0){
    personagem1.x+=5
  }
  if (keyDown(DOWN_ARROW)&&life>0){
    personagem1.y+=5
  }
}
function criarmonstros(){
 if (frameCount%300==0){
  claudio=createSprite(width/2,height/2,30,30)
  claudio.addAnimation("claudio",claudioImg)
  claudio.scale=0.4
  claudio.velocityX=2
  claudio.velocityY=2
  claudioG.add(claudio)
  claudio.debug=-true
  claudio.setCollider("rectangle",0,0,200,200)
 } 
}
function pocoes(){
  posX=Math.round(random(width*0.2,width*0.8))
  posY=Math.round(random(height*0.6,height*0.7))
  if (frameCount%150==0){
    pocao=createSprite(posX,posY)
    pocao.addImage("pocaoo",pocaoo)
    pocoesG.add(pocao)
  }
}  