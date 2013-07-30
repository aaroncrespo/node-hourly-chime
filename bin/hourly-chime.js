#!/usr/bin/env node

var optimist = require('optimist');
var app = require('../lib/app');
var path = require('path');

var opts = {
  'file': {
    alias: 'f',
    string: true,
    describe: 'The mp3 file to play every hour'},
  'time': {
    alias: 't',
    string: true,
    describe: 'How repeatedly you want to annoy your co-workers. Default is at the top of every hour. repeats every n seconds',
    default: false}
};

var args = optimist
  .alias('h', 'help')
  .options(opts).argv;


if (args.help) {
  optimist.showHelp();
  return process.exit(-1);
}

if (!args.file) {
  args.file = path.resolve(__filename,'../../lib/sampleMp3/sample.mp3');
}

app(args.file, args.time);
