import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Smart AI <span>Plagiarism Detection</span>
          </h1>
 
          <p>
            Analyze your documents instantly with an advanced
            plagiarism checker interface built for students
            and researchers.
          </p>

          <div className="hero-buttons">   

  {/* Check Now opens login */}
  <Link to="/login">
    <button className="primary-btn">
      Check Now
    </button>
  </Link>

  {/* Explore Features opens dashboard */}
  <Link to="/features">
  <button className="secondary-btn">
    Explore Features
  </button>
</Link>

</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <h3>Similarity Score</h3>
          <p>Check similarity percentage instantly.</p>
        </div>

        <div className="feature-card">
          <h3>AI Detection</h3>
          <p>Smart plagiarism analysis with accuracy.</p>
        </div>

        <div className="feature-card">
          <h3>Secure Reports</h3>
          <p>Your files stay protected and private.</p>
        </div>

        <div className="feature-card">
          <h3>Fast Analysis</h3>
          <p>Generate plagiarism reports quickly.</p>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="dashboard-preview">
        <h2>Plagiarism Dashboard Preview</h2>

        <div className="dashboard-box">

          <div className="dashboard-card">
            <h3>Plagiarism Score</h3>
            <p>28%</p>
          </div>

          <div className="dashboard-card">
            <h3>Originality Score</h3>
            <p>72%</p>
          </div>

          <div className="dashboard-card">
            <h3>Total Words</h3>
            <p>856</p>
          </div>

          <div className="dashboard-card">
            <h3>Matched Sources</h3>
            <p>18</p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;