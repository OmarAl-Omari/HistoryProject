// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let strokeThickValue= 10;

let graphics;
let colorstate = "black";
let input;
let circlesD;
let circleY;
let messageIndex = 0 ;
let clockAngle;
let totalTime = 120;

let startSecond;
let stime;

let canvasSizeSelected = false;
let canvasWidth;
let canvasHeight;

let xPosOfGraphics;
let yPosOfGraphics;
let coloredCircles = [];
let circleColors = ["red", "orange", "yellow", "lime", "blue", "fuchsia", "black", "white" ];
let messages = [
  ["Start off by picking a color from the options in the bottom left when you are ready hit the right arrow key on your keyboard to view the next step. ",
    "You can hit the left arrow key to go back a step and watch out for that timer. if it runs out you just go to the next round Sad.",
    "If you mess up you can erase with the eraser tool or with the clear all button (the trashcan) in the top right corner. To skip hit the arrow botton on the",
    "botom right corner let us start draw a big rectangle in the middle of the canvas Fill the rectangle with the yellow color and write on the top half 99g",
    "In the late 19th century, this economic event transformed Canada by bringing a rush of prospectors to the west.",
    "It significantly impacted the nation's wealth and resources The Klondike ____ Rush of 1896. Answer all the questions by filling the blank Also use your drawings"
  ],
  ["Start by sketching a hand with five fingers, then add a unique twist by drawing a second hand in a contrasting direction",
    "Then draw between those 2 hands a rectangle and fill it with green ",
    "This government policy, implemented in the mid-20th century, aimed to boost economic development and infrastructure,", 
    "ultimately shaping the well-being of Canadian society It is called The New ____ Hint what is happening in the picture"
  ],
  ["Start off by drawing a fire using the red color",
    "On top of that fire draw a dark cloud of carbon dioxide ",
    "During the 20th century, this natural resource played a crucial role in Canada's economy and well-being, leading to conflicts over its exploitation",
    "Oil and ____  Hint what is the dark cloud called "],
  ["Start by drawing a diagonal line Then draw another diagonal line from the same starting position and make the difference between there angles 45 degreees",
  "Nest draw a straigt horizontal line between those diagonal lines",
   " This economic agreement, signed in the 1980s, had a profound impact on trade relations and influenced the well-being of Canadians",
   " It is called the NAFT__ Hint thing about the alphabet"],
  ["Start off by Start by drawing an elongated oval shape on the canvas ",
  "On each side of the oval, draw small, rounded shapes to represent fill the drawing with a curved black stripes",
 " Which natural resource was a primary focus of the fur trade in Canada during the 17th and 18th centuries, driving economic activities and cultural interactions?",
  "They are called ____ pelts"],
  ["This is the sixth round"],
  ["This is the seventh round"],
  ["This is the eigthth round"],
  ["This is the nineth round"],
  ["This is the tenth round adkjl as;lkfj ;lkasj das;dklfj as;lkdfj ;aslkdj "],
  //For the next game HISTORY QUESTIONS
];
let answers = ["GOLD","DEAL","GAS","A","BEAVER","6","7","8","9","10"];

let currentQuestionIndex;
let score = 0;

