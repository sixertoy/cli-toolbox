const isvalid = require('../isvalid-rgb');

describe('Valid Color HEX Formats', () => {
  it('should fail', () => {
    expect(isvalid('rgb')).toEqual(false);
    expect(isvalid('rgba')).toEqual(false);
    expect(isvalid('rg(255,255,255)')).toEqual(false);
    expect(isvalid('rga(255,255,255)')).toEqual(false);
    expect(isvalid('rga(255,255,255)')).toEqual(false);
  });
  it('should pass', () => {
    expect(isvalid('rgb(255,255,255)')).toStrictEqual(['rgb', '255,255,255']);
    expect(isvalid('rgb(12,255,255)')).toStrictEqual(['rgb', '12,255,255']);
    expect(isvalid('rgb(12,12,1)')).toStrictEqual(['rgb', '12,12,1']);
    expect(isvalid('rgb(0,2,1)')).toStrictEqual(['rgb', '0,2,1']);
    expect(isvalid('rgba(255,255,255)')).toStrictEqual(['rgba', '255,255,255']);
    expect(isvalid('rgba(255,255,255,1)')).toStrictEqual([
      'rgba',
      '255,255,255',
      '1',
    ]);
    expect(isvalid('rgba(255,255,255,0.2)')).toStrictEqual([
      'rgba',
      '255,255,255',
      '0.2',
    ]);
    expect(isvalid('rgba(255,255,255,0.25)')).toStrictEqual([
      'rgba',
      '255,255,255',
      '0.25',
    ]);
    expect(isvalid('rgba(255,255,255,.25)')).toStrictEqual([
      'rgba',
      '255,255,255',
      '.25',
    ]);
  });
});
