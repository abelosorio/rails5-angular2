/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomepageComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(HomepageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it("should have as title 'Freelance Bootcamp Dashboard''", async(() => {
    const fixture = TestBed.createComponent(HomepageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Freelance Bootcamp Dashboard');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HomepageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Freelance Bootcamp Dashboard'
    );
  }));
});
