import { NgForOf } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DragDropComponent } from '@jmc-monorepo/drag-drop'
@Component({
  standalone: true,
  imports: [RouterModule, NgForOf, DragDropComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular 17 / Drag and Drop Lib POC'
  github_link = 'https://github.com/joshcalafell/jmc-monorepo'
  author = '@joshcalafell'
}
