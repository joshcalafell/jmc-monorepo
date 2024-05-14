import { DragDropModule } from '@angular/cdk/drag-drop'
import { NgFor, NgIf } from '@angular/common'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DragDropItemComponent } from './drag-drop-item/drag-drop-item.component'
import { DragDropComponent } from './drag-drop.component'
import { Genres } from './service/drag-drop/drag-drop-items'
import { ChangeDetectionStrategy } from '@angular/core'

describe('DragDropComponent', () => {
  let component: DragDropComponent
  let fixture: ComponentFixture<DragDropComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DragDropComponent,
        DragDropItemComponent,
        DragDropModule,
        NgFor,
        NgIf,
      ],
    })
      .overrideComponent(DragDropItemComponent, {
        set: {
          changeDetection: ChangeDetectionStrategy.Default,
        },
      })
      .compileComponents()

    fixture = TestBed.createComponent(DragDropComponent)
    component = fixture.componentInstance
    component.items = Genres
  })

  it('should create', () => {
    fixture = TestBed.createComponent(DragDropComponent)
    component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})
