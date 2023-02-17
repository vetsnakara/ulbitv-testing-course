const Page = require("./page");

class UsersPage extends Page {
  get loadingTitle() {
    return $("#users-loading");
  }

  get userList() {
    return $("#users-list");
  }

  get usersItems() {
    // return browser.react$$("User");
    return $$("[data-user]");
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      await this.userList.waitForDisplayed({ timeout: 2000 });
    } catch (error) {
      throw new Error("Error on users load");
    }
  }

  async deleteUser() {
    try {
      const userCount = await this.usersItems.length;

      if (!userCount) {
        throw new Error("Users not found");
      }

      await this.usersItems[0].$("#user-delete").click();
      const userCountAfterDelete = await this.usersItems.length;

      if (userCountAfterDelete - 1 === userCount) {
        throw new Error("User wasn't deleted correctly");
      }
    } catch (error) {
      throw new Error("Error on delete user." + error.message);
    }
  }

  open() {
    return super.open("users-test");
  }
}

module.exports = new UsersPage();
