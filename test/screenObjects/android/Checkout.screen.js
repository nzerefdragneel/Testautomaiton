class CheckoutScreen {
    get screen(){
      return $(
        'android=new UiSelector().text("Checkout").className("android.widget.TextView")'
        
      );
    }
    get successScreen(){
      return $(
        'android=new UiSelector().text("Checkout").className("android.widget.TextView")'
        
      );
    }
    
    get inputFullname() {
      return $('//android.widget.EditText[@content-desc="Full Name* input field"]');
    }
  
    get inputCardnumber() {
      return $(
        '//android.widget.EditText[@content-desc="Card Number* input field"]'
      );
    }
  
    get inputExDay() {
        return $('//android.widget.EditText[@content-desc="Expiration Date* input field"]');
    }
    get inputCode() {
        return $('//android.widget.EditText[@content-desc="Security Code* input field"]');
    }
    
    get ReviewButton() {
        return $('//android.widget.TextView[@text="Review Order"]');
    }
    get PlaceButton() {
        return $('//android.view.ViewGroup[@content-desc="Place Order button"]');
    }
    get Checkout(){
        return $(
            'android=new UiSelector().text("Checkout Complete").className("android.widget.TextView")'
          );
    }
  
   get getError() {
    return $(
      '(//android.widget.TextView[@text="Value looks invalid."])[1]'
      );
  }
  get totalPrice(){
    return $(
      '//android.widget.TextView[@content-desc="total price"]'
      );
  }
    async toPreviewOrder() {
      await this.inputFullname.setValue("Zeref Dragneel");
      await this.inputCardnumber.setValue("325812657568789");
      await this.inputExDay.setValue("03/25");
      await this.inputCode.setValue("035");
      await driver.pause(5000);
      await this.ReviewButton.click();
      await driver.pause(3000);
      await this.ReviewButton.click();
      // await this.PlaceButton.click();
    }
  }
  
  module.exports = new CheckoutScreen();
  