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
    
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
