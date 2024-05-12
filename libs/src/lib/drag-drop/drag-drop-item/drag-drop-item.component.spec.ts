import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DragDropItemComponent } from './drag-drop-item.component'
import * as Genres from '../service/drag-drop/drag-drop-items'
describe('DragDropItemComponent', () => {
  let component: DragDropItemComponent
  let fixture: ComponentFixture<DragDropItemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragDropItemComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DragDropItemComponent)
    component = fixture.componentInstance
    component.item = Genres.default[0]
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render item', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('div')?.textContent).toContain(
      Genres.default[0].name,
    )
  })
})
