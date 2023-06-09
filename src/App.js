import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import CreateArticle from './pages/addArticle/AddArticle';
import UpdateArticle from './pages/updateArticle/UpdateArticle';
import DeleteArticle from './pages/deleteArticle/DeleteArticle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="article">
          <Route path='create' element={<CreateArticle />} />
          <Route path='update/:articleId' element={<UpdateArticle />} />
          <Route path='delete/:articleId' element={<DeleteArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
