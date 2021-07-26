import { render, screen } from '@testing-library/react'

import MovieInfo from '.'

describe('<MovieInfo />', () => {
  it('should render the heading', () => {
    const { container } = render(<MovieInfo />)

    expect(screen.getByRole('heading', { name: /MovieInfo/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
