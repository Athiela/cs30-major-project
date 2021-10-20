// Adventure visual novel
// Athiela A. 
// Date

/////////////////// Global variables ////////////////////////////////////

// ---------------- General Game variables --------------------------------//

let state = "start";

// ------------------ Start Game variables --------------------------------//

let gameTitle;
let playButton, hoverPlayButton, thePlayButton;

// TEMPORARY FOR TESTING
let text1, theText;

// -------------------- Escape Room Minigame ----------------------------- //

// Sprite variables
let spriteFront, spriteback, spriteLeft, spriteRight;

// -------------------- Rock Paper Scissors Minigame --------------------- //

// card variables
let cardR, cardP, cardS, xCardRock, yCardRock, xCardPaper, yCardPaper, xCardScissors, yCardScissors, cardWidth, cardHeight, cardFrame;

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

////////////////// Setup //////////////////////////////////////
function setup() {
  createCanvas(800, 800);
  rockPaperScissorsVariables();

  thePlayButton = new Button(width/3.5, height/2, playButton, hoverPlayButton, "scene1-text");
  
  theMenu = new Button(100, 100, menuButton, menuButton, "menu");
  theExitButton = new Button (width/3.5, height/2, exitButton, hoverExit, "test");
  
  theText = new Text(width/7, height/4, text1);
}

function draw() {
  background(25);
  gameState();
}

//////////// Load Images //////////////////////////

