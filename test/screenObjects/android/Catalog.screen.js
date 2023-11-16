class CatalogScreen {
  get productsHeader() {
    return $(
      'android=new UiSelector().text("Products").className("android.widget.TextView")'
      
    );
    
  }
  get selectProduct(){
   
    return $(
      '(//android.view.ViewGroup[@content-desc="store item"])[1]'
     
      );
  }
  get selectProduct2(){
    return $(
      '(//android.view.ViewGroup[@content-desc="store item"])[2]'
      );
  }
  get sortElement(){
    return $('//android.view.ViewGroup[@content-desc="sort button"]/android.widget.ImageView')
  }
  get sortNameAscending(){
    return $('//android.widget.TextView[@text="Name - Ascending"]')
  }
  get sortNameDescending(){
    return $('//android.widget.TextView[@text="Name - Descending"]')
  }
  get sortPriceAscending(){
    return $('//android.widget.TextView[@text="Price - Ascending"]')
  }
  get sortPriceDescending(){
    return $('//android.widget.TextView[@text="Price - Descending"]')
  }
  get priceItem1(){
    return $('(//android.widget.TextView[@content-desc="store item price"])[1]')
  }
  get priceItem2(){
    return $('(//android.widget.TextView[@content-desc="store item price"])[2]')
  }
  get priceItem3(){
    return $('(//android.widget.TextView[@content-desc="store item price"])[3]')
  }
  
}

module.exports = new CatalogScreen();
