function transform (color) {
  const str = `0${color.toString(16)}`;
  return str.slice(-2);
}

function outputToHexadecimalColor (matches) {
  const alpha =
    matches[0] === 'rgba' && matches.length === 3 ? parseFloat(matches[2]) : 1;
  const colors = matches[1].split(',').map(v => parseInt(v, 10));
  const str1 = transform(colors[0]);
  const str2 = transform(colors[1]);
  const str3 = transform(colors[3]);
  // eslint-disable-next-line no-console
  console.log(`#${str1}${str2}${str3} (alpha: ${alpha})`);
}

module.exports = outputToHexadecimalColor;
