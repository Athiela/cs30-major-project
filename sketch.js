// Adventure visual novel
// Athiela A. 
// Date

/////////////////// Global variables ////////////////////////////////////

// ---------------- General Game variables --------------------------------//

// state 
let state = "scene-two-pt2";

let font;
let bgScene;

// endings
let trueEnd = 0;
let badEnd = 0;

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
let escTitle, escStartButton, hoverEscStartButton, theEscStartButton;

let xPlayButton, yPlayButton, playButtonHeight, playButtonWidth;

// end menu variables
let escYouWin;

// sprite variables
let spriteWidth, spriteHeight, spriteFront, spriteBack, spriteLeft, spriteRight;
let spritePosition = "back";

// tile variables
let ground, wall, door, poster, room, boxes;

// furniture variables
let chest, plant, cage;

// interaction variables
let interact;
let hasFood = "no";
let isFed = "not-fed";
let hasKey = "no";

// text-box variables
let textBoxEmpty, textBoxItem, textChest, textDoorHasKey, textDoorNoKey, textFeedHamster, textHamsterFed, textHamsterHideItem, textHamsterNoFood, textPlant, textGetItemFood, textGetItemKey;
let xTextBox, yTextBox, textBoxWidth, textBoxHeight;

let boxEmpty, boxItem, theChest, doorHasKey, doorNoKey, feedHamster, hamsterFed, hamsterHideItem, hamsterNoFood, thePlant, getItemFood, getItemKey;
let escYes, escNo;

// state variables
let playerState = "move";
let escroomTextState = "none";

// grid variables
let cellSize, grid;
let gridDimensions = 6;
let playerX = 250;
let playerY = 250;
let speed = 5;

let youEscaped;

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
let rpsYouWin, rpsYouLose;

// exit variables
let exitButton, theExitButton, hoverExit, exitMenu, areYouSureExit;

// menu variables
let howToPlayMenu, theHowToPlayMenu, menuButton, theMenu;

// press key variables
let pressEnter, pressEsc, otherPressEnter;

// choose variables
let youChoseRock, youChosePaper, youChoseScissors;

// result variable
let theResult;
let result = ["win", "lose"];

// hover variables
let rockHover = false;
let paperHover = false;
let scissorsHover = false;
let playButtonHover = false;
let howToPlayButtonHover = false;
let HowPlayMenu = false;

// ---------------------- Catch Falling objects minigame ----------------------- //

let vase, playerCatchX, playerCatchY, objectX, objectY, objectWidth, objectHeight, objectSpeed, playerSpeed, newXPos;
let catchScore = 0;
let health = 4;
let healthTally, scoreTally;

///////////////////////// Load Images //////////////////////////

