import * as S from './styles'

type ButtonProps = {
  text: string
  callback: () => void
}

const Button = ({ callback, text }: ButtonProps) => (
  <S.Wrapper type="button" onClick={callback}>
    {text}
  </S.Wrapper>
)

export default Button
