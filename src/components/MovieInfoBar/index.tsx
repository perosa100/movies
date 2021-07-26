import { convertMoney, calcTime } from 'utils/helpers'
import * as S from './styles'
import {} from './../../utils/helpers'
type MovieInfoBarProps = {
  time: number
  budget: number
  revenue: number
}

const MovieInfoBar = ({ time, budget, revenue }: MovieInfoBarProps) => (
  <S.Wrapper>
    <S.Content>
      <div className="column">
        <p>Running time: ${calcTime(time)}</p>
      </div>
      <div className="column">
        <p>Running time: ${convertMoney(budget)}</p>
      </div>
      <div className="column">
        <p>Running time: ${convertMoney(revenue)}</p>
      </div>
    </S.Content>
  </S.Wrapper>
)

export default MovieInfoBar
