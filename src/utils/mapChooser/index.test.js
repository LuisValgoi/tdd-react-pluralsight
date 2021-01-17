import mapChooser from "./index";

describe("MapChooser Suite", () => {
  test("returns portland.jpg when portland is passed into it", () => {
    let expected = "portland.jpg";
    let actual = mapChooser("portland");
    expect(actual).toEqual(expected);
  });

  test("returns astoria.jpg when astoria is passed into it", () => {
    let expected = "astoria.jpg";
    let actual = mapChooser("astoria");
    expect(actual).toEqual(expected);
  });

  test("returns an image based on input passed into it", () => {
    let expected = "astoria.jpg";
    let actual = mapChooser("astoria");
    expect(actual).toEqual(expected);
  });

  test("returns a default image whe no input is given to it", () => {
    let expected = "default.jpg";
    let actual = mapChooser("");
    expect(actual).toEqual(expected);
  });
});
