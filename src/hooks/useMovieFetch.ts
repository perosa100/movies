import { useEffect, useState, useCallback } from 'react'
import api from 'services/api'
import { isPersistedState } from 'utils/helpers'

export interface ResponseStateMovie {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: null
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  directors: Director[]
  actors: Actor[]
}

export type Actor = {
  credit_id: string
  name: string
  character: string
  imageUrl: string
  profile_path: string
}

export type Director = {
  name: string
  credit_id: string
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export const useMovieFetch = (movieId: string) => {
  const [state, setState] = useState<ResponseStateMovie>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMovie = useCallback(async () => {
    try {
      setError(false)
      setLoading(true)

      const movie = await api.fetchMovie(movieId)
      const credits = await api.fetchCredits(movieId)

      const directors = credits.crew.filter(
        (member: any) => member.job === 'Director'
      )

      setState({
        ...movie,
        actors: credits.cast,
        directors
      })
      setLoading(false)
    } catch (error) {
      setError(true)
    }
  }, [movieId])

  useEffect(() => {
    const sessionState = isPersistedState(movieId)

    if (sessionState) {
      setState(sessionState)
      setLoading(false)
      return
    }
    fetchMovie()
  }, [fetchMovie, movieId])

  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state))
  }, [movieId, state])

  return { state, loading, error }
}
