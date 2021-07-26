import { render, screen } from '@testing-library/react'

import Actor from '.'

describe('<Actor />', () => {
  it('should render the heading', () => {
    const { container } = render(<Actor />)

    expect(screen.getByRole('heading', { name: /Actor/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
