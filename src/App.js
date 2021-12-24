import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
// import { Container } from 'react-bootstrap'
import MyMainPage from './components/MyMainPage';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyMainPage />
    </div>
  );
}

export default App;
