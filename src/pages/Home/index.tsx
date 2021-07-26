import * as S from './styles'
import NoImage from '../../images/no_image.jpg'

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from 'services/config'
import { useHomeFetch } from 'hooks/useHomeFetch'
import HeroImage from 'components/HeroImage/index'
import Grid from 'components/Grid'
import Thumb from 'components/Thumb'
import Spinner from 'components/Spinner'
import SearchBar from 'components/SearchBar'
import Button from 'components/Button'

const Home = () => {
  const { error, loading, state, setSearchTerm, searchTerm, setIsLoadingMore } =
    useHomeFetch()

  if (error) {
    return <div>sometihig went wrong...</div>
  }

  return (
    <S.Wrapper>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </S.Wrapper>
  )
}

export default Home
