
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { PokemonContextProvider } from './context/PokemonContext';
import Favorites from './pages/favorites/Favorites';
import Home from './pages/home/Home';
import PokemonDetalle from './pages/pokemon-detalle/PokemonDetalle';

function App() {
  

  
  return (
    <PokemonContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/pokemon/:id' component={PokemonDetalle}/>
      <Route path='/favorites' component={Favorites}/>
      <Route component={Home}/>
      </Switch>
      </BrowserRouter>
    </PokemonContextProvider>
  );
}

export default App;
