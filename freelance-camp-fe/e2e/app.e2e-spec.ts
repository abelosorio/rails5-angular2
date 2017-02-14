import { FreelanceCampFePage } from './app.po';

describe('freelance-camp-fe App', function() {
  let page: FreelanceCampFePage;

  beforeEach(() => {
    page = new FreelanceCampFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
