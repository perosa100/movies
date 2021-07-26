import * as S from './styles'
import { Link } from 'react-router-dom'

type ThumbProps = {
  image: string
  movieId: number
  clickable: boolean
}

const Thumb = ({ clickable, image, movieId }: ThumbProps) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <S.Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <S.Image src={image} alt="movie-thumb" />
    )}
  </div>
)

export default Thumb