function preload() {
  // ----------------- Font/Text Preload -------------------- //

  emptyText = loadImage("assets/empty-textbox.png");
  font = loadFont("assets/font.ttf");

  // ------------------ Start Preload ----------------------- //

  gameTitle = loadImage("assets/gameTitle.png");
  playButton = loadImage("assets/playButton.png");
  hoverPlayButton = loadImage("assets/hoverPlayButton.png");
  bgScene = loadImage("assets/bgText.png");

  //------------------- Menu Preload ----------------------- //

  menuButton = loadImage("assets/menuButton.png");
  hoverExit = loadImage("assets/hoverExitButton.png");
  exitButton = loadImage("assets/exitButton.png");

  //----------- Escape Room Minigame Preload ---------------//

  // start preload
  escTitle = loadImage("assets/escroom-startTitle.png");
  escStartButton = loadImage("assets/playButton.png");
  hoverEscStartButton = loadImage("assets/hoverPlayButton.png");

  // end preload
  escYouWin = loadImage("assets/youEscaped.png");
  pressEnter = loadImage("assets/pressEnter.png");

  // tile preload
  ground = loadImage("assets/floor.png");
  wall = loadImage("assets/wall.png");
  door = loadImage("assets/door.png");
  boxes = loadImage("assets/box.png");
  chest = loadImage("assets/chest.png");
  plant = loadImage("assets/plant.png");
  cage = loadImage("assets/cage.png");

  // text box preload
  interact = loadImage("assets/interact.png");
  textBoxEmpty = loadImage("assets/text-boxempty.png");
  textBoxItem = loadImage("assets/text-boxitem.png");
  textChest = loadImage("assets/text-chest.png");
  textDoorHasKey = loadImage("assets/text-doorhaskey.png");
  textDoorNoKey = loadImage("assets/text-doornokey.png");
  textFeedHamster = loadImage("assets/text-feedhamster.png");
  textHamsterFed = loadImage("assets/text-hamsterfed.png");
  textHamsterNoFood = loadImage("assets/text-hamsternofood.png");
  textPlant = loadImage("assets/text-plant.png");
  textGetItemFood = loadImage("assets/text-itemfood.png");
  textGetItemKey = loadImage("assets/text-itemkey.png");

  // sprite image preload
  spriteFront = loadImage("assets/spriteFront.png");
  spriteBack = loadImage("assets/spriteBack.png");
  spriteLeft = loadImage("assets/spriteLeft.png");
  spriteRight = loadImage("assets/spriteRight.png");

  // level preload
  room = loadStrings("assets/1-escape-room.txt");

  youEscaped = loadImage("assets/youEscaped.png");

  //------- Rock Paper Scissors Minigame Preload -----------//

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

  rpsYouLose = loadImage("assets/youLose.png");
  rpsYouWin = loadImage("assets/youWin.png");

  pressEnter = loadImage("assets/pressEnter.png");
  areYouSureExit = loadImage("assets/areYouSureExit.png");
  otherPressEnter = loadImage("assets/otherPressEnter.png");
  youChoseRock = loadImage("assets/youChoseRock.png");
  youChosePaper = loadImage("assets/youChosePaper.png");
  youChoseScissors = loadImage("assets/youChoseScissors.png");
  pressEsc = loadImage("assets/pressEscExit.png");

  // -------------- Catch Minigame Preload --------------------- //

  vase = loadImage("assets/vase.png");
}
////////////////// Setup //////////////////////////////////////

