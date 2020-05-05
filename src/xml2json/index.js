const path = require('path');
const fse = require('fs-extra');
const xmlparser = require('xml2json');
const { askQuestion, parseCommandArguments } = require('../utils');

const commargs = parseCommandArguments();
if (!commargs || !commargs.length) throw new Error('Missing arguments');

function getOutputFileFromInputFile(inputfile, extension) {
  const ouputdir = path.dirname(inputfile);
  const inputext = path.extname(inputfile);
  const ouputname = path.basename(inputfile).replace(inputext, extension);
  const outputpath = path.join(ouputdir, ouputname);
  return outputpath;
}

async function run() {
  const cwd = process.cwd();
  const inputfile = path.join(cwd, commargs[0]);

  let fileExists = await fse.pathExists(inputfile);
  if (!fileExists) throw new Error('Input file not exists');

  let outputpath = getOutputFileFromInputFile(inputfile, '.json');
  if (commargs.length >= 1 && commargs[1]) {
    outputpath = path.join(cwd, commargs[1]);
  }

  fileExists = await fse.pathExists(outputpath);
  if (fileExists) {
    const filename = path.basename(outputpath);
    const question = `${filename} already exists, overwrite ? (y/N)`;
    const answer = await askQuestion(question);
    if (answer === 'N') process.exit(0);
  }

  const xml = await fse.readFile(inputfile);
  const json = xmlparser.toJson(xml);
  await fse.outputFile(outputpath, json);
  process.exit(0);
}

// eslint-disable-next-line no-console
run().catch(console.error);
