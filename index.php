<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Kostky</title>
</head>
<body>
    <main>
        <section class="app_game">
            <div class="app_game_play_ground">
                <div class="app_game_total_score0 active">
                    <p id="name-0" class="app_game_total_score0_header active1">Scóre 1. hráče</p>
                    <p class="app_game_score0 active1">30</p>
                </div>
                <div class="app_game_total_score1">
                    <p id="name-1" class="app_game_total_score1_header">Scóre 2. hráče</p>
                    <p class="app_game_score1">30</p>
                </div>
                <div class="app_game_current_score0">
                <p class="app_game_round_score_header">Současné skóre</p>
                <p class="app_game_round_score0">6</p>
                </div>
                <div class="app_game_current_score1">
                    <p class="app_game_round_score_header">Současné skóre</p>
                    <p class="app_game_round_score1">6</p>
                </div>
                <div class="app_game_menu" id="row">
                    <button class="app_game_roll_dice">Hodit kostkou</button><br>
                    <button class="app_game_hold_score">Podržet skóre</button><br>
                    <button class="app_game_new_game">Nová hra</button>
                </div>
                <div class="app_game_dice">
                    <div class="app_game_dice_image">
                        <img class="app_game_dice_imageDice" src="images/1.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>
    </main>
</body>
<script src="script.js"></script>
</html>