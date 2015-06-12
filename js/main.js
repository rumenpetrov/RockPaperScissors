;(function($, window, document, undefined) {
    var $win = $(window);
    var $doc = $(document);
    var userChoice;

    $doc.ready(function() {
        // layout change
        $("#btn-play").on('click', function(event) {
            var $this = $(this);

            $(".area-head").animate({
                "top": "15%"
            }, 300);

            $this.parents("li").fadeOut(300);
            $this.parents(".area").find(".area-body").fadeIn(600);

            event.preventDefault();
        });
        
        // user makes his choice
        $("#user-choice a").on('click', function(event) {
            var makeChoice;
            var $this = $(this);

            $this.addClass("clicked").siblings().removeClass("clicked");

            makeChoice = $this.text().toLowerCase();

            // clear choise and result text after every click
            $(".game-result").text("");
            $(".player-first span").text(" ");
            $(".player-second span").text(" ");

            // show loader
            $('.loader').fadeIn(200);

            // execute play function
            play(makeChoice);

            event.preventDefault();
        });
    });

    // function that make computer's choice, compare it with user's choice and print result
    var play = function(userChoice) {
        var computerChoice = Math.random();

        // function that compare choices and print result
        var compare = function(userChoice, computerChoice) {
            if ( userChoice === computerChoice) {
                $(".game-result").text("The result is a tie!");
            } else if (userChoice === "rock") {
                if (computerChoice === "scissors") {
                    $(".game-result").text("you win");
                } else if (computerChoice === "paper") {
                    $(".game-result").text("computer win");
                }
            } else if ( userChoice === "paper") {
                if (computerChoice === "rock") {
                    $(".game-result").text("you win");
                } else if (computerChoice === "scissors") {
                    $(".game-result").text("computer win");
                }
            } else if ( userChoice === "scissors") {
                if (computerChoice === "rock") {
                    $(".game-result").text("computer win");
                } else  if (computerChoice === "paper") {
                    $(".game-result").text("you win");
                }
            }
        };

        // computer makes his choice
        if (computerChoice < 0.20) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.6) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        };

        // print out the choices
        $(".player-first span").append(userChoice);

        // execute compare function with delay
        setTimeout(function() {
            // hide loader
            $('.loader').hide();

            compare(userChoice, computerChoice)

            $(".player-second span").text(computerChoice);
        }, 600);
    };
})(jQuery, window, document);