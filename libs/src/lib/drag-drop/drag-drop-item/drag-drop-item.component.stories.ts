import type { Meta, StoryObj } from '@storybook/angular'
import { DragDropItemComponent } from './drag-drop-item.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import * as Genres from '../service/drag-drop/drag-drop-items'

const meta: Meta<DragDropItemComponent> = {
  component: DragDropItemComponent,
  title: 'DragDropItemComponent',
}
export default meta
type Story = StoryObj<DragDropItemComponent>

export const Primary: Story = {
  args: {
    item: Genres.default[0],
  },
}

export const DragDropItem: Story = {
  args: {
    item: Genres.default[0],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Techno/gi)).toBeTruthy()
  },
}
