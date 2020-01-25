class Centaur {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.mood = 3;
    this.standing = true;
    this.layingDown = false;
  }

  shoot(){
    if(this.cranky === false && this.standing === true){
      this.mood--;
      this.checkCranky();
      return 'Twang!!!';
    } else {
      return 'NO!';
    }
  }

  run(){
    if(this.cranky === false && this.standing === true){
      this.mood--;
      this.checkCranky();
      return 'Clop clop clop clop!!!';
    } else {
      return 'NO!'
    }
  }

  checkCranky(){
    if(this.mood <= 0){
      this.cranky = true;
    }
  }

  sleep(){
    if(this.standing === true) {
      return 'NO!';
    } else {
      this.mood = 3;
      this.cranky = false;
      return 'ZZZZ';
    }
  }

  layDown(){
    this.standing = false;
    this.layingDown = true;
  }

  standUp(){
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion(){
    if(this.standing === true){
      if(this.cranky === true){
        this.mood = 3;
        this.cranky = false;
      } else {
        this.mood = 0;
        this.cranky = true;
      }
    } else {
      return 'Not while I\'m laying down!'
    }
  }
}

module.exports = Centaur;
