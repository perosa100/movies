import { render, screen } from '@testing-library/react'

import Thumb from '.'

describe('<Thumb />', () => {
  it('should render the heading', () => {
    const { container } = render(<Thumb />)

    expect(screen.getByRole('heading', { name: /Thumb/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
