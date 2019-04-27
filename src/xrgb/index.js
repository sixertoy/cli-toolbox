const torgb = require('./torgb');
const isvalidhex = require('./isvalid-hex');
const isvalidrgb = require('./isvalid-rgb');
const outputToHexadecimalColor = require('./tohex');
const { parseCommandArguments } = require('./../utils');

const args = parseCommandArguments();

function outputRandomColor () {
  const colors = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * 255)
  ).join(',');
  outputToHexadecimalColor(['rgb', colors]);
}

function run () {
  if (!args || !args.length) {
    outputRandomColor();
    process.exit(0);
  }

  const ishex = isvalidhex(args[0]);
  const isrgb = isvalidrgb(args[0]);
  if (!ishex && !isrgb) throw new Error('Invalid color format');

  if (!ishex) outputToHexadecimalColor(isrgb);
  else torgb(args[0].slice(1).trim());
  process.exit(0);
}

run();
