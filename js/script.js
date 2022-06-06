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

clover.isTired = 8;
francine.isTired = 9;
console.log(clover);

const allPets = [sora, clover, baxter, cleo, francine];

console.log(allPets);

function showPets(petArray) {
  pets.innerHTML = "";
  for (let pet in petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping";
    }
    const li = document.createElement("li");
    li.innerHTML = `<li><span>${pet.name}</span> the ${pet.species} is ${status}</li>`;
    pets.append(li);
  }
}