let questions = [
  {
    question: "What significant event in 1764 marked a foundational moment in First Nations-European relations?",
    options: [" The signing of the Constitution Act", " The Battle of the Plains of Abraham", "The Treaty of Niagara", "The Royal Proclamation"],
    correct: 2
  },
  {
    question: "What event is known as the October Crisis in Canadian history, involving the kidnapping of government officials by the Front de libération du Québec (?",
    options: ["1917 Halifax Explosion", "1970 FLQ Crisis", "1980 Quebec Referendum", "1995 Quebec Referendum"],
    correct: 1
  },
  {
    question: "What was the purpose of the Indian Act, introduced in 1876?",
    options: [" To promote Indigenous cultural practices", "To establish voting rights for Indigenous peoples", "To assimilate and regulate the lives of Indigenous peoples", "To grant land rights to Indigenous communities"],
    correct: 2
  },
  {
    question: "What was the primary cause of the Red River Resistance in 1869-1870, led by Louis Riel?",
    options: ["Economic inequality", "Lack of representation", "Religious conflicts", "Land rights and cultural concerns"],
    correct: 3
  },
  {
    question: "How does the worldview of a society impact its response to environmental challenges and conservation efforts?",
    options: ["Indigenous worldviews prioritize conservation, while Western worldviews prioritize economic development", "Both Indigenous and Western worldviews prioritize economic development over conservation", "Worldviews have no impact on environmental attitudes", "Western worldviews prioritize conservation, while Indigenous worldviews prioritize economic development"],
    correct: 0
  },
  {
    question: "During initial contact with Europeans, what major factor influenced the dynamics between European settlers and First Nations?",
    options: ["Shared worldview and values", "Cooperation in economic ventures", "The fur trade and resource exploitation", "Strict adherence to traditional practices"],
    correct: 2
  },
  {
    question: "what event played a significant role in the expression of power and authority by the Quebecois and influenced their relationship with the Canadian federal government?",
    options: ["The Patriotes Rebellion of 1837-1838", "The Quiet Revolution of the 1960s", "The establishment of New France in the 17th century", "The Oka Crisis of 1990"],
    correct: 1
  },
  {
    question: "How did Canada's foreign policy during the Cold War era impact its citizens?",
    options: ["Enhanced economic opportunities for all citizens", "Increased military conscription and domestic security measures", "Promoted cultural exchange and diversity", "Minimized government intervention in citizens' lives"],
    correct: 1
  },
  {
    question: "Following World War II, what major change occurred in Canada's immigration policy that significantly impacted citizens?",
    options: ["Strict enforcement of exclusionary immigration policies", "Expansion of economic opportunities for Canadian citizens only ", "Isolationist foreign policy leading to decreased immigration", "Introduction of multiculturalism and diverse immigration streams"],
    correct: 3
  },
  {
    question: "How did the Canadian government's social policies impact the lives of Indigenous citizens, particularly during the era of residential schools?",
    options: ["Forced assimilation through the residential school system", " Enhanced cultural preservation and autonomy", "Recognition of Indigenous land rights and self-governance", "Equal access to education and healthcare"],
    correct: 0
  },
  {
    question: "The Canadian Charter of Rights and Freedoms, enacted in 1982, had a profound impact on citizens by:",
    options: ["Limiting individual freedoms and rights", "Promoting government control over personal lives", "Expanding civil liberties and human rights protections", "Advocating for increased censorship and surveillance"],
    correct: 2
  }
];




let GameRound = 0;

let scribble = new Scribble();

let UserAnswer;
let elapsedtime;


let transitionStartTime;
let transitionDuration = 5000;
let Transition = false;
let skip = false;
let numSkips = 3;


let trashcan;
let trashcanOpen;
let heart;
let heartWidth;
let rightarrow;
let rightarrowX;
let rightarrowY;
let rightarrowWidth;
let rightarrowHeight;
let trashcanX, trashcanY, trashcanWidth, trashcanHeight;

let font;

let X;
let counterForX;
let startTimerX = true;
let lines = [];

let toggleSwitch, toggleSwitchX, toggleSwitchY, toggleSwitchWidth, toggleSwitchHeight;

let themeColors = ["#F2F2F2", "#F2BDBD", "#F28D8D", "#F24B4B","#F20505"];
let backgroundImage;
let titleFont;

let fontSpacing;
let fontSize;
let backgroundMusic;
//This function uploads all my assets
function preload(){
  //For the trashcan
  
  trashcan  = loadImage("assets/trashClosed.png");
  trashcanOpen = loadImage("assets/trashOpened.png");
  //For the skip arrow
  rightarrow = loadImage("assets/rightarrow.png");
  //Heart
  heart = loadImage("assets/Heart.png");
  //This font is used in the game
  font = loadFont("assets/Font.ttf");
  //This font is used in the start screen
  titleFont = loadFont("assets/titleFont.ttf");
  //This is the x used when player guesses wrong
  X = loadImage("assets/X.png");
  //The image maded by me for the background
  backgroundImage = loadImage("assets/background.jpg");

  
}




