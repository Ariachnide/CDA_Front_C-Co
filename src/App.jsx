import Header from "./Header";
import CreateJoke from "./routes/CreateJoke";
import GetJokeList from "./routes/GetJokeList";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router basename="/CDA_Front_C-Co/">
      <Header />
      <div className="mainBlock">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/creer-blague" element={<CreateJoke />} />
          <Route path="/liste-blagues" element={<GetJokeList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
