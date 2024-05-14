import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { DragDropComponent } from '@jmc-monorepo/drag-drop'
import { NgForOf } from '@angular/common'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgForOf,
        DragDropComponent,
        RouterModule.forRoot([{ path: '', component: AppComponent }]),
      ],
    }).compileComponents()
  })

  it(`should have as title 'Angular 17 / Drag and Drop Lib POC'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('Angular 17 / Drag and Drop Lib POC')
  })

  it('should render author', async () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.author).toEqual('@joshcalafell')
  })

  it('should render github link', async () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.github_link).toEqual(
      'https://github.com/joshcalafell/jmc-monorepo',
    )
  })
})
