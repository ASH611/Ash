class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }
  score () {
    if (this.visibility<0 && this.visibilty >-105){
      score++;
    }
  }
};
