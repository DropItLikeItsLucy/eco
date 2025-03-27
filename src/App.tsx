import React from 'react';
import './App.css';

// Import the components we just created
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Render the components like HTML tags */}
      <Header />
      <main> {/* It's good practice to wrap main page content in a <main> tag */}
        <Hero />
        {/* Other homepage sections would go here later */}
      </main>
      <Footer />
    </div>
  );
}

export default App;