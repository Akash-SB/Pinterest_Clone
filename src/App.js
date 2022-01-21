import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import unsplash from './api/unsplash';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Pin from './components/Pin';
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [pins, setpins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  
  const getImages = (query) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: query,
        per_page: 30
      }
    })
  }

  const toggleThemeMode = () => {
    setDarkTheme(!darkTheme);
  }

  const onSearchSubmit = (query) => {
    setLoading(true);
    getImages(query).then((res) => {
      let result = res.data.results;
      setpins(result);
      setLoading(false);
    })
  }

  useEffect(() => {
    onSearchSubmit('random');
  }, []);
  

  
  return (
    <BrowserRouter>
        <div className="App">
          <Header onSearchSubmit={onSearchSubmit} toggleThemeMode={toggleThemeMode} darkTheme={ darkTheme }/>
        </div>
        <ScrollToTop/>
      
        <Routes>
          <Route path='/' element={<Home loading={loading} pins={pins} darkTheme={darkTheme} />} exact />
          <Route path='/Pin' element={<Pin loading={loading} pins={pins} darkTheme={darkTheme} />} />          
        </Routes>
    </BrowserRouter>
  );
}

export default App;