function setPosAndSizes(){
  xPosOfGraphics = width/30;
  yPosOfGraphics = height/7.5;
  fontSize = width/60;
  fontSpacing = width/40;

  input = createInput();
  
  graphics = createGraphics(width - xPosOfGraphics * 2,height/1.25);
  graphics.background(255);
  circlesD = sqrt(width*height)/30;

  
  input.class("custom-input");
  input.size(graphics.width / 3,graphics.height/20);
  input.position(graphics.width/2 - input.width/2 + xPosOfGraphics, (yPosOfGraphics + graphics.height + height) / 2 - input.height/2);
  input.style("font-size", fontSize  + "px");
  input.style("text-transform", "uppercase");
  input.attribute("placeholder", "GUESS HERE");
  input.style("text-align", "center");

  input.style("border", "1px solid #FFD4D4");

  input.style("font-family", "font");
  
  input.changed(newText);
  
  clockAngle = - 90;

  stime = startClock();

  for(let i = 0; i < 8; i++){
    coloredCircles[i] = new ColoredCircles(xPosOfGraphics + circlesD * i* 1.25 + circlesD , circleColors[i]); 


  }
  

  
 


  // Arrow image
  rightarrowWidth = width/30;
  rightarrowHeight = rightarrowWidth *(rightarrow.height/rightarrow.width);

  rightarrowX = graphics.width;
  rightarrowY = height -rightarrowHeight;
  
  heartWidth = rightarrowHeight/1.5 * (heart.width/heart.height);
  

  toggleSwitchWidth = width/25;
  toggleSwitchHeight = toggleSwitchWidth/2;

  toggleSwitchX =   input.width+ input.x +( rightarrowX - heartWidth * 4 - (input.width + input.x ))/2;
  toggleSwitchY = input.y + toggleSwitchWidth/4;

  toggleSwitch =  new CustomSwitch(toggleSwitchX, toggleSwitchY,toggleSwitchWidth,toggleSwitchHeight);

 

}



//This function is active when the player presses the start game botton
function startGame(){
  //Getting all the buttons and text from my html
  const canvasSizeDropdown = document.querySelector("#canvasSize");
  const selectedSize = canvasSizeDropdown.value;
  const startButton = document.querySelector("#startButton");
  const canvasSizeLabel = document.querySelector("#canvasSizeLabel");
  const gameTitle = document.getElementById("gameTitle");
  const [widthStr, heightStr] = selectedSize.split("x");


  //Making teh canvas ratio based on what the player selected
  if (selectedSize === "windowWidthxwindowHeight") {
    // Set canvas size based on window's width and height
    canvasWidth = windowWidth;
    canvasHeight = windowHeight;
  }
  else{
    canvasWidth = Number(widthStr);
    canvasHeight = Number(heightStr);
  }
  //Removing all the buttons and text in the html
  canvasSizeDropdown.remove();
  canvasSizeLabel.remove();
  startButton.remove();
  gameTitle.remove();
  //Creating the canvas based on the selected ratio
  createCanvas(canvasWidth,canvasHeight);
  //Starting the game and setting the position and sizes of everything
  canvasSizeSelected = true;
  setPosAndSizes();
 

  
}

function setup() {
  //This is for the start Screen where the player can choose the game ratio and start the game
  createCanvas(windowWidth,windowHeight);
  
  backgroundMusic = loadSound('assets/h.mp3',loaded);
  image(backgroundImage,0,-200,width,height+200);
  //Setting angle mode
  angleMode(DEGREES);
  currentQuestionIndex = 0;
  
  //This is for my query in my html file to check when the player clicks on it to change color
  document.querySelector(".canvasSizeDropdown").addEventListener("click", function() {
    this.classList.toggle("active");
    
  });
 

}

function loaded(){
  backgroundMusic.play();
}

