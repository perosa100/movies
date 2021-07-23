import * as S from './styles'
import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

const Header = () => (
  <S.Wrapper>
    <S.Content>
      <S.LogoImg src={RMDBLogo} alt="RMBD-logo" />
      <S.TMDBLogoImg src={TMDBLogo} alt="TMDB-logo" />
    </S.Content>
  </S.Wrapper>
)

export default Header
