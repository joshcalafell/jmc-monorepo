import { DragDropModule } from '@angular/cdk/drag-drop'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Genres } from '../service/drag-drop/drag-drop-items'
import { DragDropItemComponent } from './drag-drop-item.component'
describe('DragDropItemComponent', () => {
  let component: DragDropItemComponent
  let fixture: ComponentFixture<DragDropItemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragDropItemComponent, DragDropModule],
    }).compileComponents()

    fixture = TestBed.createComponent(DragDropItemComponent)
    component = fixture.componentInstance
    component.item = Genres[0]
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render item', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.item = Genres[0]
    expect(compiled.querySelector('h1')?.textContent).toContain('Renaissance')
  })
})
