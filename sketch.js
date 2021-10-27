// Adventure visual novel
// Athiela A. 
// Date

/////////////////// Global variables ////////////////////////////////////

// ---------------- General Game variables --------------------------------//

let state = "rps-start";
let font;

// ------------------ Start Game variables --------------------------------//

let gameTitle;
let playButton, hoverPlayButton, thePlayButton;

// --------------------- Text Box variables --------------------------------//

// text box variables
let emptyText, textState;
let text1, theText;

// scene 1 text
let sceneOneText1, sceneOneText2, sceneOneText3;

// -------------------- Escape Room Minigame ----------------------------- //

// music variable
let music;

// start menu variables
let escroomTitle, startButton, hoverStartButton;

let xPlayButton, yPlayButton, playButtonHeight, playButtonWidth;

// end menu variables, not yet in 
let escroomYouWin;

// sprite variables
let spriteWidth, spriteHeight, spriteFront, spriteBack, spriteLeft, spriteRight;
let spritePosition = "back";

// tile variables
let ground, wall, door, poster, room, boxes;

// furniture variables
let chest, bed, cage;

// interaction variables
let interact;
let hasFood = "no";
let isFed = "not-fed";
let hasKey = "no";

// text-box variables
let textBoxEmpty, textBoxItem, textChest, textDoorHasKey, textDoorNoKey, textFeedHamster, textHamsterFed, textHamsterHideItem, textHamsterNoFood, textPlant, textGetItemFood, textGetItemKey;
let xTextBox, yTextBox, textBoxWidth, textBoxHeight;


// state variables
let playerState = "move";
let escroomTextState = "none";

// grid variables
let cellSize, grid;
let gridDimensions = 6;
let playerX = 250;
let playerY = 250;
let speed = 5;

// -------------------- Rock Paper Scissors Minigame --------------------- //

// card variables
let cardRock, theCardRock, cardPaper, theCardPaper, cardScissors, theCardScissors, cardFrame;

// score variables
let yourWin, theirWin;
let yourScore = 0;
let theirScore = 0;

// start menu variables
let rpsPlayButton, theRpsPlayButton, rpsHoverPlayButton, rpsHowToPlayButton, theRpsHowToPlayButton, rpsHoverHowToPlay, hoverPlay, title, rpsStartTitle, rpsOtherTitle;

// how to play menu variables
let rpsExitMenu;

// keybind variables
let keybind, theKeybind, keybindMenu, theKeybindMenu, hoverKeybind;

// win lose variables
let youWin, youLose;

// exit variables
let exitButton, theExitButton, hoverExit, exitMenu, areYouSureExit;

// menu variables
let howToPlayMenu, theHowToPlayMenu, menuButton, theMenu;

// press key variables
let pressEnter, pressEsc, otherPressEnter;

// choose variables
let youChoseRock, youChosePaper, youChoseScissors;

// result variable
let result = ["win", "lose"];

// hover variables
let rockHover = false;
let paperHover = false;
let scissorsHover = false;
let playButtonHover = false;
let howToPlayButtonHover = false;
let HowPlayMenu = false;

///////////////////////// Load Images //////////////////////////

