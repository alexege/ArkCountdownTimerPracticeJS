const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

var config = { prefix: "!" }
var time = 0;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
})


client.on("messageCreate", message => {
  const args = message.content.slice(config.prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'starttimer'){
    const userInput = parseInt(args[0]);
    if(isNaN(userInput)) {
      return message.reply('Sorry, please eneter a valid number!');
    } else {
      //Start the timer

    }
  }
})

function getTimeRemaining(value) {
    const total = Date.parse(value) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    console.log(`Time left: ${days}:${hours}:${minutes}:${seconds}`);
}

// Listening for messages
client.on('messageCreate', message => {
  const args = message.content.slice(config.prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'status') {
    return getTimeRemaining('01 Dec 2021 00:00:00 PST');
  }

  if (command === 'timer') {
    const userInput = parseInt(args[0]);
    if(isNaN(userInput)) {
      return message.reply('Sorry, please enter a valid number!');
    } else {

      var sampleString = args.toString();
      let slicedString = sampleString.toString().split(':');
      console.log("slicedString: ", slicedString);
      let days, hours, minutes, seconds = 0;
      
      switch(slicedString.length){
        case 4:
          days    = slicedString[0];
          hours   = slicedString[1];
          minutes = slicedString[2];
          seconds = slicedString[3];
          message.reply(`Timer started for: ${days}:Days, ${hours}:Hours, ${minutes}:Minutes, ${seconds}:Seconds`);
          break;
        case 3:
          days    = 0;
          hours   = slicedString[0];
          minutes = slicedString[1];
          seconds = slicedString[2];
          message.reply(`Timer started for: ${days}:Days, ${hours}:Hours, ${minutes}:Minutes, ${seconds}:Seconds`);
          break;
        case 2:
          days    = 0;
          hours   = 0;
          minutes = slicedString[0];
          seconds = slicedString[1];
          message.reply(`Timer started for: ${days}:Days, ${hours}:Hours, ${minutes}:Minutes, ${seconds}:Seconds`);
          break;
        case 3:
          days    = 0;
          hours   = 0;
          minutes = 0;
          seconds = slicedString[0];
          message.reply(`Timer started for: ${days}:Days, ${hours}:Hours, ${minutes}:Minutes, ${seconds}:Seconds`);
          break;
        default:
          message.reply("Timer cannot be left blank");
          break;
      }
      
      //Convert all units to seconds
      const daysInMinutes = days * 24 * 60 * 60;
      const hoursInMinutes = hours * 60 * 60;
      const minutesInMinutes = minutes * 60;
      const secondsInMinutes = seconds;

      const totalMinutes = daysInMinutes + hoursInMinutes + minutesInMinutes + secondsInMinutes;

      // // Takes in duration (mins * 60)
      
      // function startTimer(duration) {
      //   var start = Date.now(),
      //       diff,
      //       minutes,
      //       seconds;
      //   function timer() {
      //       // get the number of seconds that have elapsed since 
      //       // startTimer() was called
      //       diff = duration - (((Date.now() - start) / 1000) | 0);
    
      //       // does the same job as parseInt truncates the float
      //       minutes = (diff / 60) | 0;
      //       seconds = (diff % 60) | 0;
    
      //       minutes = minutes < 10 ? "0" + minutes : minutes;
      //       seconds = seconds < 10 ? "0" + seconds : seconds;

      //       console.log(minutes + ":" + seconds);
    
      //       // display.textContent = minutes + ":" + seconds; 
    
      //       if (diff <= 0) {
      //           // add one second so that the count down starts at the full duration
      //           // example 05:00 not 04:59
      //           start = Date.now() + 1000;
      //       }
      //   };
      //   // we don't want to wait a full second before the timer starts
      //   timer();
      //   setInterval(timer, 1000);
      // }
      
      // startTimer(60 * 1);

    }
  }
});


// console.log(`User has entered: ${days}:days ${hours}:hours ${minutes}:minutes ${seconds}:seconds`);




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

/* var x = new Date().addDays(2).addHours(12); */
var x = new Date().addDays(2).addHours(12);


