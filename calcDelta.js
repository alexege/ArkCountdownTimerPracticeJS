
//Add new properties to the Date object constructor
//#region 
Date.prototype.addSeconds = function(seconds) {
this.setSeconds(this.getSeconds() + seconds);
return this;
};

Date.prototype.addMinutes = function(minutes) {
this.setMinutes(this.getMinutes() + minutes);
return this;
};

Date.prototype.addHours = function(hours) {
this.setHours(this.getHours() + hours);
return this;
};

Date.prototype.addDays = function(days) {
this.setDate(this.getDate() + days);
return this;
};

Date.prototype.addWeeks = function(weeks) {
this.addDays(weeks*7);
return this;
};

Date.prototype.addMonths = function (months) {
var dt = this.getDate();
this.setMonth(this.getMonth() + months);
var currDt = this.getDate();
if (dt !== currDt) {  
    this.addDays(-currDt);
}
return this;
};

Date.prototype.addYears = function(years) {
var dt = this.getDate();
this.setFullYear(this.getFullYear() + years);
var currDt = this.getDate();
if (dt !== currDt) {  
    this.addDays(-currDt);
}
return this;
};
//#endregion

//#################################################
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
var config = { prefix: "!" }

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
  })

client.on("messageCreate", message => {
    const args = message.content.slice(config.prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'timer') {
        const userInput = parseInt(args[0]);
        if(isNaN(userInput)) {
            return message.reply("Sorry, please enter a valid number!");
        } else {
            var sampleString = args.toString();
            let slicedString = sampleString.toString().split(':');
            console.log("slicedString: ", slicedString);
            let days, hours, minutes, seconds = 0;
      
      switch(slicedString.length){
        case 4:
          days    = parseInt(slicedString[0]);
          hours   = parseInt(slicedString[1]);
          minutes = parseInt(slicedString[2]);
          seconds = parseInt(slicedString[3]);
          message.reply(`Timer started for: ${days}:Days, ${hours}:Hours, ${minutes}:Minutes, ${seconds}:Seconds`);
          break;
        case 3:
          days    = 0;
          hours   = parseInt(slicedString[0]);
          minutes = parseInt(slicedString[1]);
          seconds = parseInt(slicedString[2]);
          message.reply(`Timer started for: ${days}:Days, ${hours}:Hours, ${minutes}:Minutes, ${seconds}:Seconds`);
          break;
        case 2:
          days    = 0;
          hours   = 0;
          minutes = parseInt(slicedString[0]);
          seconds = parseInt(slicedString[1]);
          message.reply(`Timer started for: ${days}:Days, ${hours}:Hours, ${minutes}:Minutes, ${seconds}:Seconds`);
          break;
        case 3:
          days    = 0;
          hours   = 0;
          minutes = 0;
          seconds = parseInt(slicedString[0]);
          message.reply(`Timer started for: ${days}:Days, ${hours}:Hours, ${minutes}:Minutes, ${seconds}:Seconds`);
          break;
          default:
              message.reply("Timer cannot be left blank");
              break;
            }
        console.log(`${days}:Days, ${hours}:Hours, ${minutes}:Minutes, ${seconds}:Seconds`);

        //Create the new date
        let newDate = new Date().addDays(days).addHours(hours).addMinutes(minutes).addSeconds(seconds);
        console.log("updated:", newDate.toLocaleString());
    }
  }
})

//#################################################


// let nextWeek = new Date().addDays(7);
// let tomorrow = new Date().addHours(24);

var calcDifference = function(value) {
    return Date.parse(value) - Date.parse(new Date());
}

// //Calculates difference between entered date and now
// var calcTimeDelta = function (value) {
//     var difference = Date.parse(value) - Date.parse(new Date());
//     var sec_num = parseInt(difference / 1000);
//     var days = Math.floor(sec_num / (3600 * 24));
//     var hours = Math.floor((sec_num - (days * (3600 * 24))) / 3600);
//     var minutes = Math.floor((sec_num - (days * (3600 * 24)) - (hours * 3600)) / 60);
//     var seconds = sec_num - (days * (3600 * 24)) - (hours * 3600) - (minutes * 60);

//     //Account for single digit numbers
//     if (hours < 10) {hours = "0"+hours;}
//     if (minutes < 10) {minutes = "0"+minutes;}
//     if (seconds < 10) {seconds = "0"+seconds;}

//     // Print value for debugging purposes
//     // console.log(`Time left: ${days}:${hours}:${minutes}:${seconds}`);

//     return days+':'+hours+':'+minutes+':'+seconds;
// }


// var timer1 = setInterval(function(){timerFunction(nextWeek)}, 750);
// var timer2 = setInterval(function(){timerFunction(tomorrow)}, 750);

function timerFunction(time) {
    // console.log("Time left is: ", calcTimeDelta(time));

    if(calcDifference(time) <= 0){
        console.log("Time is up!");
        clearInterval(timer1);
    }
}