function preload() {
  // ----------------- Font/Text Preload ---------------- //

  emptyText = loadImage("assets/empty-textbox.png");
  font = loadFont("assets/font.ttf");

  // ------------------ Start Preload ------------------ //

  gameTitle = loadImage("assets/gameTitle.png");
  playButton = loadImage("assets/playButton.png");
  hoverPlayButton = loadImage("assets/hoverPlayButton.png");

  //------------------- Menu Preload ------------------- //

  menuButton = loadImage("assets/menuButton.png");
  hoverExit = loadImage("assets/hoverExitButton.png");
  exitButton = loadImage("assets/exitButton.png");

  //----------- Escape Room Minigame Preload -----------//

  //----------- Rock Paper Scissors Minigame Preload -----------//

  rpsStartTitle = loadImage("assets/startTitle.png");
  title = loadImage("assets/title.png");
  rpsPlayButton = loadImage("assets/rpsPlayButton.png");
  rpsHoverPlayButton = loadImage("assets/rpsHoverPlayButton.png");
  howToPlayMenu = loadImage("assets/howPlayMenu.png");
  exitMenu = loadImage("assets/exitMenuButton.png");
  
  rpsOtherTitle = loadImage("assets/rpsOtherTitle.png");
  cardRock = loadImage("assets/cardRock.png");
  cardPaper = loadImage("assets/cardPaper.png");
  cardScissors = loadImage("assets/cardScissors.png");

  cardFrame = loadImage("assets/cardFrame.png");

  rpsHowToPlayButton = loadImage("assets/howToPlayButton.png");
  rpsHoverHowToPlay = loadImage("assets/hoverHowToPlayButton.png");

  youLose = loadImage("assets/youLose.png");
  youWin = loadImage("assets/youWin.png");

  pressEnter = loadImage("assets/pressEnter.png");
  areYouSureExit = loadImage("assets/areYouSureExit.png");
  otherPressEnter = loadImage("assets/otherPressEnter.png");
  youChoseRock = loadImage("assets/youChoseRock.png");
  youChosePaper = loadImage("assets/youChosePaper.png");
  youChoseScissors = loadImage("assets/youChoseScissors.png");
  pressEsc = loadImage("assets/pressEscExit.png");

  // -----------------------------------------------------------
  // // start preload
  // title = loadImage("assets/startTitle.png");
  // startButton = loadImage("assets/playButton.png");
  // hoverStartButton = loadImage("assets/hoverPlayButton.png");

  // // end preload
  // youWin = loadImage("assets/youEscaped.png");
  // pressEnter = loadImage("assets/pressEnter.png");

  // // tile preload
  // ground = loadImage("assets/floor.png");
  // wall = loadImage("assets/wall.png");
  // door = loadImage("assets/door.png");
  // poster = loadImage("assets/poster.png");
  // boxes = loadImage("assets/box.png");
  // chest = loadImage("assets/chest.png");
  // bed = loadImage("assets/bed.png");
  // cage = loadImage("assets/cage.png");

  // // text box preload
  // interact = loadImage("assets/interact.png");
  // textBoxEmpty = loadImage("assets/text-boxempty.png");
  // textBoxItem = loadImage("assets/text-boxitem.png");
  // textChest = loadImage("assets/text-chest.png");
  // textDoorHasKey = loadImage("assets/text-doorhaskey.png");
  // textDoorNoKey = loadImage("assets/text-doornokey.png");
  // textFeedHamster = loadImage("assets/text-feedhamster.png");
  // textHamsterFed = loadImage("assets/text-hamsterfed.png");
  // textHamsterNoFood = loadImage("assets/text-hamsternofood.png");
  // textPlant = loadImage("assets/text-plant.png");
  // textGetItemFood = loadImage("assets/text-itemfood.png");
  // textGetItemKey = loadImage("assets/text-itemkey.png");

  // // sprite image preload
  // spriteFront = loadImage("assets/spriteFront.png");
  // spriteBack = loadImage("assets/spriteBack.png");
  // spriteLeft = loadImage("assets/spriteLeft.png");
  // spriteRight = loadImage("assets/spriteRight.png");

  // // level preload
  // room = loadStrings("assets/1-escape-room.txt");

  // // music preload
  // music = loadSound("assets/music.mp3");
}
////////////////// Setup //////////////////////////////////////

function setup() {
  createCanvas(800, 800);
  createObject();
}

function draw() {
  background(25);
  gameState();
}

/////////////////// Variable defining for rock paper scissors  //////////////////////////

// ----------------- OBJECTS ----------------------------- //

