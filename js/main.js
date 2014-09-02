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
                makeChoice = $(this).text().toLowerCase();

                console.log(makeChoice);

                play(makeChoice);

                event.preventDefault();
            });


            event.preventDefault();
        });
    });

    // play function
    var play = function(userChoice) {
        var computerChoice = Math.random();

        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        };

        $("<p>Computer Choose: " + computerChoice + "</p>").appendTo(".result");
        $("<p>You Choose: " + userChoice + "</p>").appendTo(".result");

        var compare = function(choice1, choice2) {
            if ( choice1 === choice2) {
                $("<p>The result is a tie!</p>").appendTo(".result");
            } else if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    $("<p>rock wins</p>").appendTo(".result");
                } else if (choice2 === "paper") {
                    $("<p>paper wins</p>").appendTo(".result");
                }
            } else if ( choice1 === "paper") {
                if (choice2 === "rock") {
                    $("<p>paper wins</p>").appendTo(".result");
                } else if (choice2 === "scissors") {
                    $("<p>scissors wins</p>").appendTo(".result");
                }
            } else if ( choice1 === "scissors") {
                if (choice2 === "rock") {
                    $("<p>rock wins</p>").appendTo(".result");
                } else  if (choice2 === "paper") {
                    $("<p>scissors wins</p>").appendTo(".result");
                }
            }
        }

        compare(userChoice, computerChoice);
    };
})(jQuery, window, document);