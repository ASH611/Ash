class Umbrella {
constructor (x,y) {
this.image = loadImage("images/walking_1.png");

}

droplets () {

    if (frameCount % 10 === 0) {
        umbrella = createSprite(random(100, 1000), 0, 100, 100);
        umbrella.velocityY = 6;
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: umbrella.addImage("umbrella1",thunder1_img);
            break;
            case 2: umbrella.addImage("umbrella1", thunder2_img);
            break;
            case 3: umbrella.addImage("umbrella1", thunder3_img);
            break;
            case 4: umbrella.addImage("umbrella1", thunder4_img);
            break;
            
        }
}

}