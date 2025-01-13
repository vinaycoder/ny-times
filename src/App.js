import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePageContainer from "./pages/HomePageContainer";
import Footer from "./components/Footer/Footer";
import ArticleDetailsPageContainer from "./pages/ArticleDetailsPageContainer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePageContainer /> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePageContainer />} />
          <Route path="/articleDetails/:id" element={<ArticleDetailsPageContainer />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