class Button {
  constructor(x, y, w, h, theImage, theHoverImage, changeState) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.theImage = theImage;
    this.theHoverImage = theHoverImage;
    this.changeState = changeState;
  }
  hoverClick() {
    if (this.checkIfInside(mouseX, mouseY)) {
      image(this.theHoverImage, this.x, this.y, this.width, this.height);
      if (mouseIsPressed) {
        state = this.changeState;
        textState = "scene-one-1";
      }
    }
    else {
      image(this.theImage, this.x, this.y, this.width, this.height);
    }
  }
  checkIfInside(x, y) {
    return x>this.x && x<this.x + this.width &&
    y>this.y && y<this.y + this.height;
  }
}

class Text {
  constructor(x, y, theImage, whatTextDisplay, whatTextChange) {
    this.x = x;
    this.y = y;
    this.image = theImage;
    this.w = width/1.15;
    this.h = height/2.2;
    this.textX = x+50;
    this.textY = y+70;
    this.color = "#dbd4d4";
    this.font = font;
    this.textSize = 23;
    this.text = whatTextDisplay;
    this.textState = whatTextChange;
  }
  display() {
    image(this.image, this.x, this.y, this.w, this.h);
    fill(this.color);
    textFont(this.font);
    textSize(this.textSize);
    text(this.text, this.textX, this.textY);
  }
}

class OtherText {
  constructor(x, y, color, textSize, whatTextDisplay, whichScore) {
    this.x = x;
    this.y = y;
    this.text = whatTextDisplay;
    this.color = color;
    this.font = font;
    this.textSize = textSize;
    this.yourScore = yourScore;
    this.theirScore = theirScore;
    this.whichScore = whichScore;
  }
  display() {
    if (this.whichScore === "yours") {
      textFont(this.font);
      textSize(this.textSize);
      fill(this.color);
      text(this.text + this.yourScore, this.x, this.y);
    }
    else if (this.whichScore === "theirs") {
      textFont(this.font);
      textSize(this.textSize);
      fill(this.color);
      text(this.text + this.theirScore, this.x, this.y);
    }
  }
  update() {
  }
}

class Card {
  constructor(x, y, cardImage, chooseCardState) {
    this.x = x;
    this.y = y;
    this.image = cardImage;
    this.frame = cardFrame;
    this.width = 200;
    this.height = 270;
    this.changeState = chooseCardState;
  }
  display() {
    image(this.image, this.x, this.y, this.width, this.height);
  }
  hoverClick() {
    if (this.checkIfInside(mouseX, mouseY)) {
      image(this.frame, this.x-this.width/5.5, this.y-this.height/4.5, this.width+70, this.height+120);
      if (mouseIsPressed) {
        state = this.changeState;
      }
    }
  }
  checkIfInside(x, y) {
    return x>this.x && x<this.x + this.width &&
    y>this.y && y<this.y + this.height;
  }
}

class Sprite {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.speed = 5;
  }
}

// -------------------- OBJECT CREATION --------------------- //

function createObject() {
  thePlayButton = new Button(width/3.5, height/2, 350, 150, playButton, hoverPlayButton, "scene-one");
    
  theMenu = new Button(15, 30, 80, 80, menuButton, menuButton, "menu");
  theExitButton = new Button (width/3.5, height/2, exitButton, hoverExit, "test");
  
  sceneOneText1 = new Text(width/15, height/2, emptyText, "Test 1");
  sceneOneText2 = new Text(width/15, height/2.5, emptyText, "Test 2");
  sceneOneText3 = new Text(width/15, height/2.5, emptyText, "Test 3");

  theCardRock = new Card(50, height/2.5, cardRock, "rps-choseRock");
  theCardPaper = new Card(300, height/2.5, cardPaper, "rps-choseRock");
  theCardScissors = new Card(550, height/2.5, cardScissors, "rps-choseRock");

  rpsPlayButton = new Button(width/3.5, height/2, 350, 150, rpsPlayButton, rpsHoverPlayButton, "rps-pressEnter");
  rpsHowToPlayButton = new Button(width/3.5, height/1.5, 350, 150, rpsHowToPlayButton, rpsHoverHowToPlay, "rps-howToPlayMenu");

  rpsExitMenu = new Button(width/20, height/12, width/15, height/10, "rps-start");

  theKeybind = new Button(width/3.5, height/1.5, 350, 150, keybind, hoverKeybind, "rps-howToPlayMenu");
}