// The main loop
let s = true;
function draw() {
  //All of this is where the player can see the screen to play
  //Where the player gusses and reads the questions
  if(canvasSizeSelected && !Transition){
    //Create the background and the graphics
    if(GameRound > 9){
      push();
      //Giving it a nice animation for the transiton screen entering
      tint(255,millis()%120 * 0.25);
      image(backgroundImage,0,-200,width,height+200); //displaying the background for the game
      pop();
      if(GameRound === 10 && s){
        
        createButtons();
        s = false;
      }
      text(`Score: ${score}`, width / 16, height/6);
      console.log("hi");
      input.style("display", "none");
      drawTextBox();

      // Display score
      fill(0);
      
      
      
    }
    else{
      background(themeColors[2]);
      image(graphics,xPosOfGraphics,yPosOfGraphics);
      //Setting a random seed for the elements below it These elements will move (wiggle) 
      randomSeed();
      drawTextBox(); //This is to draw the text box with everything in it (text, border, color)
      borderForGraphicsAndInput(); //This is to draw a wiggly border around the graphics and input
      toggleSwitch.display(scribble,themeColors); //This is to display the toggle switch



      for (let i = 0; i < lines.length; i++) {
        
        stroke(lines[i].lineColor); 
        strokeWeight(lines[i].lineThickness);
        scribble.scribbleLine(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2);
      }
      //Setting a seed that is not random (under this nothing that is created by scribble will wiggle)
      randomSeed(100);
      //This is to display the skip button 
      image(rightarrow,rightarrowX,rightarrowY,rightarrowWidth,rightarrowHeight);
      //display the amount of hearts the player has left
      drawingHearts();
      //This is to display the trash with animation
      displayAndAnimateTrash();
      //Changing cursor shape based on it's position
      cursorShape();
      //This is to show the clock on the screen
      displayClock();
      //Updating the timer of the clock and the arc that is filling it
      updateClock();
      //Displaying the circles for the player to change colors
      for(let circles of coloredCircles){
        circles.show(scribble);

      }
      
      //This code is to see if the player got the wrong answer (making sure that we do not detect if the player enters nothing)
      if(UserAnswer !== answers[GameRound] && UserAnswer!== undefined){
        //This code is to display the X for 0.5s
        //Start the clock for the X timer
        if(startTimerX){
          counterForX = startClock();
        }
        //Set it to false 
        startTimerX = false;
        //Creating the x image
        push();
        imageMode(CENTER);
        image(X,width/2,height/2,width/3, width/3* (X.height/X.width));
        pop();
        //Checking if the time ended
        if(millis() - counterForX > 500){
          UserAnswer = undefined; //Mkae the user answer undefined to get out of this if-statment
          startTimerX = true; //Set the timer to true to use it again
        
        }
      }
      //Checking wether the user got the answer, lost on time or skipped
      if(UserAnswer === answers[GameRound] || elapsedtime > totalTime || skip){
        Transition = true; //Starting the loop for the transition screen
        startTransitionTimer(); //Start the timer for the transiton

        //This is here to make sure the X does not show up the next round
        UserAnswer = undefined; 
        //If the user went to the next round becuase he skipped I remove a skip
        if(skip){
          numSkips -= 1;
        }
      }
  }

  }

  //This is where the elements are drawn for the transition
  if(Transition ){
    //The transition should last for 5 seconds
    if(millis() - transitionStartTime < transitionDuration){
      //Remove the input that was displayed
      input.style("display", "none");
      //Display the transition screen
      
      drawTransitionScreen();
      
     
    }
    //To check when the timer ends for the transition
    else{
      //Clear the graphics 
      clearLines();
      //Change the round number
      changeRound();
      //Reset the clock
      stime = startClock();
      //Getting out of this loop
      Transition = false;
      //Making sure that if the player skipped to set it back to false
      skip = false;
      //displaying the input again
      input.style("display", "block");
    }

  }
  
}

//This function is only to draw a scribbly border for the Graphic Screen and input
function borderForGraphicsAndInput(){

  noFill();
  strokeWeight(5);
  //Setting color and rect for the border of the graphcis
  stroke(themeColors[3]);
  scribble.scribbleRect(xPosOfGraphics + graphics.width/2,yPosOfGraphics + graphics.height/2,graphics.width,graphics.height);

  //Setting color and rect for the border of the input
  stroke(themeColors[4]);
  scribble.scribbleRect(input.x + input.width/2,input.y + input.height/2,input.width,input.height);
}

