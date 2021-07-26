import GlobalStyles from 'styles/GlobalStyles'
import Header from 'components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { RoutesApp } from 'routes'

const App = () => {
  return (
    <Router>
      <Header />
      <RoutesApp />
      <GlobalStyles />
    </Router>
  )
}

export default App
