const fs = require('fs'); //file system module
document.body.innerHTML = fs.readFileSync("./index.html"); 
const {cmToIn, inToCm, mToFt, feetToMeter, feetToFtIn, meterToFtIn, ftInToMeter, toNumber} = require('./converter');

// cm => in calc - passed
test('2.54 cm is equivalent to 1 inches', () => {
    expect(cmToIn(2.54)).toBe(1); 
  });

// in => cm calc - passed 
test('1 inch is equivalent to 2.54 cm', () => {
  expect(inToCm(1)).toBe(2.54);
});

// meter => feet calc - passed
test('1 meter is equivalent to 3.280839895 feet', () => {
  expect(mToFt(1)).toBe(1/.3048);
});

// feet => meter - passed
test('1 feet is equivalent to 0.3048 meters', () => {
  expect(feetToMeter(1)).toBe(0.3048);
});

//feet => feet and inches - passed
test('1.5 feet is equal to 1 feet and 6 inches', () => {
  expect(feetToFtIn(1.5)).toStrictEqual([1,6]);
});

//meter => ft and inches - passed 
test('.5334 meter is equal to 1 feet and 9 inches', () => {
  expect(meterToFtIn(.5334)).toStrictEqual([1,9]);
});

//toNumber turns whitespace to 0 - passed
test('whitespace string gets converted to 0', () => {
  expect(toNumber("  ")).toBe(0);
});

//toNumber turns empty string to 0 - passed
test('empty string gets converted to 0', () => {
  expect(toNumber("")).toBe(0);
});

//toNumber turns string numbers to number numbers - passed 
test('a number string gets converted to number', () => {
  expect(toNumber("9")).toBe(9);
});

// ft in [1,9] => meter => .5334 meter - passed
test('1 feet and 9 inches is equal to .5334 meters', () => {
  expect(ftInToMeter([1,9])).toStrictEqual(.5334);
});
