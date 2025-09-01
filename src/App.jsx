import Header from "./Header";
import CreateJoke from "./routes/CreateJoke";
import GetJokeList from "./routes/GetJokeList";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/creer-blague" element={<CreateJoke />} />
        <Route path="/liste-blagues" element={<GetJokeList />} />
      </Routes>
    </Router>
  );
};

export default App;
