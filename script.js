//základní proměnné
var d = document;
var totalScore, roundScore, activePlayer, dice, playGame; 

function newStart(){
    totalScore = [0,0];
    roundScore = 0;
    activePlayer = 0;
    playGame = true;

    //vynulování score
    d.querySelector(".app_game_score0").textContent = 0;
    d.querySelector(".app_game_score1").textContent = 0;
    d.querySelector(".app_game_round_score0").textContent = 0;
    d.querySelector(".app_game_round_score1").textContent = 0;

    //zmizení kostky

    d.querySelector(".app_game_dice").style.display = "none";

    d.querySelector("#name-0").textContent = "Skóre 1. hráče";
    d.querySelector("#name-1").textContent = "Skóre 2. hráče";

    d.querySelector(".app_game_total_score0").classList.add("active");
    d.querySelector(".app_game_total_score1").classList.remove("active")
    d.querySelector(".app_game_round_score0").classList.add("active1");
    d.querySelector(".app_game_round_score1").classList.remove("active1");


}

//zachycení btn hodit kostou a přidání funkcí

d.querySelector(".app_game_roll_dice").addEventListener("click",function(){
    if(playGame){
        // 1. generujeme náhodné číslo
    var dice = Math.ceil(Math.random()*6);
    
    //zobrazeni správného obrázku
    var diceElement = d.querySelector(".app_game_dice_imageDice");
    diceElement.src = "images/" + dice + ".jpg";
    d.querySelector(".app_game_dice").style.display = "block";
    if(dice !== 1){
        //Načtení round score
        roundScore = roundScore + dice;
        d.querySelector(".app_game_round_score" + activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
    }
    }
    


}); 

function nextPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    roundScore = 0;
    d.querySelector(".app_game_round_score0").textContent = 0;
    d.querySelector(".app_game_round_score1").textContent = 0;
    d.querySelector(".app_game_dice").style.display = "none";

    //pridaní nebo odebrání classy active
    d.querySelector(".app_game_total_score0").classList.toggle("active");
    d.querySelector(".app_game_total_score1").classList.toggle("active");
    d.querySelector(".app_game_round_score0_header").classList.toggle("active1");
    d.querySelector(".app_game_round_score1_header").classList.toggle("active1");
    d.querySelector(".app_game_round_score").classList.toggle("active1");
    d.querySelector(".app_game_round_score").classList.toggle("active1");
}

d.querySelector(".app_game_hold_score").addEventListener("click",function(){
    //celkové se vyplní současným skore
    totalScore[activePlayer] = totalScore[activePlayer] + roundScore;

    //načtení round skore do total score
    d.querySelector(".app_game_score" + activePlayer).textContent = totalScore[activePlayer];

    if(totalScore[activePlayer] >= 20){
        d.querySelector("#name-" + activePlayer).textContent = "VÍTĚZ";
        d.querySelector(".app_game_dice").style.display = "none";
        playGame = false;
    }else{
        nextPlayer();
    }
});

d.querySelector(".app_game_new_game").addEventListener("click", newStart);
newStart();
    