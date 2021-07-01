class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("yellow")
    //write code to show a heading for showing the result of Quiz
    question.show();
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    var position= 250;
    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      fill("Blue")
      textSize(20);
      text("*NOTE: Contestants who answered correctly are highlighted in green colour!", 130,230);
      for(var elr in allContestants){
      var correctAns= "3";
      if(correctAns=== allContestants[elr].answer)
      fill("Green")
      else
      fill("Red")
      position+=30;
      text(allContestants[elr].name+":"+allContestants[elr].answer, 250, position)

      }
     
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
