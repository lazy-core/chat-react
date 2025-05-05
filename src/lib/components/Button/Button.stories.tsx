import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta = {
  title: 'Library/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }, // Log clicks in the Actions tab
    children: { control: 'text' }, // Allow editing text content in Controls
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Basic story
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    className: 'bg-blue-500 hover:bg-blue-700',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    className: 'bg-gray-500 hover:bg-gray-700',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}

export const Large: Story = {
  args: {
    children: 'Large Button',
    className: 'px-6 py-3 text-lg',
  },
}
