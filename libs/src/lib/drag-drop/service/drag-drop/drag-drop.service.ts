import { Injectable } from '@angular/core'
import * as Genres from './drag-drop-items'
import { __assign } from 'tslib'
export interface ITechnoGenre {
  id: number
  name: string
  description: string
  yearsActive: string
}
@Injectable({
  providedIn: 'root',
})
export class DragDropService {
  private items: ITechnoGenre[] = []

  constructor() {
    this.items = __assign([], Genres.default)
  }

  setItems(items: ITechnoGenre[]) {
    this.items = items
  }

  getItems(): ITechnoGenre[] {
    return this.items
  }

  reorderItems(newOrder: ITechnoGenre[]) {
    this.items = newOrder
  }

  resetItems() {
    this.items = __assign(Genres.default)
  }
}
