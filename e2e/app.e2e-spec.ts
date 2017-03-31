import { TravelManagerPage } from './app.po';

describe('travel-manager App', function() {
  let page: TravelManagerPage;

  beforeEach(() => {
    page = new TravelManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
