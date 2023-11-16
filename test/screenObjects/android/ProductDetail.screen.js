class ProductDetailScreen {
  
    get selectProductDetail(){
      return $(
       '//android.view.ViewGroup[@content-desc="store item]'
      )
    }
    get selectBlueProduct(){
      return $('//android.view.ViewGroup[@content-desc="blue circle"]/android.view.ViewGroup')
    }
    get addToCartButton(){
        return $(
          '//android.view.ViewGroup[@content-desc="Add To Cart button"]'
        )
      }
    get rateProduct(){
      return $(
        '(//android.widget.TextView[@text="󰓏"])[2]'
      )
    }
    get rateComplete(){
      return $('//android.widget.TextView[@text="Thank you for submitting your review!"]')
    }
    get closeRating(){
      return $('//android.widget.TextView[@text="Close Modal"]')
    }
  }
  
  module.exports = new ProductDetailScreen();
  