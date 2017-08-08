import { CleanArchitectureExamplePage } from './app.po';

describe('clean-architecture-example App', () => {
  let page: CleanArchitectureExamplePage;

  beforeEach(() => {
    page = new CleanArchitectureExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
