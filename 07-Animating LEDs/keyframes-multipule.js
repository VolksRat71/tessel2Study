var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
    io: new Tessel()
});

board.on("ready", () => {
    var leds = new five.Leds(["a5", "a6", "b5"]);
    var animation = new five.Animation(leds);

    var animateForever = () => {
        animation.enqueue({
            duration: 2000,
            cuePoints: [0, 0.05, 1.0],
            keyFrames: [
                [{ intensity: 100 }, { intensity: 0 }, { intensity: 100 }],
                [{ intensity: 0 }, { intensity: 100 }, { intensity: 0 }],
                [{ intensity: 100 }, { intensity: 0 }, { intensity: 100 }],
            ],
            oncomplete() {
                console.log("Do it again!");
                animateForever();
            }
        });
    };
    animateForever();
});
