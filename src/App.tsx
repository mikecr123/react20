
import './App.css';

import Menu from './utils/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndiceGeneros from './generos/IndiceGeneros';
import LandingPage from './LandingPage';


function App() {

  

  return (
    
    <>

    <BrowserRouter>
      <Menu/>

          <div className="container">
            <Switch>
                <Route exact path="/">
                <LandingPage/>
                </Route>

                 <Route>
                 <IndiceGeneros/>
                 </Route>

            </Switch>
       </div>

       </BrowserRouter>
    </>

  );
}

export default App;