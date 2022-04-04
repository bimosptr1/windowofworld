import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './page/Landing';
import Home from './page/Home';
import Subscribe from './page/Subscribe';
import Profile from './page/Profile';
import EditProfile from './page/EditProfile';
import DetailBook from './page/DetailBook';
import AddBook from './page/AddBook';
import Trans from './page/Trans';
import ReadBook from './page/ReadBook'
import { Routes, Route, useNavigate, } from "react-router-dom";
import { UserContext } from './context/userContext'

import { useContext, useEffect } from "react";
import { setAuthToken } from './config/api'

// init token on axios every time the app is refreshed
if (localStorage.token) {
  setAuthToken(localStorage.token);
}


function App() {
  let navigate = useNavigate();
  const [state] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    //Redirect Auth
    if (!state.login) {
      navigate("/");
    }
    else {
      if (state.user.role === "admin") {
        navigate("/transaction");
      } else if (state.user.role === "user") {
        navigate("/home");
      }
    }
  }, [state]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/book/:id" element={<DetailBook />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/editprofile/:id" element={<EditProfile />} />
      <Route path="/addbook" element={<AddBook />} />
      <Route path="/transaction" element={<Trans />} />
      <Route path="/readbook/:id" element={<ReadBook />} />
    </Routes>
  );
}


export default App;
