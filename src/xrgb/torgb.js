function outputToRGBColor(hex) {
  let str = hex;
  if (hex.length === 3) {
    str = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }
  const bit = parseInt(str, 16);
  // eslint-disable-next-line no-bitwise
  const rgb = `${bit >> 16}, ${(bit >> 8) & 255}, ${bit & 255}`;
  // eslint-disable-next-line no-console
  console.log(`rgb(${rgb})`);
  // eslint-disable-next-line no-console
  console.log(`rgba(${rgb}, 1)`);
}

module.exports = outputToRGBColor;
