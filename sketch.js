// Adventure visual novel
// Athiela A. 
// Date

/////////////////// Global variables ////////////////////////////////////

// ---------------- General Game variables --------------------------------//

let state = "start";
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

// play button variables
let playButtonWidth, howToPlayButtonWidth, playButtonHeight, howToPlayButtonHeight, xHowToPlayButton, yHowToPlayButton, xPlayButton, yPlayButton, howToPlayButton, hoverHowToPlay, hoverPlay;

// title variables
let title, rpsStartTitle;

// keybind variables
let keybind, xKeybind, yKeybind, keybindWidth, keybindHeight, keybindMenu, hoverKeybind;

// win lose variables
let youWin, youLose;

// exit variables
let exitButton, hoverExit, theExitButton, theHoverExit,exitMenu, xExitMenu, yExitMenu, exitMenuWidth, exitMenuHeight, areYouSureExit;

// menu variables
let  xMenu, yMenu, menuWidth, menuHeight, howToPlayMenu, menuButton, theMenu;

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

  // rpsStartTitle = loadImage("assets/startTitle.png");
  // title = loadImage("assets/title.png");
  // howToPlayMenu = loadImage("assets/howPlayMenu.png");
  // exitMenu = loadImage("assets/exitMenuButton.png");
  
  cardRock = loadImage("assets/cardRock.png");
  cardPaper = loadImage("assets/cardPaper.png");
  cardScissors = loadImage("assets/cardScissors.png");

  cardFrame = loadImage("assets/cardFrame.png");
  
  // playButton = loadImage("assets/playButton.png");
  // howToPlayButton = loadImage("assets/howToPlayButton.png");
  
  // hoverPlay = loadImage("assets/hoverPlayButton.png");
  // hoverHowToPlay = loadImage("assets/hoverHowToPlayButton.png");

  // youLose = loadImage("assets/youLose.png");
  // youWin = loadImage("assets/youWin.png");

  // hoverKeybind = loadImage("assets/hoverKeybindsButton.png");
  // keybind = loadImage("assets/keybindButton.png");
  // keybindMenu = loadImage("assets/keybindMenu.png");
  // pressEnter = loadImage("assets/pressEnter.png");
  // areYouSureExit = loadImage("assets/areYouSureExit.png");
  // otherPressEnter = loadImage("assets/otherPressEnter.png");
  // youChoseRock = loadImage("assets/youChoseRock.png");
  // youChosePaper = loadImage("assets/youChosePaper.png");
  // youChoseScissors = loadImage("assets/youChoseScissors.png");
  // pressEsc = loadImage("assets/pressEscExit.png");
}
////////////////// Setup //////////////////////////////////////

function setup() {
  createCanvas(800, 800);
  rockPaperScissorsVariables();
  createObject();
}

function draw() {
  background(25);
  gameState();
}


/////////////////// Variable defining for start menu  //////////////////////////

function startMenuVariables() {

}

/////////////////// Variable defining for rock paper scissors  //////////////////////////

function rockPaperScissorsVariables() {
  playButtonHeight = height/5;
  howToPlayButtonHeight = height/5;
  
  xExitMenu = width/20;
  yExitMenu = height/12;
  exitMenuWidth = width/15;
  exitMenuHeight = height/10;
  
  xKeybind = width/2;
  yKeybind = height/1.3;
  keybindWidth = width/4;
  keybindHeight = height/5;
  
  xMenu = width/20;   
  yMenu = height/12;
  menuWidth = width/15;
  menuHeight = height/10;
}

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
  changeState() {
    textState = this.textState;
  }
}

