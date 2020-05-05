function isValidRGB(str) {
  const rgbregex = new RegExp(
    // eslint-disable-next-line no-useless-escape
    /^(rgba?)\(([0-9]{1,3},[0-9]{1,3},[0-9]{1,3})\,?([0-9]*\.*[0-9]*)?\)$/,
    'gi'
  );
  if (!str || typeof str !== 'string' || str.trim() === '') return false;
  const matches = rgbregex.exec(str.trim());
  if (!matches || matches.length <= 1) return false;
  return matches.slice(1).filter(v => v);
}

module.exports = isValidRGB;