// ----------------------- TEXT STATE ---------------------- //

// function theTextState() {
//   if (textState === "scene-one-1") {
//     sceneOneText1.display();
//   }
//   else if (textState === "scene-one-2") {
//     sceneOneText2.display();
//   }
//   else if (textState === "scene-one-3") {
//     sceneOneText3.display();
//   }
// }

// function mouseClicked() {
//   if (textState === "scene-one-1") {
//     sceneOneText1.changeState();
//   }
//   if (textState === "scene-one-2") {
//     sceneOneText2.changeState();
//   }
//   if (textState === "scene-one-3") {
//     sceneOneText3.changeState();
//   }
// }
        
////////////// Press Buttons ///////////////
        
function pressButtons() {
  if (keyIsDown(13) && state === "rps-pressEnter") {
    state = "rps-play";
  }
  else if (keyIsDown(27) && (state === "rps-youLose" || state === "rps-youLose")) {
    state = "rps-start";
  }
  else if (keyIsDown(13) && (state === "rps-choseRock" || state === "rps-chosePaper" || state === "rps-choseScissors")) {
    state = "rps-results";
  }
}
/////////////// Game State //////////////////////////////
        
function gameState() {
  // --- Start Screen Gamestate --- // 
  if (state === "start") {
    image(gameTitle, width/3.5, 200, 350, 200);
    thePlayButton.hoverClick();
  }
  else if (state === "menu") {
    background(50);
    theExitButton.hoverClick();
  }
  // TEMPORARY GAME STATE F0R TESTING
  else if (state === "test") {
    background(80);
  }
  else if (state === "scene-one") {
    theMenu.hoverClick();
    // theTextState();
    // mouseClicked();
  }
  // --- Rock Paper Scissors Minigame Gamestate --- // 

  if (state === "rps-start") {
    rpsWonOrLost();
    restoreResult();
    rpsPlayButton.hoverClick();
    image(rpsStartTitle, width/4.3, height/4, 400, 200);
  }
  else if (state === "rps-pressEnter") {
    image(otherPressEnter, width/4, height/3.5, width/2, height/2.5);
    pressButtons();
  }
  else if (state === "rps-play") {
    image(rpsOtherTitle, 250, 50, 300, 150);
    theMenu.hoverClick();
    theCardRock.display();
    theCardRock.hoverClick();

    theCardPaper.display();
    theCardPaper.hoverClick();

    theCardScissors.display();
    theCardScissors.hoverClick();

    yourWinCount();
    theirWinCount();
  }
  else if (state === "rps-choseRock") {
    image(otherPressEnter, width/4, height/3.5, width/2, height/2.5);
    pressButtons();
  }
  else if (state === "rps-chosePaper") {
    image(otherPressEnter, width/4, height/3.5, width/2, height/2.5);

    pressButtons();
  }
  else if (state === "rps-choseScissors") {
    image(otherPressEnter, width/4, height/3.5, width/2, height/2.5);
    pressButtons();
  }
  else if (state === "rps-results") {
    randomResult();
  }
  else if (state === "rps-youWin") {
    image(youWin, width/4, height/5, 350, 200);
    image(pressEsc, width/3.8, height/2.5, 350, 200);
    
    pressButtons();
    // pressEscExit();
  }
  else if (state === "rps-youLose") {
    image(youLose, width/4, height/5, 350, 200);
    image(pressEsc, width/3.8, height/2.5, 350, 200);

    pressButtons();
    // pressEscExit();
  }
  else if (state === "rps-lost") {
    background("red");
  }
  else if (state === "rps-won") {
    background("blue");
  }
  // --- Escape Room Minigame Gamestate --- // 
}

