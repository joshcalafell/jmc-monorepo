import { TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { DragDropComponent } from '@jmc-monorepo/drag-drop'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DragDropComponent,
        RouterModule.forRoot([{ path: '/', component: AppComponent }]),
      ],
    }).compileComponents()
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Angular 17 / Drag and Drop Lib POC',
    )
  })

  it(`should have as title 'Angular 17 / Drag and Drop Lib POC'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('Angular 17 / Drag and Drop Lib POC')
  })
})