/* When script starts, set all these to 0 */
var 
island_orp_expiration_timer,
island_orp_refresh_timer,
valguero_orp_expiration_timer,
valguero_orp_refresh_timer, 
ragnarok_orp_expiration_timer,
ragnarok_orp_refresh_timer, 
genesis_orp_expiration_timer,
genesis_orp_refresh_timer, 
genesis2_orp_expiration_timer,
genesis2_orp_refresh_timer, 
aberration_orp_expiration_timer,
aberration_orp_refresh_timer, 
center_orp_expiration_timer,
center_orp_refresh_timer, 
scorched_earth_orp_expiration_timer,
scorched_earth_orp_refresh_timer, 
crystal_isles_orp_expiration_timer,
crystal_isles_orp_refresh_timer, 
extinction_orp_expiration_timer,
extinction_orp_refresh_timer
= 0;

resetAllMapOrps();

var maps = ["island","valguero", "ragnarok", "genesis", "genesis2", "aberration", "center", "scorched_earth", "crystal_isles", "extinction"];

function resetAllMapOrps(){
  	island_orp_refresh_timer = new Date().addDays(2).addHours(12);
    island_orp_expiration_timer = new Date().addDays(3);
    valguero_orp_refresh_timer = new Date().addDays(2).addHours(12);
    valguero_orp_expiration_timer = new Date().addDays(3);
    ragnarok_orp_refresh_timer = new Date().addDays(2).addHours(12);
    ragnarok_orp_expiration_timer = new Date().addDays(3);
    genesis_orp_refresh_timer = new Date().addDays(2).addHours(12);
    genesis_orp_expiration_timer = new Date().addDays(3);
    genesis2_orp_refresh_timer = new Date().addDays(2).addHours(12);
    genesis2_orp_expiration_timer = new Date().addDays(3);
    aberration_orp_refresh_timer = new Date().addDays(2).addHours(12);
    aberration_orp_expiration_timer = new Date().addDays(3);
    center_orp_refresh_timer = new Date().addDays(2).addHours(12);
    center_orp_expiration_timer = new Date().addDays(3);
    scorched_earth_orp_refresh_timer = new Date().addDays(2).addHours(12);
    scorched_earth_orp_expiration_timer = new Date().addDays(3);
    crystal_isles_orp_refresh_timer = new Date().addDays(2).addHours(12);
    crystal_isles_orp_expiration_timer = new Date().addDays(3);
    extinction_orp_refresh_timer = new Date().addDays(2).addHours(12);
    extinction_orp_expiration_timer = new Date().addDays(3);
}

function resetOrpTimer(map){
	switch(map){
  case "island":
  	island_orp_refresh_timer = new Date().addDays(2).addHours(12);
    island_orp_expiration_timer = new Date().addDays(3);
    break;
  case "valguero":
    valguero_orp_refresh_timer = new Date().addDays(2).addHours(12);
    valguero_orp_expiration_timer = new Date().addDays(3);
    break;
case "ragnarok":
    ragnarok_orp_refresh_timer = new Date().addDays(2).addHours(12);
    ragnarok_orp_expiration_timer = new Date().addDays(3);
    break;
case "genesis":
    genesis_orp_refresh_timer = new Date().addDays(2).addHours(12);
    genesis_orp_expiration_timer = new Date().addDays(3);
    break;
case "genesis2":
    genesis2_orp_refresh_timer = new Date().addDays(2).addHours(12);
    genesis2_orp_expiration_timer = new Date().addDays(3);
    break;
case "aberration":
    aberration_orp_refresh_timer = new Date().addDays(2).addHours(12);
    aberration_orp_expiration_timer = new Date().addDays(3);
    break;
case "center":
    center_orp_refresh_timer = new Date().addDays(2).addHours(12);
    center_orp_expiration_timer = new Date().addDays(3);
    break;
case "scorched_earth":
    scorched_earth_orp_refresh_timer = new Date().addDays(2).addHours(12);
    scorched_earth_orp_expiration_timer = new Date().addDays(3);
    break;
case "crystal_isles":
    crystal_isles_orp_refresh_timer = new Date().addDays(2).addHours(12);
    crystal_isles_orp_expiration_timer = new Date().addDays(3);
    break;
case "extinction":
    extinction_orp_refresh_timer = new Date().addDays(2).addHours(12);
    extinction_orp_expiration_timer = new Date().addDays(3);
    break;
    }
}


