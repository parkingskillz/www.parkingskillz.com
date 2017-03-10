import { WwwParkingskillzComPage } from './app.po';

describe('www-parkingskillz-com App', () => {
  let page: WwwParkingskillzComPage;

  beforeEach(() => {
    page = new WwwParkingskillzComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
