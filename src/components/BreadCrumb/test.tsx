import { render, screen } from '@testing-library/react'

import BreadCrumb from '.'

describe('<BreadCrumb />', () => {
  it('should render the heading', () => {
    const { container } = render(<BreadCrumb />)

    expect(screen.getByRole('heading', { name: /BreadCrumb/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
