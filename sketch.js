let simetria = 64
let angulo = 360 / simetria;
let colors = ['#2de2e6', '#035ee8','#f6019d','#d40078', '#9700cc'];
let som;

function preload() {
  soundFormats('mp3');
  som = loadSound("Retrowavemusic.mp3")
}

function mousePressed(){
 som.play();
}

function setup() {
  createCanvas(1000,1000);
  angleMode(DEGREES);
  background(0);
}
function draw() {
  translate(width/2, height /2);
  //console.log(sin(frameRate() * 0.1));
  
  if (mouseX>0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmy = pmouseY - height / 2;
    let pmx = pmouseX - width / 2;
    if (mouseIsPressed){
      let angulo = 360 / simetria;
      for(let i = 0; i < simetria; i++){
        stroke(colors[i % colors.length]);
        rotate(angulo);
        strokeWeight(sin(frameCount * 0.01)*5+2);
        line(mx,my,pmx,pmy);
        push();
        scale(1,-1);
        line(mx,my,pmx,pmy);
        pop();
      }
    }
  }
}