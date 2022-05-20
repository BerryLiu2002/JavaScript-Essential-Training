/* Class for Bottle objects */

class Bottle{
  constructor (
    color,
    isOpen, 
    material,
    inchHeight,
    inchRadius,
    holding,
    amountFilled
  ){
    this.color = color;
    this.isOpen = isOpen;
    this.material = material;
    this.inchHeight = inchHeight;
    this.inchRadius = inchRadius;
    this.volume = Math.PI * Math.pow(this.inchRadius, 2) * this.inchHeight;
    this.holding = holding;
    this.amountFilled = amountFilled;
  }
  empty(){
    if (this.amountFilled == 0){
      console.log("The bottle is already empty!")
    }
    else{
      this.amountFilled = 0
      this.holding = "nothing"
      console.log("The bottle is now empty")
    }
  }
  refilled(liquid, quanity){
    if (this.amountFilled != 0){
      console.log("Please empty the bottle before refilling!");
    }
    else{
      this.holding = liquid;
      if (quanity > this.volume){
        console.log("The bottle has been overfilled and spilled.");
        this.amountFilled = 1;
      }
      else{
        console.log("The bottle has been partially filled.")
        this.amountFilled = quanity / volume;
      }
    }
  }
}

export default Bottle;