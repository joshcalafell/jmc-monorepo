import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop'
import { CommonModule, NgForOf } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import {
  DragDropService,
  IArtMovements,
} from './service/drag-drop/drag-drop.service'
import { DragDropItemComponent } from './drag-drop-item/drag-drop-item.component'

@Component({
  selector: 'lib-drag-drop',
  standalone: true,
  imports: [CommonModule, DragDropItemComponent, DragDropModule, NgForOf],
  providers: [DragDropService], // Provide the DragDropService
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss',
})
export class DragDropComponent implements OnInit {
  items: IArtMovements[] = []

  private dragDropService = inject(DragDropService)

  ngOnInit(): void {
    // Retrieve initial items from the service
    this.items = this.dragDropService.getItems()
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex)
    // Update the order of items in the service after drag and drop
    this.dragDropService.reorderItems(this.items)
  }

  reset(): void {
    // Reset the items in the service
    this.dragDropService.resetItems()
    // Retrieve the updated items from the service
    this.items = this.dragDropService.getItems()
  }
}
