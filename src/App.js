import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <Router>
      <main>
        <Container>
          <Route path='/' component={LoginPage} exact />
          <Route path='/signup' component={SignupPage} />
          

        </Container>      
      </main>
      
    </Router>
  );
}

export default App;
