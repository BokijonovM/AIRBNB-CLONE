import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
// import { Container } from 'react-bootstrap'
import MyMainPage from './components/MyMainPage';
import MyInspiration from './components/MyInspiration';


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyMainPage />
      <MyInspiration />
    </div>
  );
}

export default App;
