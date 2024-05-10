import type { Meta, StoryObj } from '@storybook/angular'
import { DragDropComponent } from './drag-drop.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<DragDropComponent> = {
  component: DragDropComponent,
  title: 'DragDropComponent',
}
export default meta
type Story = StoryObj<DragDropComponent>

export const Primary: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Item 1/gi)).toBeTruthy()
    expect(canvas.getByText(/Item 2/gi)).toBeTruthy()
    expect(canvas.getByText(/Item 3/gi)).toBeTruthy()
    expect(canvas.getByText(/Item 4/gi)).toBeTruthy()
  },
}

export const Heading: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Item 1/gi)).toBeTruthy()
    expect(canvas.getByText(/Item 2/gi)).toBeTruthy()
    expect(canvas.getByText(/Item 3/gi)).toBeTruthy()
    expect(canvas.getByText(/Item 4/gi)).toBeTruthy()
  },
}
