require('../exercises/victim');

class Werewolf {
  constructor(name, location){
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  change(){
    if(this.human === true){
      this.human = false;
      this.wolf = true;
      this.hungry = true;
    } else {
      this.wolf = false;
      this.human = true;
      this.hungry = false;
    }
  }

  eat(victim){
    if(this.hungry === true){
      this.hungry = false;
      victim.alive = false;
      this.change();
      return 'YUM!'
    } else {
      return 'I cannot eat because I am not hungry.'
    }
  }
}

module.exports = Werewolf;
