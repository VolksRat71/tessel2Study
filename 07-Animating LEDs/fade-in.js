var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
    io: new Tessel()
});

board.on("ready", () => {
    var leds = new five.Leds(["a5", "a6", "b5"]);

    leds.forEach((led, i) => {
        setTimeout(() => {
            led.fadeIn(1000);
        }, i * 1000);
    });

});

