import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class DragDropService {
  private items: string[] = []

  constructor() {
    this.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
  }

  setItems(items: string[]) {
    this.items = items
  }

  getItems(): string[] {
    return this.items
  }

  reorderItems(newOrder: string[]) {
    this.items = newOrder
  }
}
