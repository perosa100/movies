import Home from 'pages/Home'
import { Routes, Route } from 'react-router-dom'
import Movie from 'pages/Movie/index'
import NotFound from 'components/NotFound/index'

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
