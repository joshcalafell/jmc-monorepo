import type { Meta, StoryObj } from '@storybook/angular'
import { DragDropComponent } from './drag-drop.component'

import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Genres } from './service/drag-drop/drag-drop-items'

const meta: Meta<DragDropComponent> = {
  component: DragDropComponent,
  title: 'DragDropComponent',
}
export default meta
type Story = StoryObj<DragDropComponent>

export const Primary: Story = {
  args: {
    items: Genres,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Techno/gi)).toBeTruthy()
    expect(canvas.getByText(/House/gi)).toBeTruthy()
    expect(canvas.getByText(/Trance/gi)).toBeTruthy()
    expect(canvas.getByText(/Dubstep/gi)).toBeTruthy()
    expect(canvas.getByText(/Drum and Bass/gi)).toBeTruthy()
  },
}

export const DragDrop: Story = {
  args: {
    items: Genres,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Techno/gi)).toBeTruthy()
    expect(canvas.getByText(/House/gi)).toBeTruthy()
    expect(canvas.getByText(/Trance/gi)).toBeTruthy()
    expect(canvas.getByText(/Dubstep/gi)).toBeTruthy()
    expect(canvas.getByText(/Drum and Bass/gi)).toBeTruthy()
  },
}
