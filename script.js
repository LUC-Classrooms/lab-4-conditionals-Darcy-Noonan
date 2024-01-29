function setup() {
  createCanvas(320, 240);
}

function draw() {
  background(200);
  
  // check to condition of the mouse
  if(mouseIsPressed){ // true or false?
    fill (0, 200, 10)
    x=200
  }
  else { 
    // otherwise do this:
    fill (200, 0, 0)
    x=100
  }
  ellipse(width/2, height/2, x, x);
}
