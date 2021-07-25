import * as S from './styles'
import NoImage from '../../images/no_image.jpg'

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from 'services/config'
import { useHomeFetch } from './../../hooks/useHomeFetch'
import HeroImage from './../../components/HeroImage/index'

const Home = () => {
  const { error, loading, state } = useHomeFetch()

  return (
    <S.Wrapper>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
    </S.Wrapper>
  )
}

export default Home
