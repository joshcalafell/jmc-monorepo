import { Injectable } from '@angular/core'
import { Genres } from './drag-drop-items'

export interface IArtMovements {
  id: number
  name: string
  description: string
  yearsActive: string
}
@Injectable({
  providedIn: 'root',
})
export class DragDropService {
  private items: IArtMovements[] = []

  constructor() {
    this.items = Genres
  }

  setItems(items: IArtMovements[]) {
    this.items = items
  }

  getItems(): IArtMovements[] {
    return this.items
  }

  reorderItems(newOrder: IArtMovements[]) {
    this.items = newOrder
  }

  resetItems() {
    this.items = this.items.sort(
      (a: IArtMovements, b: IArtMovements) => a?.id - b?.id,
    )
  }
}
