import * as S from './styles'
import NoImage from '../../images/no_image.jpg'

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from 'services/config'
import { useHomeFetch } from './../../hooks/useHomeFetch'

const Home = () => {
  const { error, loading, state } = useHomeFetch()

  return <S.Wrapper>Home</S.Wrapper>
}

export default Home
