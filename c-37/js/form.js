class Form{

constructor(){
    this.input=createInput('name');
    this.button=createButton("Submit");
    this.greeting=createElement('h3');
    
}
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide()

}
display(){
    var title=createElement('h2');
    title.html("Car Racing Game");
    title.position(150,10);
    
    this.input.position(250,250);
    this.button.position(300,300);


    this.button.mousePressed(()=> {
            this.input.hide();
            this.button.hide();
            player.name =this.input.value();
            this.greeting.html("Hello"+player.name);
            this.greeting.position(250,250);
            
            playerCount++;
            player.getCount()
            player.index=playerCount;
            player.updateCount(playerCount);
            player.update();



    })
}


}






















