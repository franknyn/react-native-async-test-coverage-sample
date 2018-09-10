import * as Helpers from '../Helpers.js';

describe("fun",  () => {
  test("for fun", async () => {
    expect.assertions(1);
    const data = await Helpers.f();
    expect(data).toBe('done!');
  });
});