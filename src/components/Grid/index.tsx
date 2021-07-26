import * as S from './styles'

type GridProps = {
  header: string
  children: React.ReactNode
}
const Grid = ({ header, children }: GridProps) => (
  <S.Wrapper>
    <h1>{header}</h1>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

export default Grid
