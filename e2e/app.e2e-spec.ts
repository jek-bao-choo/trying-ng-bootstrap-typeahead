import { NgBootstrapTypeaheadPage } from './app.po';

describe('ng-bootstrap-typeahead App', function() {
  let page: NgBootstrapTypeaheadPage;

  beforeEach(() => {
    page = new NgBootstrapTypeaheadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
