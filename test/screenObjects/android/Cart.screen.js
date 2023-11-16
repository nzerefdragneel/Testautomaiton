class CartScreen {
    get cartdetail(){
        return $(
            '//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView'
           )
    }
    get productNameText() {
        return $(
          'android=new UiSelector().text("Sauce Labs Backpack").className("android.widget.TextView")'
        );
      }
    get blueProduct(){
      return $('//android.view.ViewGroup[@content-desc="blue circle"]/android.view.ViewGroup')
    }
    get totalPrice(){
      return $('//android.widget.TextView[@content-desc="total price"]')
    }
    get totalItem(){
      return $('//android.widget.TextView[@content-desc="total number"]')
    }
    get productNameText2() {
      return $(
        'android=new UiSelector().text("Sauce Labs Bike Light").className("android.widget.TextView")'
      );
    }
    get gotoshopping() {
      return $(
        '//android.widget.TextView[@text="Go Shopping"]'
      );
    }
    get continuteshopping() {
      return $(
        '//android.widget.TextView[@text="Continue Shopping"]'
      );
    }
    get updateQuantity() {
      return $(
        '//android.view.ViewGroup[@content-desc="counter plus button"]/android.widget.ImageView'
      );
    }
    get productQuantity() {
      return $(
        '(//android.widget.TextView[@text="2"])[2]'
      );
    }
    
    get removeProduct() {
      return $('//*[@text="Remove Item"]');
    }
    get isEmpty(){
      return $('//android.widget.TextView[@text="Oh no! Your cart is empty. Fill it up with swag to complete your purchase."]');
    }
  }
  
  module.exports = new CartScreen();
  