import * as S from './styles'
import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <S.Wrapper>
    <S.Content>
      <Link to="/">
        <S.LogoImg src={RMDBLogo} alt="RMBD-logo" />
      </Link>
      <S.TMDBLogoImg src={TMDBLogo} alt="TMDB-logo" />
    </S.Content>
  </S.Wrapper>
)

export default Header
