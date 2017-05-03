import { AngularLearingPage } from './app.po';

describe('angular-learing App', () => {
  let page: AngularLearingPage;

  beforeEach(() => {
    page = new AngularLearingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
