import { MyStructuredAppPage } from './app.po';

describe('my-structured-app App', () => {
  let page: MyStructuredAppPage;

  beforeEach(() => {
    page = new MyStructuredAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
