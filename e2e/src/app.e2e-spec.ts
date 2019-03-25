import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('Welcome to lauritz!');
  // });

  it('should verify that login link routes to the login component', () => {
    browser.get('/');
    element(by.id('btnLogin')).click();
    let loginText = element(by.id('loginTitle')).getText();
    expect(loginText).toEqual('Login');
  });

  it('should test ...', () => {
    // write test no. 2.
    browser.get('/home/login');
    
    page.getByFormControlName('username').sendKeys('whatever');
    // browser.sleep(1000);
    page.getByFormControlName('password').sendKeys('whateverPassword'); // nice alternative where no id is needed.
    // browser.sleep(1000);
    element(by.id('btnUserlogin')).click();
    // browser.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'/portal/display-auctions');
    // browser.sleep(1000);
    
    
  });

  it('should create a new product', () => {
    /// Go to display-auctions. Count number of auctions.
    // Go to create-auction. Fill out fields to create an auction.
    // Go to display-auctions. Count number of auctions
    // Verify that we now have on more product.
    
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
