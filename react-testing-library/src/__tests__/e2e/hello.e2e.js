const HelloWorldPage = require("../../__tests__/e2e/pages/hello.page");

describe("Hello world page", () => {
  it("should toggle", async () => {
    await HelloWorldPage.open();

    await HelloWorldPage.toggleTitleWithInput("hello");
    await expect(HelloWorldPage.helloTitle).toBeExisting();

    await HelloWorldPage.toggleBtn.click();
    await expect(HelloWorldPage.helloTitle).not.toBeExisting();
  });

  it("should not toggle", async () => {
    await HelloWorldPage.open();
    await HelloWorldPage.toggleTitleWithInput("abc");

    await expect(HelloWorldPage.helloTitle).not.toBeExisting();
  });
});
