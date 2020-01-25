class Sphinx{
  constructor(){
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle){
    this.riddles.push(riddle);
    if(this.riddles.length > 3){
      this.riddles.shift()
    }
  }

  attemptAnswer(answer){
    var answeredCorrectly = false;
    this.riddles.forEach(riddle => {
      if(riddle.answer === answer){
        var index = this.riddles.indexOf(riddle);
        this.riddles.splice(index, 1);
        answeredCorrectly = true;
      }
    })
    return this.reaction(answeredCorrectly, answer);
  }

  reaction(answeredCorrectly, answer){
    if(answeredCorrectly){
      if(this.riddles.length > 0){
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
      } else {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answer}\"???`;
      }
    } else {
      this.heroesEaten ++;
    }
  }
}

module.exports = Sphinx;