function setup() {
  createCanvas(800, 800);
  createObject();
  escroomSetup();
  catchObjectsSetup();
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
  constructor(x, y, whatTextDisplay) {
    this.x = x;
    this.y = y;
    this.image = emptyText;
    this.w = width/1.15;
    this.h = height/2.2;
    this.textX = x+50;
    this.textY = y+70;
    this.color = "white";
    this.font = font;
    this.textSize = 23;
    this.text = whatTextDisplay;
  }
  display() {
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

// -------------------- OBJECT CREATION --------------------- //

function createObject() {
  thePlayButton = new Button(width/3.5, height/2, 350, 150, playButton, hoverPlayButton, "scene-one");
    
  theMenu = new Button(15, 30, 80, 80, menuButton, menuButton, "start");

  theCardRock = new Card(50, height/2.5, cardRock, "rps-choseRock");
  theCardPaper = new Card(300, height/2.5, cardPaper, "rps-choseRock");
  theCardScissors = new Card(550, height/2.5, cardScissors, "rps-choseRock");

  rpsPlayButton = new Button(width/3.5, height/2, 350, 150, rpsPlayButton, rpsHoverPlayButton, "rps-pressEnter");
  rpsHowToPlayButton = new Button(width/3.5, height/1.5, 350, 150, rpsHowToPlayButton, rpsHoverHowToPlay, "rps-howToPlayMenu");

  rpsExitMenu = new Button(width/20, height/12, width/15, height/10, "rps-start");

  theKeybind = new Button(width/3.5, height/1.5, 350, 150, keybind, hoverKeybind, "rps-howToPlayMenu");

  theEscStartButton = new Button(width/3.5, height/2, 350, 150, escStartButton, hoverEscStartButton, "esc-play");
}
// ----------------------- TEXT STATE ---------------------- //

function mousePressed() {
  if (state === "scene-one") {
    state = "scene-one-choice";
  }
}

function displayText() {
  if (state === "scene-one") {
    let dialogueOne = "You walk out of your house one fine#sunday afternoon looking for a dollar to#get your chocolate bar. Suddenly, a kid#approachesyou and asks#to play rock paper scissors#with him. Do you accept?#[1] yes#[2] no";
    let a = split(dialogueOne, "#");
    textFont(font);
    textSize(23);
    fill("white");

    // split text - dialogue 1
    text(a[0], width/10, height/3);
    text(a[1], width/10, height/3+30);
    text(a[2], width/10, height/3+60);
    text(a[3], width/10, height/3+90);
    text(a[4], width/10, height/3+120);
    text(a[5], width/10, height/3+150);

    // choices
    text(a[6], width/10, height/3+250);
    text(a[7], width/2, height/3+250);
  }
  else if (state === "scene-one-other") {
    let dialogueOneOther = "You decided it was not worth it.#(Press Enter)";
    let aother = split(dialogueOneOther, "#");
    textFont(font);
    textSize(23);
    fill("white");

    text(aother[0], width/10, height/3);
    text(aother[1], width/10, height/3+30);
  }
  else if (state === "scene-two") {
    let dialogueTwo = "#Unfortunately, he has no money.#So, you turn over and see a woman.#She says she'll#give you money if you go to#her house.#Do you accept?#[1] yes#[2] no";
    let b = split(dialogueTwo, "#");

    textFont(font);
    textSize(23);
    fill("white");

    text(b[0], width/10, height/3);
    text(b[1], width/10, height/3+30);
    text(b[2], width/10, height/3+60);
    text(b[3], width/10, height/3+90);
    text(b[4], width/10, height/3+120);
    text(b[5], width/10, height/3+150);

    text(b[6], width/10, height/3+180);
    text(b[7], width/10, height/3+280);
    text(b[8], width/2, height/3+280);
  }
  else if (state === "scene-two-pt2") {
    let dialogueTwoPt2 = "You got kidnapped. She had no dollar.#(Press Enter)";
    let btwo = split(dialogueTwoPt2, "#");

    textFont(font);
    textSize(23);
    fill("white");

    text(btwo[0], width/10, height/3);
    text(btwo[1], width/10, height/3+30);
  }
  else if (state === "scene-two-other") {
    let dialogueTwo = "The woman seemed... kinda creepy.#You'd rather stay away.#(Press Enter)";
    let b = split(dialogueTwo, "#");

    textFont(font);
    textSize(23);
    fill("white");

    text(b[0], width/10, height/3);
    text(b[1], width/10, height/3+30);
    text(b[2], width/10, height/3+60);
  }
  else if (state === "scene-three") {
    let dialogueTwo = "You walk underneath#a building. A woman has dropped her vases.#Try to dodge?#[1] yes#[2] no";
    let b = split(dialogueTwo, "#");

    textFont(font);
    textSize(23);
    fill("white");

    text(b[0], width/10, height/3);
    text(b[1], width/10, height/3+30);
    text(b[2], width/10, height/3+60);
    text(b[3], width/10, height/3+160);
    text(b[4], width/2, height/3+160);
  }
  else if (state === "scene-three-other") {
    let dialogueTwo = "Many vases hit your head.# You may have a concussion.#(Press Enter)";
    let b = split(dialogueTwo, "#");

    textFont(font);
    textSize(23);
    fill("white");

    text(b[0], width/10, height/3);
    text(b[1], width/10, height/3+30);
    text(b[2], width/10, height/3+60);
  }
  else if (state === "scene-four") {
    let dialogueTwo = "That was eventful.#[1] yeah.";
    let b = split(dialogueTwo, "#");

    textFont(font);
    textSize(23);
    fill("white");

    text(b[0], width/10, height/3);
    text(b[1], width/10, height/3+30);
  }
  else if (state === "true-end") {
    let dialogueTwo = "TRUE END#Unfortunately, the woman did#not have a dollar either.#But you found a dollar on#the street nearby!#THE END";
    let b = split(dialogueTwo, "#");

    textFont(font);
    textSize(23);
    fill("white");

    text(b[0], width/2.5, height/4);
    text(b[1], width/4, height/3+30);
    text(b[2], width/4, height/3+60);
    text(b[3], width/4, height/3+90);
    text(b[4], width/4, height/3+120);
    text(b[5], width/2.5, height/3+200);
  }
  else if (state === "bad-end") {
    let dialogueTwo = "BAD END#Unfortunately, the woman did#not have a dollar either.#You Are deeply saddened.#THE END";
    let b = split(dialogueTwo, "#");

    textFont(font);
    textSize(23);
    fill("white");

    text(b[0], width/2.5, height/4);
    text(b[1], width/4, height/3+30);
    text(b[2], width/4, height/3+60);
    text(b[3], width/4, height/3+90);
    text(b[4], width/2.5, height/3+200);
  }
}

////////////// Press Buttons ///////////////
        
function pressButtons() {
  if (keyIsDown(13) && state === "rps-pressEnter") {
    state = "rps-play";
  }
  else if (keyIsDown(49) && state === "scene-one") {
    state = "rps-play";
  }
  else if (keyIsDown(50) && state === "scene-one") {
    state = "scene-one-other";
  }
  else if (keyIsDown(27) && (state === "rps-youLose" || state === "rps-youWin")) {
    state = "rps-wonlost";
  }
  else if (keyIsDown(13) && (state === "rps-choseRock" || state === "rps-chosePaper" || state === "rps-choseScissors")) {
    state = "rps-results";
  }
  else if (keyIsDown(13) && state === "scene-one-other") {
    state = "scene-two";
  }
  else if (keyIsDown(49) && state === "scene-two") {
    state = "scene-two-pt2";
  }
  else if (keyIsDown(13) && state === "scene-two-pt2") {
    state = "esc-play";
  }
  else if (keyIsDown(50) && state === "scene-two") {
    state = "scene-two-other";
  }
  else if (keyIsDown(13) && state === "scene-two-other") {
    state = "scene-three";
  }
  else if (keyIsDown(27) && state === "esc-you-win") {
    state = "scene-three";
    trueEnd++;
  }
  else if (keyIsDown(49) && state === "scene-three") {
    state = "avoid-start";
  }
  else if (keyIsDown(50) && state === "scene-three") {
    state = "scene-three-other";
  }
  else if (keyIsDown(13) && state === "scene-three-other") {
    state = "scene-four";
  }
  else if (keyIsDown(49) && state === "scene-four") {
    if (trueEnd < badEnd) {
      state = "bad-end";
    }
    else if (trueEnd > badEnd) {
      state = "true-end";
    }
    else if (trueEnd === badEnd) {
      state = "bad-end";
    }
  }
  else if (keyIsDown(27) && (state === "true-end" || state === "bad-end")) {
    state = "start";
  }
}

/////////////// Game State //////////////////////////////
        
function gameState() {
  // --- Start Screen Gamestate --- // 
  if (state === "start") {
    image(gameTitle, width/3.5, 200, 350, 200);
    thePlayButton.hoverClick();
  }
  // TEMPORARY GAME STATE F0R TESTING
  else if (state === "test") {
    background(80);
    //////////////////////////
  }
  //--- Scene One Gamestate --- //
  else if (state === "scene-one") {
    background(bgScene);
    theMenu.hoverClick();
    displayText();
    pressButtons();
  }
  else if (state === "scene-one-other") {
    background(bgScene);
    theMenu.hoverClick();
    displayText();
    pressButtons();
    badEnd++;
  }
  // --- Rock Paper Scissors Minigame Gamestate --- // 
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
    image(rpsYouWin, width/4, height/5, 350, 200);
    image(pressEsc, width/3.8, height/2.5, 350, 200);
    
    pressButtons();
  }
  else if (state === "rps-youLose") {
    image(rpsYouLose, width/4, height/5, 350, 200);
    image(pressEsc, width/3.8, height/2.5, 350, 200);

    pressButtons();
  }
  else if (state === "rps-wonlost") {
    rpsWonOrLost();
  }
  // --- Scene Two --- //
  else if (state === "scene-two") {
    background(bgScene);
    theMenu.hoverClick();
    displayText();
    pressButtons();
  }
  else if (state === "scene-two-pt2") {
    background(bgScene);
    theMenu.hoverClick();
    displayText();
    pressButtons();
  }
  else if (state === "scene-two-other") {
    background(bgScene);
    theMenu.hoverClick();
    displayText();
    pressButtons();
    badEnd++;
  }
  // --- Escape Room Minigame Gamestate --- // 

  // state - start screen 
  else if (state === "esc-start") {
    background(100);
    image(escTitle, width/3.5, 200, 350, 200);
    theEscStartButton.hoverClick();
  }
  // state - walking around room
  else if (state === "esc-play") {
    displayGrid();
    characterMovement();
    overBorder();
    interactFurniture();
  }
  // state - check if you got item already or not
  else if (state === "esc-box-item") {
    displayGrid();
    exitText();
    boxHasItem();
  }
  // state - ask if you want to pick up food
  else if (state === "esc-food-get") {
    displayGrid();
    image(textBoxItem, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    foodGet();
  }
  // state - food acquired
  else if (state === "esc-food-pickup") {
    displayGrid();
    image(textGetItemFood, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    exitText();
  }
  // state - check if you fed the hamster yet or not
  else if (state === "esc-cage") {
    displayGrid();
    cageInteraction();
  }
  // state - ask to feed hamster
  else if (state === "esc-feed-hamster") {
    displayGrid();
    image(textFeedHamster, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    feedHamsterInteraction();
  }
  // state - key acquired
  else if (state === "esc-key-pickup") {
    displayGrid();
    image(textGetItemKey, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    exitText();
  }
  // state - ask to use key
  else if (state === "esc-key-has") {
    displayGrid();
    image(textDoorHasKey, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    useKey();
  }
  // state - empty box dialogue
  else if (state === "esc-box-none") {
    displayGrid();
    exitText();
    image(textBoxEmpty, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
  }
  // state - plant dialogue
  else if (state === "esc-plant") {
    displayGrid();
    exitText();
    image(textPlant, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
  }
  // state - chest dialogue
  else if (state === "esc-chest") {
    displayGrid();
    exitText();
    image(textChest, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
  }
  // state - check to see if you have key to door
  else if (state === "esc-door") {
    displayGrid();
    exitText();
    doorInteraction();
  }
  else if (state === "esc-you-win") {
    background(119, 65, 65);
    image(youEscaped, width/4, height/4, 400, 200);
    pressButtons();
  }
  else if (state === "scene-three") {
    background(bgScene);
    theMenu.hoverClick();
    displayText();
    pressButtons();
  }
  else if (state === "scene-three-other") {
    background(bgScene);
    theMenu.hoverClick();
    displayText();
    pressButtons();
  }
  // --- Avoid Falling Objects MiniGame Gamestate --- //
  else if (state === "avoid-start") {
    background(107);
    catchObject();
    catchPlayer();
    overSide();
    healthCount();
    scoreCount();
    checkScore();
  }
  else if (state === "scene-four") {
    background(bgScene);
    theMenu.hoverClick();
    displayText();
    pressButtons();
  }
  else if (state === "true-end") {
    background(bgScene);
    displayText();
    pressButtons();
  }
  else if (state === "bad-end") {
    background(bgScene);
    displayText();
    pressButtons();
  }
}

////////////// Chose card/Change functions ////////////////////

function restoreResult() {
  result = ["win", "lose"];
}

function randomResult() {
  if (state === "rps-results") {
    theResult = random(result);
    if (theResult === "win") {
      state = "rps-youWin";
      yourScore = yourScore+1;
    }
    if (theResult === "lose") {
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
    state = "scene-two";
    trueEnd++;
  }
  else if (theirScore === 3) {
    state = "scene-two";
    badEnd++;
  }
  else {
    state = "rps-play";
  }
}

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

  // text box setup
  xTextBox = width/7;
  yTextBox = height/4;
  textBoxWidth = width/1.4;
  textBoxHeight = height/2.2;
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
      // plant
      if (grid[y][x] === "3") {
        image(plant, x*cellSize, y*cellSize, cellSize, cellSize);
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
      state = "esc-box-item";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with cage
  else if (playerX < cellSize*2 && playerY < cellSize*2.7 && spritePosition ==="left") {
    if (keyIsDown(13)){
      state = "esc-cage";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with box without item
  else if (playerX < cellSize*2 && playerY < cellSize*3.7 && spritePosition ==="left") {
    if (keyIsDown(13)){
      state = "esc-box-none";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with plant
  else if (playerX < cellSize*2 && playerY < cellSize*4.7 && spritePosition ==="left") {
    if (keyIsDown(13)){
      state = "esc-plant";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with plant
  else if (playerX < cellSize*2.5 && playerY > height-cellSize*1.9 && spritePosition ==="back") {
    if (keyIsDown(13)){
      state = "esc-plant";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with box without item
  else if (playerX < cellSize*3.5 && playerY > height-cellSize*1.9 && spritePosition ==="back") {
    if (keyIsDown(13)){
      state = "esc-box-none";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with plant
  else if (playerX < cellSize*4.5 && playerY > height-cellSize*1.9 && spritePosition ==="back") {
    if (keyIsDown(13)){
      state = "esc-plant";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with box without item
  else if (playerX > width-cellSize*2 && playerY > height-cellSize*2.5 && spritePosition ==="right") {
    if (keyIsDown(13)){
      state = "esc-box-none";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with box without item
  else if (playerX > width-cellSize*2 && playerY > height-cellSize*3.5 && spritePosition ==="right") {
    if (keyIsDown(13)){
      state = "esc-box-none";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with chest
  else if (playerX > width-cellSize*2 && playerY > height-cellSize*4.5 && spritePosition ==="right") {
    if (keyIsDown(13)){
      state = "esc-chest";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with box without item
  else if (playerX > width-cellSize*2 && playerY > height-cellSize*5.5 && spritePosition ==="right") {
    if (keyIsDown(13)){
      state = "esc-box-none";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
  // interact with door
  else if (playerX > cellSize*2.5 && playerX < cellSize*3.5 && playerY < cellSize+30 && spritePosition ==="forward") {
    if (keyIsDown(13)){
      state = "esc-door";
    }
    image(interact, playerX, playerY-30, width/8, height/15);
  }
}

// exit text with escape key
function exitText() {
  if (keyIsDown(27)) {
    state = "esc-play";
  }
}

// ask to pick up food function
function foodGet() {
  if (keyIsDown(49)){
    state = "esc-food-pickup";
    hasFood = "yes";
  }
  else if (keyIsDown(50)){
    state = "esc-play";
  }
}

// ask to feed hamster function
function feedHamsterInteraction() {
  if (keyIsDown(49)){
    state = "esc-key-pickup";
    hasKey = "yes";
    isFed = "yes";
  }
  else if (keyIsDown(50)){
    state = "esc-play";
  }
}

// check to see if you got item from box yet function
function boxHasItem() {
  if (hasFood === "no") {
    state = "esc-food-get";
  }
  if (hasFood === "yes") {
    boxEmpty.display();
  }
}

// ask to use key function
function useKey() {
  if (keyIsDown(49)){
    state = "esc-you-win";
    trueEnd++;
  }
  else if (keyIsDown(50)){
    state = "esc-play";
  }
}

// check to see if you fed the hamster yet function
function cageInteraction() {
  if (hasFood === "no" && isFed === "not-fed") {
    image(textHamsterNoFood, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    exitText();
  }
  else if (hasFood === "yes" && isFed === "not-fed") {
    state = "esc-feed-hamster";
  }
  else if (isFed === "yes") {
    image(textHamsterFed, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    exitText();
  }
}

// check to see if you have a key function
function doorInteraction() {
  if (hasKey === "yes") {
    state = "esc-key-has";
  }
  if (hasKey === "no") {
    image(textDoorNoKey, xTextBox, yTextBox, textBoxWidth, textBoxHeight);
    exitText();
  }
}

// --------------------- Catch the falling objects minigame ----------------------------------------- //

function catchObjectsSetup() {
  // player setup
  playerCatchX = width/4;
  playerCatchY = height/1.2;
  playerSpeed = 5;

  // falling object setup
  objectX = random(0, width);
  objectY = -100;
  objectWidth = 350;
  objectHeight = 350;
  objectSpeed = 8;
}

function catchObject() {
  if (objectY+objectHeight>height && objectX>playerCatchX && objectX<playerCatchX+100) {
    updateXPosition();
    objectY = -300;
    objectSpeed += 0.5;
    health--;
  }
  else if (objectY+objectHeight > height) {
    objectY = -300;
    catchScore++;
    updateXPosition();
  }
  objectY += objectSpeed;
  image(vase, objectX, objectY, objectWidth, objectHeight);
}

function checkScore() {
  if (catchScore === 8) {
    state = "scene-four";
  }
  else if (health === 0) {
    state = "scene-four";
  }
}

function catchPlayer() {
  if (keyIsDown(65)){ //a
    playerCatchX -= playerSpeed;
  }
  else if (keyIsDown(68)){ //d
    playerCatchX += playerSpeed;
  }
  image(spriteFront, playerCatchX, playerCatchY, 400, 400);
}

function overSide() {
  if (playerCatchX+100<0) {
    playerCatchX = playerCatchX + playerSpeed;
  }
  else if (playerCatchX+200>width-100) {
    playerCatchX = playerCatchX - playerSpeed;
  }
}

function updateXPosition() {
  objectX = random(0, width-objectWidth);
}

function healthCount() {
  fill("CDBFBF");
  textFont(font);
  textSize(20);
  text("Health: " + health, 20, 60);
}

function scoreCount() {
  fill("CDBFBF");
  textFont(font);
  textSize(20);
  text("Score: " + catchScore, width-150, 60);
}