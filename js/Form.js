class Form {
    constructor(){
     this.input = createInput("Enter your username")
     this.button = createButton("Play")
     this.greeting = createElement("h2")
      
    }
    setElementsPosition(){
        this.input.position(250, height/2-50)
        this.button.position(250, height/2)
        this.greeting.position(200, height + 50)
    }
    handleMousePressed(){
        this.button.mousePressed (()=>{
        this.button.hide()
        this.input.hide()
            
            var message = `Hi ${this.input.value()} </br> Please wait for another player to join!`
            this.greeting.html(message)
        })
    }
    display(){
        this.setElementsPosition()
        this.handleMousePressed()
    }

}