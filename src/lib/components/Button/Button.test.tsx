import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from './Button'

describe('Button Component', () => {
  it('renders children correctly', () => {
    const buttonText = 'Click Me'
    render(<Button>{buttonText}</Button>)

    const buttonElement = screen.getByRole('button', { name: buttonText })
    expect(buttonElement).toBeInTheDocument()
  })

  it('handles click events', () => {
    let clicked = false
    const handleClick = () => {
      clicked = true
    }
    render(<Button onClick={handleClick}>Click Test</Button>)
    const buttonElement = screen.getByRole('button', { name: 'Click Test' })

    buttonElement.click()
    expect(clicked).toBe(true)
  })
})
