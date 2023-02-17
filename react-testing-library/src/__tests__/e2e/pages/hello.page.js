const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HelloWorldPage extends Page {
  get toggleBtn() {
    return $("#toggle");
  }

  get searchInput() {
    return $("#search");
  }

  get helloTitle() {
    return $("#hello");
  }

  async toggleTitleWithInput(text) {
    await this.searchInput.setValue(text);
    await this.toggleBtn.click();
  }

  open() {
    return super.open("hello");
  }
}

module.exports = new HelloWorldPage();
