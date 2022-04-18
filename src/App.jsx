import Intro from "./components/intro/intro";
import Context from "./components/registerdata/context";
import useGlobalData from './components/registerdata/useGlobalData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./components/main/main";
import Contact from "./components/contact/contact";

const App = () => {
  const store = useGlobalData();
  return (
    <Context.Provider value={store}>
      <Router>
        <Routes>
            <Route path="/" element={<Main />} />        
            <Route path="/settings" element={<Intro />} />
            <Route path="/contact" element={<Contact />} />        
        </Routes>
      </Router>
    </Context.Provider>
  );
};

export default App;