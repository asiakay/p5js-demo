
// "instance mode" 
const s = ( p ) => {

 p.setup = function() {
  let myCanvas = p.createCanvas(p.windowWidth, p.windowHeight);
  myCanvas.parent('myContainer');
};

p.draw = function() {
  if (p.mouseIsPressed) {
    p.fill(0);
  } else {
    p.fill(255);
  };
  p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };


p.windowResized = function(){
  p.resizeCanvas(p.windowWidth, p.windowHeight);
}
}
let myp5 = new p5(s, 'myContainer');