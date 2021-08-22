//const {test} = require("jest-circus")
const ConvertTemp = require("../scripts/Convert");

test("test Celcius to Reamure", () => {
  expect(ConvertTemp("cel","rea",123)).toBe(98.4);
});
test("test Celcius to Fahrenheit", () => {
  expect(ConvertTemp("cel","far",60)).toBe(140);
});

test("test Celcius to Celcius", () => {
  expect(ConvertTemp("cel","cel",87)).toBe(87);
});

test("test Fahrenheit to Celcius", () => {
  expect(ConvertTemp("far","cel",140)).toBe(60);
});

test("test Fahrenheit to Reamure", () => {
  expect(ConvertTemp("far","rea",28)).toBe(-1.7777777777777777);
});

test("test Fahrenheit to Fahrenheit", () => {
  expect(ConvertTemp("far","far",11)).toBe(11);
});

test("test Reamure to Celcius", () => {
  expect(ConvertTemp("rea","cel",98.4)).toBe(123);
});

test("test Reamure to Fahrenheit", () => {
  expect(ConvertTemp("rea","far",-1.7777777777777777)).toBe(28);
});

test("test Reamure to Reamure", () => {
  expect(ConvertTemp("rea","rea",70)).toBe(70);
});
