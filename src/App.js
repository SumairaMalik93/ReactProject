import HomePage from "./pages/homePage";
import Layout from "./global/layout";
import AboutPage from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
