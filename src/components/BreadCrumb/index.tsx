import { Link } from 'react-router-dom'
import * as S from './styles'

type BreadCrumbProps = {
  movieTitle: string
}

const BreadCrumb = ({ movieTitle }: BreadCrumbProps) => (
  <S.Wrapper>
    <S.Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </S.Content>
  </S.Wrapper>
)

export default BreadCrumb
