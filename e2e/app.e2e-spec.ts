import { MeandockerPage } from './app.po';

describe('meandocker App', function() {
  let page: MeandockerPage;

  beforeEach(() => {
    page = new MeandockerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
