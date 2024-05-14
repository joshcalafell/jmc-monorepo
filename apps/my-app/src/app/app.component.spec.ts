import { NgForOf } from '@angular/common'
import { TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { DragDropComponent } from '@jmc-monorepo/drag-drop'
import { AppComponent } from './app.component'

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
})
