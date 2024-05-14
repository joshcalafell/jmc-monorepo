import { DragDropModule } from '@angular/cdk/drag-drop'
import { NgFor, NgIf } from '@angular/common'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Genres } from '../service/drag-drop/drag-drop-items'
import { DragDropItemComponent } from './drag-drop-item.component'
import { ChangeDetectionStrategy } from '@angular/core'
describe('DragDropItemComponent', () => {
  let component: DragDropItemComponent
  let fixture: ComponentFixture<DragDropItemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragDropItemComponent, DragDropModule, NgFor, NgIf],
    })
      .overrideComponent(DragDropItemComponent, {
        set: {
          changeDetection: ChangeDetectionStrategy.Default,
        },
      })
      .compileComponents()

    fixture = TestBed.createComponent(DragDropItemComponent)
    component = fixture.componentInstance
    component.item = Genres[0]
  })

  it('should create', () => {
    fixture = TestBed.createComponent(DragDropItemComponent)
    component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})
