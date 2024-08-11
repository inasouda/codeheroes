import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Home';
import RegistrationForm from './pages/registration';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          {/* Add more routes here for other components/pages */}
        </Routes>
      </Router>
  </ChakraProvider>
  );
};

export default App;
