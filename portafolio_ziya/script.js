let letters = [];
const words = ['write', 'create', 'imagine', 'story', 'words', 'design', 'creative', 'innovation', 'autonomy', 'art'];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  textAlign(CENTER, CENTER);
  
  for (let i = 0; i < 30; i++) {
    letters.push(new FloatingLetter());
  }
}

function draw() {
  clear();
  for (let letter of letters) {
    letter.update();
    letter.display();
  }
}

class FloatingLetter {
  constructor() {
    this.reset();
    this.y = random(height);
  }
  
  reset() {
    this.x = random(width);
    this.y = -20;
    this.speed = random(0.5, 2);
    this.word = random(words);
    this.size = random(12, 24);
  }
  
  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.reset();
    }
  }
  
  display() {
    noStroke();
    fill(0);
    textSize(this.size);
    text(this.word, this.x, this.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  letters = [];
  for (let i = 0; i < 30; i++) {
    letters.push(new FloatingLetter());
  }
}