var maps = ["island" ,"valguero", "ragnarok", "genesis", "genesis2", "aberration", "center", "scorched_earth", "crystal_isles", "extinction"];


function resetOrpTimer(map){
	switch(map){
  case "island":
  	island_refresh_timer = new Date().addDays(2).addHours(12);
    island_exp_timer = new Date().addDays(3);
    break;
  }
}


/* var orpExpiration = new Date().addDays(3); */

var inc = 0;
var timer;
function startTimer() {
	timer = setInterval(function() {  
  inc ++;
  let now = new Date();  
  
  /* let timeToExpiration = orpExpiration - now */;
  let island_orp_expiration = island_orp_expiration_timer - now;
  let valguero_orp_expiration = valguero_orp_expiration_timer - now;
  let ragnarok_orp_expiration = ragnarok_orp_expiration_timer - now;
  let genesis_orp_expiration = genesis_orp_expiration_timer - now;
  let genesis2_orp_expiration = genesis2_orp_expiration_timer - now;
  let aberration_orp_expiration = aberration_orp_expiration_timer - now;
  let center_orp_expiration = center_orp_expiration_timer - now;
  let scorched_earth_orp_expiration = scorched_earth_orp_expiration_timer - now;
  let crystal_isles_orp_expiration = crystal_isles_orp_expiration_timer - now;
  let exctinction_orp_expiration = extinction_orp_expiration_timer - now;
  
  if( inc % 100 == 0){
  console.log(`-------${now}--------`)
  console.log("________________________________________________________________________\n");
  console.log("Map:\t\t\t Time til orp expires \t\t\t Time til reminder")
  console.log("________________________________________________________________________\n");
  
  
  console.log("island:\t\t\t",      toHHMMSS(island_orp_expiration));
  console.log("Valguero:\t\t",      toHHMMSS(valguero_orp_expiration));
  console.log("Ragnarok:\t\t",      toHHMMSS(ragnarok_orp_expiration));
  console.log("Genesis:\t\t",       toHHMMSS(genesis_orp_expiration));
  console.log("Genesis2:\t\t",      toHHMMSS(genesis2_orp_expiration));
  console.log("Aberration:\t\t",    toHHMMSS(aberration_orp_expiration));
  console.log("Center:\t\t\t",      toHHMMSS(center_orp_expiration));
  console.log("Scorched_Earth:\t\t",toHHMMSS(scorched_earth_orp_expiration));
  console.log("Crystal_Isles:\t\t", toHHMMSS(crystal_isles_orp_expiration));
  console.log("Extinction:\t\t",    toHHMMSS(exctinction_orp_expiration));
  
  console.log("________________________________________________________________________");
  
}

 
  /* console.log("Time to expiry:", toHHMMSS(timeToExpiration)) */;
  
  	if(now >= x){
    console.log("matching!");
    clearInterval(timer);
    return;
    }
  }, 100);
}
// startTimer();


//Preview date at which messages start
console.log("Reminding you on: ", x.toLocaleString());


 var toHHMMSS = function (value) {
      var sec_num = parseInt(value / 1000); // don't forget the second param
      var days = Math.floor(sec_num / (3600 * 24));
      var hours = Math.floor((sec_num - (days * (3600 * 24))) / 3600);
      var minutes = Math.floor((sec_num - (days * (3600 * 24)) - (hours * 3600)) / 60);
      var seconds = sec_num - (days * (3600 * 24)) - (hours * 3600) - (minutes * 60);

      if (hours < 10) {hours = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      return days+':'+hours+':'+minutes+':'+seconds;
  }



//Start new timer for recurring notifications until addressed.

//Every 5 minutes, query battlemetrics for player population. If player is found, identify map and reset timer for that map.


/* let comparison = () => {
   let rightNow = new Date();
  console.log("RightNow:", rightNow, " : ", x);
    if(rightNow == x){
    alert("Dates are matching");
    }
}

setTimeout(comparison(),100); */





























TOKEN = '';
client.login(TOKEN);