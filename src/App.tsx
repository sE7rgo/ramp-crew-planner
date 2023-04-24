import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./routes/main";
import Plan from "./routes/plan";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:planId" element={<Plan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
