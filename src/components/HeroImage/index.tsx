import * as S from './styles'

type HeroImageProps = {
  title: string
  text: string
  image: string
}
const HeroImage = ({ image, text, title }: HeroImageProps) => (
  <S.Wrapper image={image}>
    <S.Content>
      <S.Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </S.Text>
    </S.Content>
  </S.Wrapper>
)

export default HeroImage
