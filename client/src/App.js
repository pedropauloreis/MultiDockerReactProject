import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';

import OtherPage  from './OtherPage';
import Fib from './Fib'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 >Fibonacci Calculator - Sample App with multi Docker instances in K8S World</h1>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div> 
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