//Function to display and change images of the trahcan
function displayAndAnimateTrash(){
  //Setting the width,height,x,y for the trashcan
  trashcanWidth = width/50;
  trashcanHeight = trashcanWidth * (trashcan.height/trashcan.width);
  trashcanX = graphics.width;
  trashcanY = yPosOfGraphics + trashcanWidth/2;
  //Checking if the mouse hovers over the trash to display the opened trashcan
  if(collidePointRect(mouseX,mouseY,trashcanX,trashcanY,trashcanWidth,trashcanHeight)){
    image(trashcanOpen,trashcanX,trashcanY,trashcanWidth,trashcanHeight);
  }
  //If not display the closed trashcan
  else{
    image(trashcan,trashcanX,trashcanY,trashcanWidth,trashcanHeight);
  }
}

//Function to draw the hearts
function drawingHearts(){
  //Drawing the number of hearts based on how many skips the player has 
  if(numSkips === 3){
    for(let i = 4; i>=2; i-- ){
      image(heart,rightarrowX - heartWidth * i,rightarrowY + heartWidth/4,heartWidth,rightarrowHeight/1.5);
    }
  }
  else if(numSkips === 2){

    image(heart,rightarrowX - heartWidth * 4,rightarrowY + heartWidth/4,heartWidth,rightarrowHeight/1.5);
    image(heart,rightarrowX - heartWidth * 3,rightarrowY + heartWidth/4,heartWidth,rightarrowHeight/1.5);

  }
  else if(numSkips === 1){
    image(heart,rightarrowX - heartWidth * 4,rightarrowY + heartWidth/4,heartWidth,rightarrowHeight/1.5);

  }
}

//This is only to change round of the game
function changeRound(){
  //Set back the message index to 0 so the text goes back to the first message for the next round
  messageIndex = 0;
  GameRound++; //increase the round number
}

//Function to display the elements for the transition screen
function drawTransitionScreen(){
  textLeading(fontSpacing);
  stroke(0);
  textSize(fontSize * 3);
  textAlign(CENTER,CENTER);
  text("THE ANSWER WAS " + answers[GameRound],width/2,height/2);
  push();
  //Giving it a nice animation for the transiton screen entering
  tint(255,millis()%120 * 0.25);
  image(backgroundImage,0,-200,width,height+200); //displaying the background for the game
  pop();
  
  
}
//This function is only to start the transiton timer
function startTransitionTimer(){
  transitionStartTime = millis();

}
//function to change the cursor shape based on the position of the mouse
function cursorShape(){

  //if the mouse is insided the drawing area
  if(mouseX>=xPosOfGraphics && mouseX <= xPosOfGraphics + graphics.width && mouseY >= yPosOfGraphics && mouseY <= yPosOfGraphics + graphics.height){
    noCursor();
    stroke("grey");
    strokeWeight(strokeThickValue/10);
    fill(colorstate);  
    circle(mouseX,mouseY,strokeThickValue);
  }
  //If the curson is not inside the drawing area
  else{
    cursor(CROSS);
  }
}



//This function is to check if the player is drawing(dragging the mouse)
function mouseDragged(){
  //To check if the player did not set the scribble mode then draw a normal line
  if(!toggleSwitch.on){
    //Determine the color and the strokeThickness of the line
    graphics.stroke(colorstate);
    graphics.strokeWeight(strokeThickValue);
    push();
    //Creating the line based on the mouseX and mouseY positions
    graphics.line(mouseX - xPosOfGraphics,mouseY - yPosOfGraphics,pmouseX - xPosOfGraphics,pmouseY - yPosOfGraphics);
    pop();
  }
  else{
    //Constrain the mouse postiion to only be inside the graphics border
    let halfThickness = strokeThickValue/2;
    let mousex = constrain(mouseX, xPosOfGraphics + halfThickness, xPosOfGraphics + graphics.width - halfThickness);
    let mousey = constrain(mouseY, yPosOfGraphics + halfThickness, yPosOfGraphics + graphics.height - halfThickness);
    let pmousex = constrain(pmouseX, xPosOfGraphics + halfThickness, xPosOfGraphics + graphics.width - halfThickness);
    let pmousey = constrain(pmouseY, yPosOfGraphics + halfThickness, yPosOfGraphics + graphics.height - halfThickness);
    //Give the information for the lines that are going to be created
    //(x1,y1,x2,y2) based on the mouse position
    lines.push({
      
      x1: mousex,
      y1: mousey,
      x2: pmousex,
      y2: pmousey,
      //Set the color and thickness of the lines
      lineColor: colorstate,
      lineThickness: strokeThickValue
    });
  }


}