class Card {
  constructor(x, y, cardImage, chooseCardState) {
    this.x = x;
    this.y = y;
    this.image = cardImage;
    this.frame = cardFrame;
    this.width = 150;
    this.height = 200;
    this.changeState = chooseCardState;
  }
  display() {
    image(this.image, this.x, this.y, this.width, this.height);
  }
  hoverClick() {
    if (this.checkIfInside(mouseX, mouseY)) {
      image(this.frame, this.x-25.5, this.y-50, this.width+50, this.height+100);
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

  theCardRock = new Card(100, height/2, cardRock, "rps-choseRock");
  theCardPaper = new Card(400, height/2, cardRock, "rps-choseRock");
  theCardScissors = new Card(700, height/2, cardRock, "rps-choseRock");
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
    displayPlayButton();
    displayHowToPlayButton();
    displayStartTitle();
  }
  else if (state === "rps-howToPlayMenu") {
    displayStartTitle();
    displayhowToMenu();  
    displayExitMenu();
    
    pressExitHowToPlayMenu();
  }
  else if (state === "rps-pressEnter") {
    displayPressEnter();
    pressKeyEnter();
  }
  else if (state === "rps-play") {
    pressMenu();
  }
  else if (state === "rps-menu") {
    displayKeybindButton();
    displayHoverKeybindButton();
    displayStartTitle();
  }
  else if (state === "rps-areYouSureExit") {
    displayAreYouSureExit();
    pressEnterToExit();
  }
  else if (state === "rps-keybind") {
    displayKeybindMenu();
    pressExitKeybindMenu();
  }
  else if (state === "rps-choseRock") {
    displayOtherPressEnter();
    alreadyChoseCard();
  }
  else if (state === "rps-chosePaper") {
    displayOtherPressEnter();
    alreadyChoseCard();
  }
  else if (state === "rps-choseScissors") {
    displayOtherPressEnter();
    alreadyChoseCard();
  }
  else if (state === "rps-results") {
    randomResult();

  }
  else if (state === "rps-youWin") {
    displayYouWin();
    displayPressEsc();
    pressEscExit();
  }
  else if (state === "rps-youLose") {
    displayYouLose();
    displayPressEsc();
    pressEscExit();
  }
}

////////// Display image functions /////////////////

function displayhowToMenu() {
  image(howToPlayMenu, width/2, height/2, width/2, height/1.5);
}
function displayExitMenu() {
  image(exitMenu, width/20, height/12, width/15, height/10);
}

function displayPlayButton() {
  image(playButton, xPlayButton, yPlayButton, playButtonWidth, playButtonHeight);
}
function displayHowToPlayButton() {
  image(howToPlayButton, xHowToPlayButton, yHowToPlayButton, howToPlayButtonWidth, howToPlayButtonHeight);
}
function displayStartTitle() {
  image(rpsStartTitle, width / 2, height / 4, 400, 200);
}
function displayHoverPlay() {
  image(hoverPlay, xPlayButton, yPlayButton, playButtonWidth, playButtonHeight);
}
function displayHoverHowToPlay() {
  image(hoverHowToPlay, xHowToPlayButton, yHowToPlayButton, howToPlayButtonWidth, howToPlayButtonHeight);
}

function displayMenuButton() {
  image(menuButton, xMenu, yMenu, menuWidth, menuHeight);
}
function displayKeybindButton() {
  image(keybind, xKeybind, yKeybind, keybindWidth, keybindHeight);
}

function displayHoverKeybindButton() {
  image(hoverKeybind, xKeybind, yKeybind, keybindWidth, keybindHeight);
}

function displayKeybindMenu() {
  image(keybindMenu, width/2, height/2, width/2, height/1.5);
}

function displayPressEnter() {
  image(pressEnter, width /2, height /2, width/3, height/3);
}

function displayAreYouSureExit() {
  image(areYouSureExit, width/2, height/2, width/2, height/1.5);
}

function displayOtherPressEnter() {
  image(otherPressEnter, width/2, height/1.3, width/10, height/6);
}

function displayYouWin() {
  image(youWin, width/2, height/7, width/2.5, height/2.5);
}

function displayYouLose() {
  image(youLose, width/2, height/7, width/2.5, height/2.5);
}

function displayPressEsc() {
  image(pressEsc, width /2, height /2, width/3, height/3);
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

function pressExitHowToPlayMenu() {
  if (mouseX > xExitMenu - exitMenuWidth/2 && mouseX < xExitMenu + exitMenuWidth/2 && mouseY > yExitMenu - exitMenuHeight/2 && mouseY < yExitMenu + exitMenuHeight/2 && mouseIsPressed || keyIsDown(27)) {
    state = "rps-start";
  }
}

function pressMenu() {
  if (mouseX > xMenu - menuWidth/2 && mouseX < xMenu + menuWidth/2 && mouseY > yMenu - menuHeight/2 && mouseY < yMenu + menuHeight/2 && mouseIsPressed) {
    state = "rps-menu";
  }
}


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
