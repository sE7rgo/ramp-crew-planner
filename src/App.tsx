import "./App.css";
import Main from "./routes/main";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  const some = null;
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
