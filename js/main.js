;(function($, window, document, undefined) {
    var $win = $(window);
    var $doc = $(document);
    var userChoice;

    $doc.ready(function() {
        $("#btn-play").on('click', function(event) {
            var $this = $(this);

            $(".area-head").animate({
                "top": "15%"
            }, 200);

            $this.parents("li").fadeOut();
            $this.parents(".area").find(".area-body").fadeIn();

            $("#user-choice a").on('click', function(event) {
                var makeChoice;
                var $this = $(this);

                $this.addClass("clicked").siblings().removeClass("clicked");

                makeChoice = $this.text().toLowerCase();

                play(makeChoice);

                event.preventDefault();
            });

            event.preventDefault();
        });
    });

    // play function
    var play = function(userChoice) {
        setTimeout(function() {
            var computerChoice = Math.random();

            if (computerChoice < 0.34) {
                computerChoice = "rock";
            } else if(computerChoice <= 0.67) {
                computerChoice = "paper";
            } else {
                computerChoice = "scissors";
            };

            $(".player-first").text("You Choose: " + userChoice);
            $(".player-second").text("Computer Choose: " + computerChoice);

            var compare = function(choice1, choice2) {
                if ( choice1 === choice2) {
                    $(".game-result").text("The result is a tie!");
                } else if (choice1 === "rock") {
                    if (choice2 === "scissors") {
                        $(".game-result").text("rock wins");
                    } else if (choice2 === "paper") {
                        $(".game-result").text("paper wins");
                    }
                } else if ( choice1 === "paper") {
                    if (choice2 === "rock") {
                        $(".game-result").text("paper wins");
                    } else if (choice2 === "scissors") {
                        $(".game-result").text("scissors wins");
                    }
                } else if ( choice1 === "scissors") {
                    if (choice2 === "rock") {
                        $(".game-result").text("rock wins");
                    } else  if (choice2 === "paper") {
                        $(".game-result").text("scissors wins");
                    }
                }
            }

            compare(userChoice, computerChoice);
        }, 500);
    };
})(jQuery, window, document);