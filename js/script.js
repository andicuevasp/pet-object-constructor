const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

function CreatePet(name, species) {
  this.name = name;
  this.species = species;
  this.isTired = 5;
  this.sleep = function () {
    console.log(`${this.name} needs to take a nap!`);
    this.isTired = 1;
  };
  this.play = function () {
    if (this.isTired === 10) {
      console.log(`Too tired to play!`);
      this.sleep();
    } else {
      console.log(`Yay! ${this.name} loves to play!`);
      this.isTired++;
    }
  };
}

const sora = new CreatePet("Sora", "ferret");
const clover = new CreatePet("Clover", "rabbit");
const baxter = new CreatePet("Baxter", "hamster");
const cleo = new CreatePet("Cleo", "rat");
const francine = new CreatePet("Francine", "turtle");
// console.log(sora, clover, baxter, cleo, francine);

// clover.sleep()
// console.log(clover);
// baxter.play();
// console.log(baxter)
