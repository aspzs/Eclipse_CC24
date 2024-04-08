let x = -500;
let isPaused = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
  let pauseButton = createButton('pausa');
  pauseButton.position(20, 20);
  pauseButton.mousePressed(pauseDrawing);
  
  let impressum = createButton('Arnol Segovia, 2024');
  impressum.position(20, windowHeight/1.2);
}

function draw() {
  background('rgb(0,0,0)');
  
  for (let i = 0; i < 1000; i += 7) {
    stroke('rgb(255,255,255)');
    strokeWeight(1.5);
    ellipse(x, windowHeight/2, i - 500, i - 580);
    
    noFill();
    stroke('rgb(216,126,17)');
    strokeWeight(1.7);
    ellipse(windowWidth/2, windowHeight/2, i/1.5, i/1.5);
    
    stroke('rgb(123,255,255)');
    strokeWeight(1);
    ellipse(x, windowHeight/2, i , i);
    
    noFill();
  }
  
  if (!isPaused) {
    if (x > width) {
      x = 0;
    } else {
      x = x + 3;
    }
  }
}

function pauseDrawing() {
  isPaused = !isPaused; 
}
