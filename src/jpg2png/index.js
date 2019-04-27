const path = require('path');
const sharp = require('sharp');
const fse = require('fs-extra');
const { askQuestion, parseCommandArguments } = require('./../utils');

const commargs = parseCommandArguments();
if (!commargs || !commargs.length) throw new Error('Missing arguments');

function getOutputFileFromInputFile (inputpath, extension) {
  const ouputdir = path.dirname(inputpath);
  const inputext = path.extname(inputpath);
  const ouputname = path.basename(inputpath).replace(inputext, extension);
  const outputpath = path.join(ouputdir, ouputname);
  return outputpath;
}

async function outputFile (inputpath, outputpath) {
  const promise = new Promise((resolve, reject) => {
    sharp(inputpath)
      .png()
      .toFile(outputpath, (err, info) => {
        if (err) reject(err);
        else resolve(info);
      });
  });
  return promise;
}

async function run () {
  const cwd = process.cwd();
  const inputpath = path.join(cwd, commargs[0]);

  let fileExists = await fse.pathExists(inputpath);
  if (!fileExists) throw new Error('Input file not exists');

  let outputpath = getOutputFileFromInputFile(inputpath, '.png');
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

  await outputFile(inputpath, outputpath);
  process.exit(0);
}

// eslint-disable-next-line no-console
run().catch(console.error);
