import { RecognizeAppPage } from './app.po';

describe('recognize-app App', () => {
  let page: RecognizeAppPage;

  beforeEach(() => {
    page = new RecognizeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
