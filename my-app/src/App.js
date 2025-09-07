import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <nav>
        <Nav />
      </nav>

      <main>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
