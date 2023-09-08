// WAY1
// const dino = {
//     name: 'T-Rex',
//     species: 'Tyrannosaurus Rex',
//     introduction: function() {
//         console.log(`Hello, my name is T-Rex!`);
//     }
// }

// const dino2 = {
//     name: 'Velociraptor',
//     species: 'Velociraptor Mongoliensis',
//     introduction: function() {
//         console.log(`Hello, my name is ${this.name}!`);
//     }
// }

// const dino3 = {
//     name: 'Triceratops',
//     species: 'Triceratops Horridus',
//     introduction: function() {
//         console.log(`Hello, my name is ${this.name}!`);
//     }
// }



// console.log(dino.name); // T-Rex
// dino.introduction(); // Hello, my name is T-Rex!

// WAY 2
class Dinosaur {
    constructor(name, species, diet) {
        this.name = name;
        this.species = species;
        this.diet = diet;
    }

    introduction() {
        console.log(`Hello, my name is ${this.name}!`);
    }   
    
}
class Tticeratops extends Dinosaur {
    constructor(name) {
        super(name, 'Triceratops Horridus', 'plant eater');
        
    }
    dance() {
        console.log(`${this.name} Triceratops Horridus is dancing`);
    }   
}



const dinoA = new Dinosaur('T-Rex', 'Tyrannosaurus Rex', 'Carnivore');
const dinoB = new Dinosaur('Velociraptor', 'Velociraptor Mongoliensis', 'Carnivore');
const dinoC = new Tticeratops('Triceratops');

console.log(dinoA.name); // T-Rex
dinoA.introduction(); // Hello, my name is T-Rex!

