import { Global, css } from '@emotion/react';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    color: #2d3436;
  }

  html {
    scroll-behavior: smooth;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Navigation />
      <main>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
