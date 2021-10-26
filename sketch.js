// Adventure visual novel
// Athiela A. 
// Date

/////////////////// Global variables ////////////////////////////////////

// ---------------- General Game variables --------------------------------//

let state = "rps-play";
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

// Sprite variables
let spriteFront, spriteback, spriteLeft, spriteRight;

// -------------------- Rock Paper Scissors Minigame --------------------- //

// card variables
let cardRock, theCardRock, cardPaper, theCardPaper, cardScissors, theCardScissors, cardFrame;

// score variables
let yourWinCount, theirWinCount;

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

  hoverKeybind = loadImage("assets/hoverKeybindsButton.png");
  keybind = loadImage("assets/keybindButton.png");
  keybindMenu = loadImage("assets/keybindMenu.png");
  pressEnter = loadImage("assets/pressEnter.png");
  areYouSureExit = loadImage("assets/areYouSureExit.png");
  otherPressEnter = loadImage("assets/otherPressEnter.png");
  youChoseRock = loadImage("assets/youChoseRock.png");
  youChosePaper = loadImage("assets/youChosePaper.png");
  youChoseScissors = loadImage("assets/youChoseScissors.png");
  pressEsc = loadImage("assets/pressEscExit.png");
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
  constructor(x, y, w, h, color, textSize, whatTextDisplay) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.text = whatTextDisplay;
    this.color = color;
    this.font = font;
    this.textSize = textSize;
  }
  display() {
    fill(this.color);
    textFont(this.font);
    textSize(this.textSize);
    text(this.text, this.x, this.y);
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

  yourWinCount = new OtherText(50, height-10, width/1.15, )
  theirWinCount = 
}

// ----------------------- TEXT STATE ---------------------- //

function theTextState() {
  if (textState === "scene-one-1") {
    sceneOneText1.display();
  }
  else if (textState === "scene-one-2") {
    sceneOneText2.display();
  }
  else if (textState === "scene-one-3") {
    sceneOneText3.display();
  }
}

function mouseClicked() {
  if (textState === "scene-one-1") {
    sceneOneText1.changeState();
  }
  if (textState === "scene-one-2") {
    sceneOneText2.changeState();
  }
  if (textState === "scene-one-3") {
    sceneOneText3.changeState();
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
    theTextState();
    mouseClicked();
  }
  // --- Rock Paper Scissors Minigame Gamestate --- // 

  if (state === "rps-start") {
    restoreResult();
    rpsPlayButton.hoverClick();
    image(rpsStartTitle, width/4.3, height/4, 400, 200);
  }
  else if (state === "rps-pressEnter") {
    image(otherPressEnter, width/4, height/3.5, width/2, height/2.5);
    pressKeyEnter();
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

    fill("#dbd4d4");
    textSize(23);
    textAlign(CENTER, CENTER);
    text("Win", 50, height-10);
  }
  else if (state === "rps-areYouSureExit") {
    image(areYouSureExit, width/2, height/1.3, width/10, height/6);
    pressEnterToExit();
  }
  else if (state === "rps-keybind") {
    image(keybindMenu, width/2, height/2, width/1.5, height/1.5);
    pressExitKeybindMenu();
  }
  else if (state === "rps-choseRock") {
    image(otherPressEnter, width/4, height/3.5, width/2, height/2.5);
    alreadyChoseCard();
  }
  else if (state === "rps-chosePaper") {
    image(otherPressEnter, width/4, height/3.5, width/2, height/2.5);
    alreadyChoseCard();
  }
  else if (state === "rps-choseScissors") {
    image(otherPressEnter, width/4, height/3.5, width/2, height/2.5);
    alreadyChoseCard();
  }
  else if (state === "rps-results") {
    randomResult();
  }
  else if (state === "rps-youWin") {
    image(youWin, width/4, height/5, 350, 200);
    image(pressEsc, width/3.8, height/2.5, 350, 200);
    pressEscExit();
  }
  else if (state === "rps-youLose") {
    image(youLose, width/4, height/5, 350, 200);
    image(pressEsc, width/3.8, height/2.5, 350, 200);
    pressEscExit();
  }
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
    }
    if (result === "lose") {
      state = "rps-youLose";
    }
  }
}
////////////// Press Buttons ///////////////

function pressKeyEnter() {
  if (keyIsDown(13)) {
    state = "rps-play";
  }
}

function pressEnterToExit() {
  if (keyIsDown(13)) {
    state = "rps-start";
  }
}

function pressExitKeybindMenu() {
  if (keyIsDown(27)) {
    state = "rps-play";
  }
}

function alreadyChoseCard() {
  if (keyIsDown(13)) {
    state = "rps-results";
  }
}

function pressEscExit() {
  if (keyIsDown(27)) {
    state = "rps-start";
  }
}
