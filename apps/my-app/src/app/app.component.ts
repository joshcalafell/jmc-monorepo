import { NgForOf } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DragDropComponent } from '@jmc-monorepo/drag-drop'

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
@Component({
  standalone: true,
  imports: [RouterModule, NgForOf, DragDropComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular 17 / Drag and Drop Lib POC'
  github_link = 'https://github.com/joshcalafell'
  author = '@joshcalafell'

  myItems = items
}