//Function to increase or decrease the line thickness if the mouseWheel is moved
function mouseWheel(event) {
  //Making sure that when decreasing the size it is not negative and putting a limit of 10 to  the size
  if (strokeThickValue+ event.delta < 0){
    if (strokeThickValue>10){
      strokeThickValue-= Math.abs(event.delta/10);
    }
  }
  else{
    strokeThickValue+= event.delta/10;
  }
}

//Function to check the if the keyboard is pressed
function keyPressed(){
  //If space is pressed then clear the canvas
  if(key === " "){
    clearLines();

  }
  //If the right arrow is pressed then increaes the message index to display the next message
  //Unless it is already the last message
  if (keyCode === RIGHT_ARROW && messageIndex < messages[GameRound].length - 1) {
    messageIndex++;
  } 
  //If the left arrow is pressed then decrease the message index to display the message befor
  //Unless it is already the first message
  else if (keyCode === LEFT_ARROW && messageIndex > 0) {

    messageIndex--;
  }
  
}


//This is to get the user's input 
function newText(){
  //Getting the value of the answer and making it all upper case
  UserAnswer = input.value().toUpperCase();
  //Making the input empty again
  input.value("");
}
//This function is to clear all the lines
function clearLines(){
  //Clear all the lines created by scribble
  lines = [];
  //Clear all the lines created in the normal way
  graphics.background(255);
}

