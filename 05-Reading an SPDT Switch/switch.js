var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
    io: new Tessel()
});

board.on("ready", () => {
    var led = new five.Led("b5");
    var spdt = new five.Switch("a5");
    spdt.on("close", () => {
        led.on();
        console.log("Led is on initiating countdown to strobe");
        setTimeout(() => { console.log("5") }, 1000)
        setTimeout(() => { console.log("4") }, 2000)
        setTimeout(() => { console.log("3") }, 3000)
        setTimeout(() => { console.log("2") }, 4000)
        setTimeout(() => { console.log("1"); }, 5000)
        setTimeout(() => {
            led.blink(500);
            console.log("Led strobe")
        }, 6000)
    });
    spdt.on("open", () => {
        led.stop().off();
        console.log("Led is off")
    });
});
