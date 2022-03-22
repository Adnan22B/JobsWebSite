import Header from './Components/Header/Header';
import Footer from './Components/Footer'; 
import ROUTES from "./_routes"
import {BrowserRouter, Switch, Route} from "react-router-dom"  


function App() {
  return ( 
    <BrowserRouter>
    <Header /> 
    <Switch>  
        {ROUTES.map((item, index) => 
          <Route key={index} exact path={item.path}  component = {item.component} />
        )}
      </Switch>
    <Footer />
    </BrowserRouter>  
  );
}

export default App;
