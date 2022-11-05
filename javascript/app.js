// will create all classes in main class app.js
// minimum requirements to create a monster small
// default 

let monsterContainer = [];

class DefaultMonster {
    // encapsulate health and stats
    constructor(health,power,type, name){
        this.health = health;
        this.power = power;
        this.type = type;
        this.name = name;
    }
    set pcHealth(health){
        this.health =health;

    }

    get pcHealth(){
        return this.health;
    }

    set pcPower(power){
        this.power =power;
    }

    get pcPower(){
        return this.power;
    }
    set pcType(type){
        this.type =type;
    }

    get pcType(){
        return this.type;
    }
    set pcName(name){
        this.name =name;
    }
    get pcName(){
        return this.name;
    }
}

// create an object from the ParentClass
let smalldarkMonster = new DefaultMonster(100,200,"dark","minicabra");

let currentHealth = smalldarkMonster.pcType
console.log(currentHealth)

// second class that will extend from the defaultmonster classs
class Hero extends DefaultMonster{
    constructor(weapon, backstory){
        super(health, power,type,name);
        this.weapon = weapon;
        this.backstory = backstory;
    }

}
// manipulate dom
const picture = document.getElementById("image");
const image1 = "https://tse4.mm.bing.net/th?id=OIP.MIUR2K3QNkugENKA19je0AHaJd&pid=Api&P=0"


function doinsomething(){
    picture.src  = image1
    
}
