import { useEffect, useState, useRef } from 'react'
import api from 'services/api'

type MoviesResult = {
  adult: boolean
  backdrop_path: null | string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date?: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type ResponseResult = {
  page: number
  results: MoviesResult[]
  total_pages: number
  total_results: number
}

const initialState = {
  page: 0,
  results: [] as MoviesResult[],
  total_pages: 0,
  total_results: 0
}

export const useHomeFetch = () => {
  const [state, setState] = useState<ResponseResult>(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMovies = async (page: number, searchTerm = '') => {
    try {
      setError(false)
      setLoading(true)

      const movies = await api.fetchMovies(searchTerm, page)

      setState((prev: any) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
      }))
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchMovies(1)
  }, [])

  return { state, loading, error }
}
