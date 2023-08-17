import Cover from './pages/Cover';
import Container from './components/Container';
import About from './pages/About'
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <Header/>
      <Cover />
      <Container>
        <About/>
        <Portfolio/>
        <Contact/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
