import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyMainPage from './components/MyMainPage';
import MyInspiration from './components/MyInspiration';
import MyDiscover from './components/MyDiscover';
import Questions from './components/Questions';
import MyFooter from './components/MyFooter';
import MyFuture from './components/MyFuture';
import Future from './components/Future';





function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyMainPage />
      <MyInspiration />
      <MyDiscover />
      <Questions />
      <MyFuture />
      <Future />
      <MyFooter />

    </div>
  );
}

export default App;
