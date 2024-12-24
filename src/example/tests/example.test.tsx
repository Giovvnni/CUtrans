import React from 'react'
import { render, screen } from '@testing-library/react'
import Example from '../example'

test('renders the Example component', () => {
  render(<Example />)
  const exampleElement = screen.getByText('This is an example component.')
  expect(exampleElement).toBeInTheDocument()
})
