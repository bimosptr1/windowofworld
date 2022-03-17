import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Landing from './page/Landing';
import Home from './page/Home';
import Subscribe from './page/Subscribe';
import Profile from './page/Profile';
import DetailBook from './page/DetailBook';
import AddBook from './page/AddBook';
import Trans from './page/Trans';
import ReadBook from './page/ReadBook'
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Subscribe" element={<Subscribe />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/DetailBook/:id" element={<DetailBook />} />
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/Trans" element={<Trans />} />
        <Route path="/ReadBook" element={<ReadBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
