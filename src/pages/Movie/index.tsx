import * as S from './styles'
import { IMAGE_BASE_URL, POSTER_SIZE } from 'services/config'
import NoImage from '../../images/no_image.jpg'

import Grid from 'components/Grid'
import Spinner from 'components/Spinner'
import { useMovieFetch } from 'hooks/useMovieFetch'
import { useParams } from 'react-router-dom'
import BreadCrumb from 'components/BreadCrumb'
import MovieInfo from 'components/MovieInfo'
import MovieInfoBar from 'components/MovieInfoBar'
import Actor from 'components/Actor'

const Movie = () => {
  const { movieId } = useParams()
  const { error, loading, state: movie } = useMovieFetch(movieId)

  console.log(movie)

  if (loading) return <Spinner />
  if (error) return <div>Sommenting error...</div>

  return (
    <S.Wrapper>
      {movie && (
        <>
          <BreadCrumb movieTitle={movie.original_title} />
          <MovieInfo movie={movie} />
          <MovieInfoBar
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
          />
          <Grid header="Actor">
            {movie.actors.map((actor) => (
              <Actor
                key={actor.credit_id}
                name={actor.name}
                character={actor.character}
                imageUrl={
                  actor.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                    : NoImage
                }
              />
            ))}
          </Grid>
        </>
      )}
    </S.Wrapper>
  )
}

export default Movie
