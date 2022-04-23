




browser.get('http://localhost:4200/account/login?returnUrl=%2F');

// spec.js
describe('BL-T GUI', function() {


  it('login', function() {
    element(by.css("input[formcontrolname=username]")).sendKeys('test');
    element(by.css("input[formcontrolname=password]")).sendKeys('test123');
    element(by.css('button')).click;
  });

});
