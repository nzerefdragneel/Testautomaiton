class PaymentScreen {
    get CheckoutButton() {
      return $('//android.widget.TextView[@text="Proceed To Checkout"]');
    }
    get LoginHeader(){
        return $(
            'android=new UiSelector().text("Login").className("android.widget.TextView")'
          );
    }
    get inputFullname() {
      return $('//android.widget.EditText[@content-desc="Full Name* input field"]');
    }
    get checkFullname() {
      return $(
        '//android.widget.TextView[@text="Please provide your full name."]'
      );
    }
    
    get inputAdr1() {
      return $(
        '//android.widget.EditText[@content-desc="Address Line 1* input field"]'
      );
    }
    get checkAdr1() {
      return $(
        '//android.widget.TextView[@text="Please provide your address."]'
        );
    }
    get inputAdr2() {
        return $('//android.widget.EditText[@content-desc="Address Line 2 input field"]');
    }
    get inputCity() {
      return $('//android.widget.EditText[@content-desc="City* input field"]');
    }
    get checkCity() {
      return $(
        '//android.widget.TextView[@text="Please provide your city."]'
        );
    }
    get inputState() {
        return $('//android.widget.EditText[@content-desc="State/Region input field"]');
    }
    get inputZip() {
        return $('//android.widget.EditText[@content-desc="Zip Code* input field"]');
    }
    get inputCountry() {
        return $('//android.widget.EditText[@content-desc="Country* input field"]');
    }
    get TopaymentButton() {
        return $('//android.view.ViewGroup[@content-desc="To Payment button"]');
    }
   
    async ToPayment(fullname,adr1,adr2,city,state,zip,country) {
      await this.inputFullname.setValue(fullname);
      await this.inputAdr1.setValue(adr1);
      await this.inputAdr2.setValue(adr2);
      await this.inputCity.setValue(city);
      await this.inputState.setValue(state);
      await this.inputZip.setValue(zip);
      await this.inputCountry.setValue(country);
      await driver.pause(5000);
      await this.TopaymentButton.click();
      // "Zeref Dragneel","Mexico","","Mexico","26","08989","Mexico"
    }
  }
  
  module.exports = new PaymentScreen();
  