////////////// Chose card/Change functions ////////////////////

function restoreResult() {
  result = ["win", "lose"];
}

function randomResult() {
  if (state === "rps-results") {
    result = random(result);
    if (result === "win") {
      state = "rps-youWin";
      yourScore = yourScore+1;
    }
    if (result === "lose") {
      state = "rps-youLose";
      theirScore = theirScore+1;
    }
  }
}

function yourWinCount() {
  textFont(font);
  textSize(23);
  fill("e53835");
  text("Win: " + yourScore, 30, height-10);
}

function theirWinCount() {
  textFont(font);
  textSize(23);
  fill("e53835");
  text("Win: " + theirScore, width-120, height-10);
}

function rpsWonOrLost() {
  if (yourScore === 3) {
    state = "rps-won";
  }
  else if (theirScore === 3) {
    state = "rps-lost";
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ----- Escape Room Minigame -------- //

///////////////////////// Setup and preload ////////////////////////////////////////

function escroomSetup() {
  createCanvas(800, 800);

  // cell setup
  grid = room;
  cellSize = width/gridDimensions;

  // sprite setup
  spriteWidth = 100;
  spriteHeight = 100;

  // button setup
  xPlayButton = width/3.5;
  yPlayButton = height/2;
  playButtonWidth = 350;
  playButtonHeight = 150;

  xTextBox = width/7;
  yTextBox = height/4;
  textBoxWidth = width/1.4;
  textBoxHeight = height/2.2;

  // music loop
  music.loop();
}

function draw() {
  background(220);
  gameState();
}

/////////////////// game state //////////////////////////////

function gameState() {
  // state - start screen
  if (state === "start") {
    background(100);

    image(title, width/3.5, 200, 350, 200);
    hoverStartButtons();
    pressPlay();
  }
  // state - walking around room
  if (state === "play") {
    displayGrid();
    characterMovement();
    overBorder();
    interactFurniture();
  }
  // state - check if you got item already or not
  if (state === "box-item") {
    displayGrid();
    exitText();
    boxItem();
  }
  // state - ask if you want to pick up food
  if (state === "food-get") {
    displayGrid();
    image(textBoxItem, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    foodGet();
  }
  // state - food acquired
  if (state === "food-pickup") {
    displayGrid();
    image(textGetItemFood, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    exitText();
  }
  // state - check if you fed the hamster yet or not
  if (state === "cage") {
    displayGrid();
    cageInteraction();
  }
  // state - ask to feed hamster
  if (state === "feed-hamster") {
    displayGrid();
    image(textFeedHamster, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    feedHamster();
  }
  // state - key acquired
  if (state === "key-pickup") {
    displayGrid();
    image(textGetItemKey, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    exitText();
  }
  // state - ask to use key
  if (state === "key-has") {
    displayGrid();
    image(textDoorHasKey, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    useKey();
  }
  // state - empty box dialogue
  if (state === "box-none") {
    displayGrid();
    exitText();
    image(textBoxEmpty, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
  }
  // state - plant dialogue
  if (state === "plant") {
    displayGrid();
    exitText();
    image(textPlant, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
  }
  // state - chest dialogue
  if (state === "chest") {
    displayGrid();
    exitText();
    image(textChest, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
  }
  // state - check to see if you have key to door
  if (state === "door") {
    displayGrid();
    exitText();
    doorInteraction();
  }
  // state - you escaped!
  if (state === "you-win") {
    background(119, 65, 65);
    image(youWin, width/4, height/4, 400, 200);
    image(pressEnter, width/4, height/1.8, 400, 200);
    backToStart();
  }
}

////////////////// display functions /////////////////////////////////

function displayGrid() {
  for (let y=0; y<gridDimensions; y++) {
    for (let x=0; x<gridDimensions; x++) {
      // floor
      if (grid[y][x] === "0") {
        image(ground, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      // wall
      if (grid[y][x] === "1") {
        image(wall, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      // door
      if (grid[y][x] === "2") {
        image(door, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      // bed **note: change to plant**
      if (grid[y][x] === "3") {
        image(bed, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      // cage
      if (grid[y][x] === "4") {
        image(cage, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      // chest
      if (grid[y][x] === "5") {
        image(chest, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      // poster
      if (grid[y][x] === "#") {
        image(poster, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      // boxes
      if (grid[y][x] === "*") {
        image(boxes, x*cellSize, y*cellSize, cellSize, cellSize);
      }
    }
  }
}

function createEmptyGrid(cols, rows) {
  let emptyGrid = [];
  for (let y = 0; y<rows; y++) {
    emptyGrid.push([]);
    for (let x = 0; x<cols; x++) {
      emptyGrid[y].push(0);
    }
  }
  return emptyGrid;
}

//////////////////// character movement ///////////////////////////////

function characterMovement() {
  // move character
  if (playerState === "move") {
    if (keyIsDown(87)){ //w
      playerY -= speed;
      image(spriteBack, playerX, playerY, spriteWidth, spriteHeight);
      spritePosition = "forward";
    }
    else if (keyIsDown(83)){ //s
      playerY += speed;
      image(spriteFront, playerX, playerY, spriteWidth, spriteHeight);
      spritePosition = "back";
    }
    else if (keyIsDown(65)){ //a
      playerX -= speed;
      image(spriteLeft, playerX, playerY, spriteWidth, spriteHeight);
      spritePosition = "left";
    }
    else if (keyIsDown(68)){ //d
      playerX += speed;
      image(spriteRight, playerX, playerY, spriteWidth, spriteHeight);
      spritePosition = "right";
    }
    else {
      keyReleased();
    }
  }
}


function keyReleased() {
  // keep facing whichever position 
  if (spritePosition === "forward") {
    image(spriteBack, playerX, playerY, spriteWidth, spriteHeight);
  }
  else if (spritePosition === "back") {
    image(spriteFront, playerX, playerY, spriteWidth, spriteHeight);
  }
  else if (spritePosition === "left") {
    image(spriteLeft, playerX, playerY, spriteWidth, spriteHeight);
  }
  else if (spritePosition === "right") {
    image(spriteRight, playerX, playerY, spriteWidth, spriteHeight);
  }
}

function overBorder() {
  // check if over left side
  if (playerX < 0+cellSize*1.9) {
    playerX = playerX + 8;
  }
  // check if over right side
  if (playerX > width-cellSize*1.65) {
    playerX = playerX - speed;
  }
  // check if over top
  if (playerY < cellSize+12) {
    playerY = playerY + (speed+3);
  }
  // check if over bottom
  if (playerY > height-cellSize*1.7) {
    playerY = playerY - speed;
  }
}

////////////////////////// Character interaction /////////////////////////////////////////

function interactFurniture() {
  // interact with box with item
  if (playerX < cellSize*2 && playerY < cellSize*1.7 && spritePosition ==="left") {
    if (keyIsDown(13)) {
      state = "box-item";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with cage
  else if (playerX < cellSize*2 && playerY < cellSize*2.7 && spritePosition ==="left") {
    if (keyIsDown(13)){
      state = "cage";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with box without item
  else if (playerX < cellSize*2 && playerY < cellSize*3.7 && spritePosition ==="left") {
    if (keyIsDown(13)){
      state = "box-none";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with plant
  else if (playerX < cellSize*2 && playerY < cellSize*4.7 && spritePosition ==="left") {
    if (keyIsDown(13)){
      state = "plant";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with plant
  else if (playerX < cellSize*2.5 && playerY > height-cellSize*1.9 && spritePosition ==="back") {
    if (keyIsDown(13)){
      state = "plant";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with box without item
  else if (playerX < cellSize*3.5 && playerY > height-cellSize*1.9 && spritePosition ==="back") {
    if (keyIsDown(13)){
      state = "box-none";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with plant
  else if (playerX < cellSize*4.5 && playerY > height-cellSize*1.9 && spritePosition ==="back") {
    if (keyIsDown(13)){
      state = "plant";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with box without item
  else if (playerX > width-cellSize*2 && playerY > height-cellSize*2.5 && spritePosition ==="right") {
    if (keyIsDown(13)){
      state = "box-none";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with box without item
  else if (playerX > width-cellSize*2 && playerY > height-cellSize*3.5 && spritePosition ==="right") {
    if (keyIsDown(13)){
      state = "box-none";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with chest
  else if (playerX > width-cellSize*2 && playerY > height-cellSize*4.5 && spritePosition ==="right") {
    if (keyIsDown(13)){
      state = "chest";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with box without item
  else if (playerX > width-cellSize*2 && playerY > height-cellSize*5.5 && spritePosition ==="right") {
    if (keyIsDown(13)){
      state = "box-none";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with door
  else if (playerX > cellSize*2.5 && playerX < cellSize*3.5 && playerY < cellSize+30 && spritePosition ==="forward") {
    if (keyIsDown(13)){
      state = "door";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
}

// exit text with escape key
function exitText() {
  if (keyIsDown(27)){
    state = "play";
  }
}

// ask to pick up food function
function foodGet() {
  if (keyIsDown(49)){
    state = "food-pickup";
    hasFood = "yes";
  }
  else if (keyIsDown(50)){
    state = "play";
  }
}

// ask to feed hamster function
function feedHamster() {
  if (keyIsDown(49)){
    state = "key-pickup";
    hasKey = "yes";
    isFed = "yes";
  }
  else if (keyIsDown(50)){
    state = "play";
  }
}

// check to see if you got item from box yet function
function boxItem() {
  if (hasFood === "no") {
    state = "food-get";
  }
  if (hasFood === "yes") {
    image(textBoxEmpty, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
  }
}

// ask to use key function
function useKey() {
  if (keyIsDown(49)){
    state = "you-win";
  }
  else if (keyIsDown(50)){
    state = "play";
  }
}

// check to see if you fed the hamster yet function
function cageInteraction() {
  if (hasFood === "no" && isFed === "not-fed") {
    image(textHamsterNoFood, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    exitText();
  }
  else if (hasFood === "yes" && isFed === "not-fed") {
    state = "feed-hamster";
  }
  else if (isFed === "yes") {
    image(textHamsterFed, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    exitText();
  }
}

// check to see if you have a key function
function doorInteraction() {
  if (hasKey === "yes") {
    state = "key-has";
  }
  if (hasKey === "no") {
    image(textDoorNoKey, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    exitText();
  }
}

///////////////////////// Button hover and press /////////////////////////////////////////

function hoverStartButtons() {
  // hovering
  if (mouseX > xPlayButton && mouseX < xPlayButton + playButtonWidth && mouseY > yPlayButton && mouseY < yPlayButton + playButtonHeight) {
    image(hoverStartButton, xPlayButton, yPlayButton, playButtonWidth, playButtonHeight);
  }
  // not hovering
  else {
    image(startButton, xPlayButton, yPlayButton, playButtonWidth, playButtonHeight);
  }
}

function pressPlay() {
  if (mouseX > xPlayButton && mouseX < xPlayButton + playButtonWidth && mouseY > yPlayButton && mouseY < yPlayButton + playButtonHeight && mouseIsPressed) {
    state = "play";
  }
}

function backToStart() {
  if (keyIsDown(13)) {
    // state back to start
    state = "start";

    // restore
    hasFood = "no";
    isFed = "not-fed";
    hasKey = "no";
  }
}
