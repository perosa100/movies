import * as S from './styles'

import { IMAGE_BASE_URL, POSTER_SIZE } from 'services/config'
import NoImage from '../../images/no_image.jpg'
import { ResponseStateMovie } from 'hooks/useMovieFetch'
import Thumb from 'components/Thumb'

type MovieInfoProps = {
  movie: ResponseStateMovie
}

const MovieInfo = ({ movie }: MovieInfoProps) => {
  return (
    <S.Wrapper backdrop={movie.backdrop_path}>
      <S.Content>
        <Thumb
          movieId={movie.id}
          clickable={false}
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
        />
        <S.Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </S.Text>
      </S.Content>
    </S.Wrapper>
  )
}

export default MovieInfo
