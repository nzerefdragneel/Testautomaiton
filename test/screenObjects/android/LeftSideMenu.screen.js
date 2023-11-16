class LeftSideMenuScreen {
  get expandMenuButton() {
    return $("~open menu");
  }

  get loginMenuOption() {
    return $('//*[@text="Log In"]');
  }
  
  get productsMenuOption() {
    return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView');
  }
}

module.exports = new LeftSideMenuScreen();
