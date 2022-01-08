import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import About from './components/About';
import Navbar from './components/Navbar';
import { Switch, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ExperiencePage from './pages/ExperiencePage';
import BreastCancerPage from './pages/BreastCancerPage';
import DiabetesPage from './pages/DiabetesPage';
import BitcoinPage from './pages/BitcoinPage';
// import Aos from 'aos';
// import 'aos/dist/aos.css';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  console.log(location.pathname);

  const toggle = () => {
    setIsOpen( !isOpen)
  };

  // useLayoutEffect(
  //   () => {
  //     window.scrollTo(0, 0);
  //   },
  //   [location.pathname]
  // );

  // useEffect(() => {
  //   Aos.init({});
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={AboutPage} />
        <Route path='/experience' component={ExperiencePage} />
        <Route path='/projects' component={ProjectPage} />
        <Route path='/breast_cancer' component={BreastCancerPage} />
        <Route path='/diabetes' component={DiabetesPage} />
        <Route path='/bitcoin' component={BitcoinPage} />
        <Route path='/contact' component={About} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
