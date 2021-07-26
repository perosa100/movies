import * as S from './styles'

type ActorProps = {
  name: string
  character: string
  imageUrl: string
}

const Actor = ({ name, character, imageUrl }: ActorProps) => (
  <S.Wrapper>
    <S.Image src={imageUrl} alt="actor-thumber" />
    <h3>{name}</h3>
    <p>{character}</p>
  </S.Wrapper>
)

export default Actor
