import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar.jsx";
import PageContainer from "./containers/PageContainer";
import Detail from "./pages/Detail";

function App() {
  return (
    <div>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
