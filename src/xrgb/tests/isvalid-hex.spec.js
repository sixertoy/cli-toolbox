const isvalid = require('../isvalid-hex');

describe('Valid Color HEX Formats', () => {
  it('should fail', () => {
    expect(isvalid('')).toEqual(false);
    expect(isvalid('1')).toEqual(false);
    expect(isvalid('#FF')).toEqual(false);
    expect(isvalid('#F1')).toEqual(false);
    expect(isvalid('#F1F1')).toEqual(false);
    expect(isvalid('123456')).toEqual(false);
    expect(isvalid('1234567')).toEqual(false);
    expect(isvalid('#FFGFFF')).toEqual(false);
    expect(isvalid('#FFFFFFF')).toEqual(false);
  });
  it('should pass', () => {
    expect(isvalid('#FFF')).toEqual(true);
    expect(isvalid('#123')).toEqual(true);
    expect(isvalid('#FFFFFF')).toEqual(true);
    expect(isvalid('#ACE539')).toEqual(true);
  });
});
