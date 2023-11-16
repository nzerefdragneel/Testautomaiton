const CatalogScreen = require("../screenObjects/android/Catalog.screen");
const LoginScreen = require("../screenObjects/android/Login.screen");
const LeftSideMenuScreen = require("../screenObjects/android/LeftSideMenu.screen")

describe("Hybrid App Tests", () => {
  beforeEach(async () => {
    // Mở menu bên trái
    await LeftSideMenuScreen.expandMenuButton.click();
  });

  it("should navigate to catalog screen", async () => {
   
    // Chọn mục "Products" trên màn hình menu
    await LeftSideMenuScreen.productsMenuOption.click();

    // Kiểm tra rằng tiêu đề "Products" hiển thị trên màn hình danh mục sản phẩm
    await expect(CatalogScreen.productsHeader).toHaveText("Products");
  });

  it("should log in from left side menu", async () => {
    // Chọn mục "Log In" trên màn hình menu
    await LeftSideMenuScreen.loginMenuOption.click();

    await LoginScreen.login("bob@example.com", "10203040");

    await expect(CatalogScreen.productsHeader).toHaveText("Products");

  });
});