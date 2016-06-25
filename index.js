var rpio=require("rpio");

rpio.open(11, rpio.OUTPUT, rpio.LOW);

for(var i=0;i<1000;i++) {
         rpio.write(11, rpio.HIGH);
         rpio.msleep(50);
        rpio.write(11, rpio.LOW);
        rpio.msleep(50);
 }
 
 
