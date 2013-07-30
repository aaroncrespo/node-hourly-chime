var fs = require('fs');
var lame = require('lame');
var Speaker = require('speaker');

module.exports = function (mp3File, time) {
  var hourly;

  setInterval(function () {
    this.currtime = this.currtime + 1 || 1;
    hourly = new Date();
    // console.log(hourly.getHours(), hourly.getMinutes(), hourly.getSeconds());
    if (time && this.currtime % time == 0) {
      playFile(mp3File);
    } else if (hourly.getMinutes() == 0 && hourly.getSeconds() == 0) {
     playFile(mp3File);
    }
  },1000);
}

function playFile(mp3File) {
  fs.createReadStream(mp3File)
  .pipe(new lame.Decoder())
  .on('format', function (format) {
    this.pipe(new Speaker(format));
  });
}