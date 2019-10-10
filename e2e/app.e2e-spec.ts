import { InfiniteScrollerPage } from './app.po';

describe('directive App', () => {
  let page: InfiniteScrollerPage;

  beforeEach(() => {
    page = new InfiniteScrollerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
