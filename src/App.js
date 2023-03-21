import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import CreateArticle from './pages/addArticle/AddArticle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="article">
          <Route path='create' element={<CreateArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
