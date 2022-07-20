import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import { auth } from "./components/firebase";
import Header from "./components/Header";
import Login from "./components/Login";
import Payment from "./components/Payment";
import { useStateValue } from "./components/StateProvider";
import Home from "./pages/Home";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe('pk_test_51KasvVLzfdGoXuq1OybvV25SujcFgtlhvERpdie2zcbVtsV21DLun9JzOWtcMEVKvjRwCftYt3tAg1e6sD54deG100pXLRoLXz');
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Elements stripe={promise}><Payment/></Elements>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
