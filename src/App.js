import React from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Content from './components/Content';
import RelatedArticles from './components/RelatedArticles';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Introduction />
      <Content />
      <RelatedArticles />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