function preload() {
  // ------------------ Start Preload ------------------ //

  gameTitle = loadImage("assets/gameTitle.png");
  playButton = loadImage("assets/playButton.png");
  hoverPlayButton = loadImage("assets/hoverPlayButton.png");

  // TEMPRARY PRELOAD FOR TESTING
  text1 = loadImage("assets/text-temp.png");

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
  
  // cardR = loadImage("assets/cardRock.png");
  // cardP = loadImage("assets/cardPaper.png");
  // cardS = loadImage("assets/cardScissors.png");

  // cardFrame = loadImage("assets/cardFrame.png");
  
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

/////////////////// Variable defining for start menu  //////////////////////////

function startMenuVariables() {

}

/////////////////// Variable defining for rock paper scissors  //////////////////////////

function rockPaperScissorsVariables() {
  xCardRock = width/4;
  yCardRock = height/2;
  
  xCardPaper = width/2;
  yCardPaper = height/2;
  
  xCardScissors = width/1.3;
  yCardScissors = height/2;
  cardWidth = width/6;
  cardHeight = height/2.2;

  xHowToPlayButton = width/2;
  yHowToPlayButton = height/1.3;

  xPlayButton = width/2;
  yPlayButton = height/2;

  playButtonWidth = width/4;
  howToPlayButtonWidth = width/4;

  playButtonHeight = height/5;
  howToPlayButtonHeight = height/5;

  xExitMenu = width/20;
  yExitMenu = height/12;
  exitMenuWidth = width/15;
  exitMenuHeight = height/10;

  xExitButton = width/2;
  yExitButton = height/2;
  exitButtonWidth = width/4;
  exitButtonHeight = height/5;

  xKeybind = width/2;
  yKeybind = height/1.3;
  keybindWidth = width/4;
  keybindHeight = height/5;

  xMenu = width/20;   
  yMenu = height/12;
  menuWidth = width/15;
  menuHeight = height/10;
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
  else if (state === "scene1-text") {
    theText.display();
    theMenu.hoverClick();
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
    displayCardRock();
    displayCardPaper();
    displayCardScissors();
    displayRockFrame();
    displayPaperFrame();
    displayScissorsFrame();
    displayMenuButton();

    displayTitle();
    hoverCards();
    
    pressRockCard();
    pressPaperCard();
    pressScissorsCard();
    pressMenu();
  }
  else if (state === "rps-menu") {
    displayExitButton();
    displayHoverExitButton();
    displayKeybindButton();
    displayHoverKeybindButton();
    
    hoverMenuButtons();
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
    displayCardRock();
    displayYouChoseRock();
    displayOtherPressEnter();
    changeCardRockPos();
    alreadyChoseCard();
  }
  else if (state === "rps-chosePaper") {
    displayCardPaper();
    displayYouChosePaper();
    displayOtherPressEnter();
    alreadyChoseCard();
  }
  else if (state === "rps-choseScissors") {
    displayCardScissors();
    displayYouChoseScissors();
    displayOtherPressEnter();
    changeCardScissorsPos();
    alreadyChoseCard();
  }
  else if (state === "rps-results") {
    randomResult();

  }
  else if (state === "rps-youWin") {
    displayYouWin();
    displayPressEsc();
    pressEscExit();
    restoreCardPos();
  }
  else if (state === "rps-youLose") {
    displayYouLose();
    displayPressEsc();
    pressEscExit();
    restoreCardPos();
  }
}

// --------------------------------------------------- //
// ------------- OBJECTS ----------------------------- //
// --------------------------------------------------- //

class Button {
  constructor(x, y, theImage, theHoverImage, changeState) {
    this.x = x;
    this.y = y;
    this.width = 350;
    this.height = 150;
    this.theImage = theImage;
    this.theHoverImage = theHoverImage;
    this.changeState = changeState;
  }
  hoverClick() {
    if (this.checkIfInside(mouseX, mouseY)) {
      image(this.theHoverImage, this.x, this.y, this.width, this.height);
      if (mouseIsPressed) {
        state = this.changeState;
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
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.image = theImage;
    this.w = width/1.4;
    this.h = height/2.2;
  }
  display() {
    image(this.image, this.x, this.y, this.w, this.h);
  }
}

// --------------------------------------------------- //
// ----------- START MENU ---------------------------- //
// --------------------------------------------------- //


////////// Display image functions /////////////////

function displayTitle() {
  image(title, width / 2, height /7, 200, 100);
}

function displayCardRock() {
  image(cardR, xCardRock, yCardRock, cardWidth, cardHeight);
}

function displayCardPaper() {
  image(cardP, xCardPaper, yCardPaper, cardWidth, cardHeight);
}

function displayCardScissors() {
  image(cardS, xCardScissors, yCardScissors, cardWidth, cardHeight);
}

function displayRockFrame() {
  if (rockHover === true) {
    image(cardFrame, xCardRock, yCardRock, cardWidth + 105, cardHeight + 155);
  }
}

function displayPaperFrame() {
  if (paperHover === true) {
    image(cardFrame, xCardPaper, yCardPaper, cardWidth + 105, cardHeight + 155);
  }
}

function displayScissorsFrame() {
  if (scissorsHover === true) {
    image(cardFrame, xCardScissors, yCardScissors, cardWidth + 105, cardHeight + 155);
  }
}

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

function displayExitButton() {
  image(exitButton, xExitButton, yExitButton, exitButtonWidth, exitButtonHeight);
}

function displayHoverExitButton() {
  image(hoverExit, xExitButton, yExitButton, exitButtonWidth, exitButtonHeight);
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

function displayYouChoseRock() {
  image(youChoseRock, width/2, yCardScissors/2.5, width/10, height/6);
}

function displayYouChosePaper() {
  image(youChosePaper, width/2, yCardScissors/2.5, width/10, height/6);
}

function displayYouChoseScissors() {
  image(youChoseScissors, width/2, yCardScissors/2.5, width/10, height/6);
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

///////////// Game = Play Functions /////////////////////

function hoverMenuButtons() {
  if (mouseX > xExitButton - exitButtonWidth/2 && mouseX < xExitButton + exitButtonWidth/2 && mouseY > yExitButton - exitButtonHeight/2 && mouseY < yExitButton + exitButtonHeight/2) {
    displayHoverExitButton();
  }
  else {
    displayExitButton();
  }
  if (mouseX > xKeybind - keybindWidth/2 && mouseX < xKeybind + keybindWidth/2 && mouseY > yKeybind - keybindHeight/2 && mouseY < yKeybind + keybindHeight/2) {
    displayHoverKeybindButton();
  }
  else {
    displayKeybindButton();
  }
}

////////////// Chose card/Change functions ////////////////////

function hoverCards() {
  if (mouseX > xCardRock - cardWidth / 2 && mouseX < xCardRock + cardWidth / 2 && mouseY > yCardRock - cardHeight / 2 && mouseY < yCardRock + cardHeight / 2) {
    rockHover = true;
  }
  else {
    rockHover = false;
  }
  if (mouseX > xCardPaper - cardWidth / 2 && mouseX < xCardPaper + cardWidth / 2 && mouseY > yCardPaper - cardHeight / 2 && mouseY < yCardPaper + cardHeight / 2) {
    paperHover = true;
  }
  else {
    paperHover = false;
  }
  if (mouseX > xCardScissors - cardWidth / 2 && mouseX < xCardScissors + cardWidth / 2 && mouseY > yCardScissors - cardHeight / 2 && mouseY < yCardScissors + cardHeight / 2) {
    scissorsHover = true;
  } 
  else {
    scissorsHover = false;
  }
}

function changeCardRockPos() {
  xCardRock = width/2;
  yCardRock = height/2;
}

function changeCardScissorsPos() {
  xCardScissors = width/2;
  yCardScissors = height/2;
}

function restoreCardPos() {
  xCardRock = width/4;
  yCardRock = height/2;

  xCardPaper = width/2;
  yCardPaper = height/2;

  xCardScissors = width/1.3;
  yCardScissors = height/2;
  cardWidth = width/6;
  cardHeight = height/2.2;

  cardWidth = width/6;
  cardHeight = height/2.2;
}

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

function pressRockCard() {
  if (mouseX > xCardRock - cardWidth / 2 && mouseX < xCardRock + cardWidth / 2 && mouseY > yCardRock - cardHeight / 2 && mouseY < yCardRock + cardHeight / 2 && mouseIsPressed || keyIsDown(49)) {
    state = "rps-choseRock";
  }
}

function pressPaperCard() {
  if (mouseX > xCardPaper - cardWidth / 2 && mouseX < xCardPaper + cardWidth / 2 && mouseY > yCardPaper - cardHeight / 2 && mouseY < yCardPaper + cardHeight / 2 && mouseIsPressed || keyIsDown(50)) {
    state = "rps-chosePaper";
  }
}

function pressScissorsCard() {
  if (mouseX > xCardScissors - cardWidth / 2 && mouseX < xCardScissors + cardWidth / 2 && mouseY > yCardScissors - cardHeight / 2 && mouseY < yCardScissors + cardHeight / 2 && mouseIsPressed || keyIsDown(51)) {
    state = "rps-choseScissors";
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
