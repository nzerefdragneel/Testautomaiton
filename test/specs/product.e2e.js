const CatalogScreen = require("../screenObjects/android/Catalog.screen");
const ProductDetailScreen = require("../screenObjects/android/ProductDetail.screen");
const CartScreen = require("../screenObjects/android/Cart.screen");
const LoginScreen = require("../screenObjects/android/Login.screen");
const LeftSideMenuScreen = require("../screenObjects/android/LeftSideMenu.screen")
const CheckoutScreen = require("../screenObjects/android/Checkout.screen");
const PaymentScreen = require("../screenObjects/android/Payment.screen");
describe("Add to Cart Test", () => {

  it("Thêm 1 sản phẩm vào giỏ hàng", async () => {
    await CatalogScreen.selectProduct.click();

    // Thêm sản phẩm vào giỏ hàng
    await ProductDetailScreen.addToCartButton.click();

    // Kiểm tra rằng sản phẩm đã được thêm vào giỏ hàng thành công
    await expect(CartScreen.productNameText).toHaveText("Sauce Labs Backpack");
  });

  it("thêm số lượng sẩn phẩm trong giỏ hàng", async () => {
    // Điều hướng đến màn hình giỏ hàng
    await CartScreen.cartdetail.click();
    await driver.pause(1000);
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    await CartScreen.updateQuantity.click();

    await driver.pause(1000);
    // Kiểm tra rằng số lượng sản phẩm đã được cập nhật thành công
    
    await expect(CartScreen.productQuantity).toHaveText("2");
  });

  it("xóa sản phẩm khỏi giỏ hàng", async () => {
    // Điều hướng đến màn hình giỏ hàng
    await CartScreen.cartdetail.click();

    // Xóa sản phẩm khỏi giỏ hàng
    await CartScreen.removeProduct.click();

    // Kiểm tra rằng sản phẩm đã được xóa khỏi giỏ hàng thành công
    await expect(CartScreen.isEmpty).toHaveText("Oh no! Your cart is empty. Fill it up with swag to complete your purchase.");
  });

  it("Tiếp tục mua hàng", async () => {
    
    await CartScreen.gotoshopping.click();

    await expect(CatalogScreen.productsHeader).toHaveText("Products");
  });
  it("Đánh giá sản phẩm", async () => {

    await CatalogScreen.selectProduct.click();
    await driver.pause(3000);
    await ProductDetailScreen.rateProduct.click();
   
    await expect(ProductDetailScreen.rateComplete.isEnabled()).toBeTruthy();
  
    await ProductDetailScreen.closeRating.click();
    
  });
  it("Thêm 2 sản phẩm vào giỏ hàng", async () => {
    await ProductDetailScreen.addToCartButton.click();
    await driver.back();
    await CatalogScreen.selectProduct2.click();
    await ProductDetailScreen.addToCartButton.click();
    await CartScreen.cartdetail.click();
    // Kiểm tra rằng sản phẩm đã được thêm vào giỏ hàng thành công
    await expect(CartScreen.productNameText).toHaveText("Sauce Labs Backpack");
    await expect(CartScreen.productNameText2).toHaveText("Sauce Labs Bike Light");
  });
  it("Thêm sản phẩm khác màu vào giỏ hàng", async () => {
    await LeftSideMenuScreen.expandMenuButton.click();
    await driver.pause(3000);
    await LeftSideMenuScreen.productsMenuOption.click();

    await CatalogScreen.selectProduct.click();
    await ProductDetailScreen.selectBlueProduct.click();
    await ProductDetailScreen.addToCartButton.click();
    await CartScreen.cartdetail.click();
    await expect(CartScreen.blueProduct.isEnabled()).toBeTruthy();
  });

  it("Kiểm tra tổng giá trị sản phẩm trong giỏ hàng", async () => {
    await CartScreen.cartdetail.click();
    await expect(CartScreen.totalItem).toHaveText("3 items");
    await expect(CartScreen.totalPrice).toHaveText("$69.97");
  });
  it("Kiểm tra sort sản phẩm theo giá tăng", async () => {
    await LeftSideMenuScreen.expandMenuButton.click();
    await driver.pause(3000);
    await LeftSideMenuScreen.productsMenuOption.click();
    await CatalogScreen.sortElement.click();
    await CatalogScreen.sortPriceAscending.click();
    await driver.pause(3000);
    await expect(CatalogScreen.priceItem1).toHaveText("$7.99");
    await expect(CatalogScreen.priceItem2).toHaveText("$9.99");
    await expect(CatalogScreen.priceItem3).toHaveText("$15.99");
  });
  it("Kiểm tra sort sản phẩm theo giá giảm", async () => {
    await CatalogScreen.sortElement.click();
    await CatalogScreen.sortPriceDescending.click();
    await driver.pause(3000);
    await expect(CatalogScreen.priceItem1).toHaveText("$49.99");
    await expect(CatalogScreen.priceItem2).toHaveText("$29.99");
    await expect(CatalogScreen.priceItem3).toHaveText("$15.99");
  });
  

});