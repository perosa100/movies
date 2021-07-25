import { render, screen } from '@testing-library/react'

import HeroImage from '.'

describe('<HeroImage />', () => {
  it('should render the heading', () => {
    const { container } = render(<HeroImage />)

    expect(
      screen.getByRole('heading', { name: /HeroImage/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
