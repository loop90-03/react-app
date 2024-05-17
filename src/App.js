import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Gsap01 from './pages/gsap01';
import Gsap02 from './pages/gasp02';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/gsap01" element={<Gsap01 />}></Route>
        <Route path="/gsap02" element={<Gsap02 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
