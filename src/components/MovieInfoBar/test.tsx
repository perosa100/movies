import { render, screen } from '@testing-library/react'

import MovieInfoBar from '.'

describe('<MovieInfoBar />', () => {
  it('should render the heading', () => {
    const { container } = render(<MovieInfoBar />)

    expect(screen.getByRole('heading', { name: /MovieInfoBar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
