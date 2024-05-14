import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IArtMovements } from '../service/drag-drop/drag-drop.service'
import { DragDropModule } from '@angular/cdk/drag-drop'

@Component({
  selector: 'lib-drag-drop-item',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './drag-drop-item.component.html',
  styleUrl: './drag-drop-item.component.scss',
})
export class DragDropItemComponent {
  @Input() item: IArtMovements = {} as IArtMovements
}