//To detect if the mouse was pressed
function mousePressed(){
  if(GameRound > 9){
    for (let i = 0; i < questions[currentQuestionIndex].options.length; i++) {
      let buttonX = width / 4;
      let buttonY = height / 1.5 + i * 60;
      let buttonWidth = width / 2;
      let buttonHeight = height / 15;
  
      // Use p5.js mouseOver function to check for collision with the button
      if (mouseOverButton(buttonX, buttonY, buttonWidth, buttonHeight)) {
        // Check if the clicked button is the correct option
        if (i === questions[currentQuestionIndex].correct) {
          score++;
        }
        // Move to the next question
        currentQuestionIndex++;
        if (currentQuestionIndex === questions.length) {
          // End of the quiz
          textSize(100);
          textAlign(CENTER,CENTER);
          text("THANK YOU FOR PLAYING",width/2,height/2);
          noLoop();
        }
  
        // Reset feedback message and buttons for the new question
      
        createButtons();
      }
    }
  }
  else{
  //To check if the mouse was hovering and pressed on one of the colored Circles
    for(let circles of coloredCircles){
      if(collidePointCircle(mouseX,mouseY,circles.pos.x,circles.pos.y, circles.diameter)){
        colorstate = circles.color; //Change the color that is used to the same color that the circle had
      }
    }
    //Check if the Player clicked on the skip arrow
    if(collidePointRect(mouseX,mouseY,rightarrowX,rightarrowY + rightarrowHeight/3,rightarrowWidth,rightarrowHeight/4) && numSkips>0){
      skip = true;
    }
    //Check if the player clicked on the trashcan
    if(collidePointRect(mouseX,mouseY,trashcanX,trashcanY,trashcanWidth,trashcanHeight)){
      clearLines(); //Clear all lines

    }
    //Checking if the player clicked on the toggleswitch
    if(collidePointRect(mouseX,mouseY,toggleSwitchX - toggleSwitchWidth/2,toggleSwitchY - toggleSwitchHeight/2,toggleSwitchWidth,toggleSwitchHeight)){
      toggleSwitch.on = !toggleSwitch.on; //If it is on make it off and vise versa

    }
}
// Function to check if the mouse is over a button


}
function mouseOverButton(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function createButtons() {
  // Clear previous buttons
  selectAll('button').forEach(button => button.remove());
  // Create buttons for options
  for (let i = 0; i < questions[currentQuestionIndex].options.length; i++) {
    let button = createButton(questions[currentQuestionIndex].options[i]);
    button.style('font-size', fontSize/1.5+"px");

    button.style('font-family', "font");
    button.position(width / 4, height / 1.5 + i * 60); // Adjusted vertical spacing
    button.size(width / 2, height/15);
    button.style('background-color', themeColors[3]);
    
    button.class('button');

    // Create a style element for hover effect
    let hoverStyle = document.createElement('style');
    hoverStyle.innerHTML = `
      .button:hover {
        color: ${themeColors[0]};
      }
    `;
    document.head.appendChild(hoverStyle);


  }
}
//This function is to draw everything That has to do with the text box
function drawTextBox(){

  //Setting the boxes x,y,width, and height
  let textBoxWidth = (width - xPosOfGraphics * 2) * 0.9;
  let textBoxHeight = height/8.5;
  let textBoxX = xPosOfGraphics +textBoxWidth/2;
  let textBoxY = height/100 + textBoxHeight/2;

  //This is to create the scribble rect border 
  strokeWeight(5);
  stroke(themeColors[0]);
  scribble.scribbleRect(textBoxX,textBoxY,textBoxWidth,textBoxHeight);

  //This is to create the lines that are inside the rectangle that are like a circle 
  let XcordsFilling = [textBoxX];
  let YcordsFilling = [textBoxY];
  //Getting all the points for the lines to be created in a shape of a circle
  for(let i = 0; i< 360; i+= 1){
    let x = textBoxX + textBoxWidth / 2 * cos(i);
    let y = textBoxY + textBoxHeight / 2 * sin(i);
    XcordsFilling.push(x);
    YcordsFilling.push(y);
  }
  //Set the stroke Thickness
  strokeWeight(7);
  //Make The lines based on the (x,y,gap between the lines, angle of the lines );
  scribble.scribbleFilling(XcordsFilling,YcordsFilling,20,210);

  //This is the filling for the text box as scribbleRect does not have a filling I created a rect to look like it's filled
  rectMode(CENTER);
  fill(255,100);
  noStroke();
  rect(textBoxX,textBoxY,textBoxWidth,textBoxHeight);
  rectMode(CORNER);




  //Set the color for the text and thickness of the stroke
  fill(themeColors[2]); 
  stroke(themeColors[3]);
  strokeWeight(10);
  //Set the x,y positions
  let textX = (width - xPosOfGraphics * 2) * 0.9  ; 
  let textY = height / 100 + height / 8.5 ; 
  //Align the text, Set the font and size
  textAlign(LEFT,TOP);
  textFont(font,fontSize);
  //Setting what message of the text it should say
  
  textLeading(fontSpacing); //Setting the height difference between the text

  //Displaying the text and setting it's range where the text is displayed
  //Text will go to the next line if it reaches the limit
  if(GameRound>9){
    text(questions[currentQuestionIndex].question, width / 25, height / 36 - 10, textX, textY);
  }
  else{
    let message1 = messages[GameRound][messageIndex];
    text(message1, width / 25, height / 36 - 10,textX,textY );
  }
  

}

//Function to show the clock
function displayClock() {
  //Set it's color and stroke
  stroke(themeColors[4]);
  strokeWeight(5);
  fill(255,200);
  //Create the scribbled circle
  scribble.buildEllipse(xPosOfGraphics + (width - xPosOfGraphics * 2) * 0.9 + height / 12.75, height / 100 + height / 8.5 / 2, height / 17,height/17,width/750,0);
  
}

//Function to update the timer and the arc
function updateClock() {
  //Figure out how much seconds have passed
  elapsedtime =  (millis() - stime)/1000;
  push();
  noStroke();
  //map the end of the arc based on the elapsedtime
  let end = map(elapsedtime,0,totalTime,-90,270);
  //map the alpha for the arc to start bright and end dark
  let color = map(end,-90,270,25,255);
  //Fill the arc with the color and set the alpha that is mapped
  fill(121, 135, 119,color);   
  //Create the arc for the timer
  arc(xPosOfGraphics + (width - xPosOfGraphics * 2) * 0.9 + height / 12.75, height / 100 + height / 8.5 / 2, height / 8.5 - 5 , height / 8.5 -5 , -90, end,PIE);

  pop();  
}

function startClock(){
  let startclock = millis();
  return startclock;
}



