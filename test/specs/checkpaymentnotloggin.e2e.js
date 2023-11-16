const CatalogScreen = require("../screenObjects/android/Catalog.screen");
const LoginScreen = require("../screenObjects/android/Login.screen");
const CartScreen = require("../screenObjects/android/Cart.screen");
const CheckoutScreen = require("../screenObjects/android/Checkout.screen");
const PaymentScreen = require("../screenObjects/android/Payment.screen");
const LeftSideMenuScreen = require("../screenObjects/android/LeftSideMenu.screen");
const ProductDetailScreen = require("../screenObjects/android/ProductDetail.screen");
describe("Test payment", () => {
  beforeEach(async () => {
     // Thêm sản phẩm vào giỏ hàng
    await CatalogScreen.selectProduct.click();
    await ProductDetailScreen.addToCartButton.click();
  });

  it("when not logged in ", async () => {
    await CartScreen.cartdetail.click();

    await PaymentScreen.CheckoutButton.click();
    
    await expect(PaymentScreen.LoginHeader).toHaveText("Login");
  });

  it("when logged in", async () => {
    await LeftSideMenuScreen.expandMenuButton.click();
    await LeftSideMenuScreen.loginMenuOption.click();
    await LoginScreen.login("bob@example.com", "10203040");
    await driver.pause(3000);
    await CartScreen.cartdetail.click();
    await PaymentScreen.CheckoutButton.click();
    await PaymentScreen.ToPayment();
    await CheckoutScreen.toPreviewOrder();
    await expect(CheckoutScreen.Checkout).toHaveText("Checkout Complete");

  });
});