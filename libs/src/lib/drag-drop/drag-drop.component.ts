import { DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop'
import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'lib-drag-drop',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss',
})
export class DragDropComponent {
  @Input() items: string[] = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  drop(event: any) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex)
  }
}
