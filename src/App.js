import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PopularMovies from "./containers/PopularMovies";
import MovieDetails from "./containers/MovieDetails";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGenres } from "./redux/genres";
function App() {

  const Dispatch =useDispatch();

  useEffect(()=>{
    Dispatch(getGenres())
  },[Dispatch]);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PopularMovies/>} />
          <Route path="/movie/:id" element={<MovieDetails/>} />
        </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
