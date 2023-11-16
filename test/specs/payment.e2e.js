const CatalogScreen = require("../screenObjects/android/Catalog.screen");
const ProductDetailScreen = require("../screenObjects/android/ProductDetail.screen");
const CartScreen = require("../screenObjects/android/Cart.screen");
const LoginScreen = require("../screenObjects/android/Login.screen");
const LeftSideMenuScreen = require("../screenObjects/android/LeftSideMenu.screen")
const CheckoutScreen = require("../screenObjects/android/Checkout.screen");
const PaymentScreen = require("../screenObjects/android/Payment.screen");
describe("Test chức năng thanh toán", () => {
 
 
  it("Thanh toán 2 sản phẩm khi chưa đăng nhập ", async () => {
    await CatalogScreen.selectProduct.click();
    await ProductDetailScreen.addToCartButton.click();
    await driver.back();
    await CatalogScreen.selectProduct2.click();
    await ProductDetailScreen.addToCartButton.click();
    await CartScreen.cartdetail.click();
    // await CartScreen.cartdetail.click();

    await PaymentScreen.CheckoutButton.click();
    
    await expect(PaymentScreen.LoginHeader).toHaveText("Login");
  });
  it("Sau khi đăng nhập hiển thị check out screen", async () => {
    await LoginScreen.login("bob@example.com", "10203040");
    
    await expect(CheckoutScreen.screen).toHaveText("Checkout");
  });
  it("Bỏ trống fullname", async () => {
    await PaymentScreen.ToPayment("","Mexico","","Mexico","26","08989","Mexico");
    await driver.pause(3000);
    await expect(PaymentScreen.checkFullname.isEnabled()).toBeTruthy();
  });
  it("Bỏ trống address 1", async () => {
    await PaymentScreen.inputAdr1.setValue("");
    await driver.pause(3000);
    await PaymentScreen.TopaymentButton.click();
    await expect(PaymentScreen.checkAdr1.isEnabled()).toBeTruthy();
  });
  it("Bỏ trống city", async () => {
    await PaymentScreen.inputCity.setValue("");
    await driver.pause(3000);
    await PaymentScreen.TopaymentButton.click();
    await expect(PaymentScreen.checkCity.isEnabled()).toBeTruthy();
  });
  it("Điền đúng thông tin người dùng", async () => {
    await PaymentScreen.ToPayment("Zeref Dragneel","Mexico","","Mexico","26","08989","Mexico");
    await driver.pause(3000);
    await expect(CheckoutScreen.successScreen).toHaveText("Checkout");
  });
  it("Bỏ trống thông tin card", async () => {
    await CheckoutScreen.ReviewButton.click();
    await driver.pause(3000);
    await expect(CheckoutScreen.getError.isEnabled()).toBeTruthy();
  });
  it("Kiểm tra tổng giá trị sản phẩm trước khi đặt hàng", async () => {
  
    await CheckoutScreen.toPreviewOrder();

    await expect(CheckoutScreen.totalPrice).toHaveText("$45.97");
  });
  it("Thanh toán thành công", async () => {
  
    await CheckoutScreen.PlaceButton.click();

    await expect(CheckoutScreen.Checkout).toHaveText("Checkout Complete");
  });
  it("Tiếp tục mua hàng sau khi đặt", async () => {
    
    await CartScreen.continuteshopping.click();

    await expect(CatalogScreen.productsHeader).toHaveText("Products");
  });
});