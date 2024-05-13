import type { Meta, StoryObj } from '@storybook/angular'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Genres } from '../service/drag-drop/drag-drop-items'
import { DragDropItemComponent } from './drag-drop-item.component'

const meta: Meta<DragDropItemComponent> = {
  component: DragDropItemComponent,
  title: 'DragDropItemComponent',
}
export default meta
type Story = StoryObj<DragDropItemComponent>

export const Primary: Story = {
  args: {
    item: Genres[0],
  },
}

export const DragDropItem: Story = {
  args: {
    item: Genres[0],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Techno/gi)).toBeTruthy()
  },
}
