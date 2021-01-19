import mapChooser from "./index";

describe("MapChooser Suite", () => {
  test("returns portland.png when portland is passed into it", () => {
    let expected = "/images/portland.png";
    let actual = mapChooser("portland");

    expect(actual).toEqual(expected);
  });

  test("returns astoria.png when astoria is passed into it", () => {
    let expected = "/images/astoria.png";
    let actual = mapChooser("astoria");

    expect(actual).toEqual(expected);
  });

  test("returns an image based on input passed into it", () => {
    let expected = "/images/astoria.png";
    let actual = mapChooser("astoria");

    expect(actual).toEqual(expected);
  });

  test("returns a none image whe no input is given to it", () => {
    let expected = "/images/none.png";
    let actual = mapChooser("");

    expect(actual).toEqual(expected);
  });
});
