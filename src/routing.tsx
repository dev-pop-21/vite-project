import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </Router>
  );
}

export default Routing;
