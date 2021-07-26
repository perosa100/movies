import * as S from './styles'
import SearchIcon from '../../images/search-icon.svg'
import { useEffect, useRef, useState } from 'react'

type SearchBarProps = {
  setSearchTerm: (args: string) => void
}

const SearchBar = ({ setSearchTerm }: SearchBarProps) => {
  const [state, setState] = useState('')
  const initial = useRef(true)

  useEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }

    const timer = setTimeout(() => {
      setSearchTerm(state)
    }, 500)

    return () => clearTimeout(timer)
  }, [setSearchTerm, state])

  return (
    <S.Wrapper>
      <S.Content>
        <img src={SearchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event?.currentTarget.value)}
          value={state}
        />
      </S.Content>
    </S.Wrapper>
  )
}

export default SearchBar
