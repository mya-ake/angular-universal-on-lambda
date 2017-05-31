import { UniPage } from './app.po';

describe('uni App', () => {
  let page: UniPage;

  beforeEach(() => {
    page = new UniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
