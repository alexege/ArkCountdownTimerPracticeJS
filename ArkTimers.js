//#region 
//Add new properties to the Date object constructor
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

const { Client, Intents, MessageSelectMenu } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
var config = { prefix: "!" }

client.on("ready", () => {
    console.log(`Bot has started. Logged in as: ${client.user.tag}`);
});

// !timer test 04:20:00
client.on("messageCreate", message => {
    const arguments = message.content.slice(config.prefix.length).trim().split(' ');
    const command = arguments.shift().toLowerCase();

    if (command === 'status'){
        message.reply("Here is the status of all things");
    }
});

client.login('');



// let timer = 
// {
//     index: 1,
//     title:"sampleTitle",
//     duration: "04:20:00"
// }










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
    
    const { Client, Intents } = require('discord.js');
    const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
    var config = { prefix: "!" }
    
    client.on("ready", () => {
        console.log(`Logged in as ${client.user.tag}!`);
    })
    
    let active = {};
    let timerId = 0;
    let timerName = "default";
    
    client.on("messageCreate", message => {
        const args = message.content.slice(config.prefix.length).trim().split(' ');
        console.log("args:", args);
    
        let userInput = parseInt(args[0]);
    
        if(args.length == 2){
            userInput = args[0];
            console.log("UserInput_length_2:", userInput);
            if(isNaN(userInput)) {
                return message.reply("Sorry, please enter a valid number!");
            }
            console.log("No title provided..");
        }
        if(args.length == 3){
            timerName = args[1];
            userInput = args[1];
            console.log(`Title provided. Title was: ${args[1]}`);
        }
        const command = args.shift().toLowerCase();
        console.log('Command:', command);
    
        if (command === 'status') {
            console.log("active:", active);
            let printDict = '';
            for (var i in active) {
                if(active[i]){
                    printDict += `Timer [${i}] : ${calcTimeDelta(active[i])}\n`
                }
            }
            if(printDict){
                message.reply(`${printDict}`);
            } else {
                message.reply("No timers running.");
            }
        }
    
        if (command === 'timer') {
            // console.log("args:[0]:", args[0]);
            // const userInput = parseInt(args[0]);
            console.log("UsxerINput:", userInput);
            console.log("userInput:", isNaN(userInput));
            var sampleString;
            if(isNaN(args[1])){
                 sampleString = args.slice(1).toString();
            } else {
                sampleString = args.toString();
             }
            console.log("sampleString: ", sampleString);
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
            case 1:
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
    
            timerId++;
            createNewTimer(timerName, newDate, message);
            return;
        }
    })

    
    //#######################################################
      // Calculate the difference between entered date and current date.
      var calcDifference = function(value) {
        let difference = Date.parse(value) - Date.parse(new Date());
        if (difference > 0){
            return difference;
        } else {
            return "Expired!";
        }
    }
    
    // Create a new timer with desired date value
    function createNewTimer(name, date, message) {
        console.log("Creating new timer with name: " + name + " date: " + date);
        
        // If dictionary entry doesn't exist, create one.
        if(!active[name]){
            active[name] = date;
        }
    
        console.log("active:", active);
        id = timerId;
        name = setInterval(function(){timerFunction(name, id, date, message)}, 750);
    }
    
    // Start a timer
    function timerFunction(name, id, time, message) {
        console.log(`Timer[${id}] has: `, calcTimeDelta(time), " time left.");
        // console.log("active[name]:", Date(active[id]));
    
        if(calcDifference(time) <= 0 || calcDifference(time) == "Expired!"){
            clearInterval(name);
            return message.reply(`Timer ${id} is finished!`);
        }
    }
    
    //Calculates difference between entered date and now
    var calcTimeDelta = function (value) {
        var difference = Date.parse(value) - Date.parse(new Date());
        var sec_num = parseInt(difference / 1000);
        var days = Math.floor(sec_num / (3600 * 24));
        var hours = Math.floor((sec_num - (days * (3600 * 24))) / 3600);
        var minutes = Math.floor((sec_num - (days * (3600 * 24)) - (hours * 3600)) / 60);
        var seconds = sec_num - (days * (3600 * 24)) - (hours * 3600) - (minutes * 60);
    
        //Account for single digit numbers
        if (hours < 10) {hours = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
    
        // Print value for debugging purposes
        // console.log(`Time left: ${days}:${hours}:${minutes}:${seconds}`);
    
        let timeLeft = days+':'+hours+':'+minutes+':'+seconds;
        if(timeLeft.includes("-")){
            return 'Expired!';
        } else {
            return timeLeft;
        }
    }
      //#######################################################