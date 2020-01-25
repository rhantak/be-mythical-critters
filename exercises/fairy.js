class Fairy {
  constructor(name){
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']}
    this.disposition = 'Good natured'
    this.humanWards = [];
    this.anger = 0;
  }

  receiveBelief(){
    this.dust++;
  }

  believe(){
    this.dust += 10;
  }

  makeDresses(flowers){
    flowers.forEach(flower => this.clothes.dresses.push(flower))
  }

  provoke(){
    this.disposition = 'Vengeful';
    this.anger = 3;
  }

  replaceInfant(infant){
    if(this.disposition === 'Vengeful'){
      this.humanWards.push(infant)
      infant.disposition = 'Malicious';
      this.anger--;
      this.checkDisposition();
    } else {
      return infant
    }
  }

  checkDisposition(){
    if(this.anger <= 0){
      this.disposition = 'Good natured'
    }
  }
}

module.exports = Fairy;
