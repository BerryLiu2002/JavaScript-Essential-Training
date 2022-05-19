/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bottle = {
  color: "blue",
  isOpen: false,
  material: "aluminum",
  inchHeight: 7,
  inchRadius: 1,
  holding: "Water",
  amountFilled: 0.5,
  refill: function (liquid, quantity) {
    if (this.amountFilled != 0) {
      console.log(
        "The bottle is already holding " +
          this.holding +
          ". Please empty it before refilling."
      );
    } else {
      const volume = this.height * Math.pow(this.radius, 2) * Math.PI;
      this.amountFilled = quantity / volume;
      if (this.amountFilled > 1) {
        this.amountFilled = 1;
        console.log(
          "The bottle is overfilled! Some of the liquid will spill over."
        );
      }
      this.holding = liquid;
    }
  },
  empty: function () {
    if (this.amountFilled == 0) {
      console.log("The bottle is already empty");
    } else {
      this.holding = "";
      this.amountFilled = 0;
    }
  },
};
