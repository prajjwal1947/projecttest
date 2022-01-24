import logo from './logo.svg';
import './App.css';
import Row from './Row';
import request from './request'
function App() {
  return (
    <div className="App">
      {/* <Row title='NETFLIX ORGINALS' fetchurl={request.fetchNetflixOrginals}/> */}
      <Row title='Trending Now'/>
    </div>
  );
}

export default App;
