import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Authentication from "./pages/Authentication";
import Analytics from "./components/Analytics";
import FAS from "./pages/FAS";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/authentication" element={<Layout><Authentication /></Layout>} />
        <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
        <Route path="/fas" element={<Layout><FAS /></Layout>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    
  );
}

export default App;
