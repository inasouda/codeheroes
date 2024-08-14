import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Home';
import RegistrationForm from './pages/registration';
import NavBar from './components/NavBar';
import FreeLessonForm from './pages/FreeLesson';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/free-lesson" element={<FreeLessonForm />} />

          {/* Add more routes here for other components/pages */}
        </Routes>
      </Router>
  </ChakraProvider>
  );
};

export default App;
