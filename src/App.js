import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import { Container } from 'react-bootstrap'
import MyMainPage from './components/MyMainPage';
import MyInspiration from './components/MyInspiration';
import MyDiscover from './components/MyDiscover';
import Questions from './components/Questions';



function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyMainPage />
      <MyInspiration />
      <Container>

      </Container>
      <MyDiscover />
      <Questions />

    </div>
  );
}

export default App;
