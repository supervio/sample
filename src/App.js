import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [scrollDirection, setScrollDirection] = useState('right');

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down'); // Scrolling down
      } else {
        setScrollDirection('up'); // Scrolling up
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For mobile or negative scrolling

      const sections = document.querySelectorAll('.App-section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight * 0.75) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm a Software Engineer with 3 years of experience in Go, MERN stack, and AWS. I hold a Master's in Computer Applications.
        </p>
        <button className="cta-button">Explore More</button>
      </header>
      <main>
        <section className="App-section skills" data-section="skills">
          <h2>Skills</h2>
          <ul>
            <li>Golang</li>
            <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
            <li>AWS (Amazon Web Services)</li>
          </ul>
        </section>
        <section className="App-section projects" data-section="projects">
          <h2>Projects</h2>
          <ul>
            <li><strong>Project 1:</strong> Description of a Go-based project.</li>
            <li><strong>Project 2:</strong> Description of a MERN stack project.</li>
            <li><strong>Project 3:</strong> Description of an AWS-integrated project.</li>
          </ul>
        </section>
        <section className="App-section gallery" data-section="gallery">
          <h2>Gallery</h2>
          <div className="image-container">
            <img src="https://via.placeholder.com/150" alt="Placeholder 1" />
            <img src="https://via.placeholder.com/150" alt="Placeholder 2" />
            <img src="https://via.placeholder.com/150" alt="Placeholder 3" />
          </div>
        </section>
        <section className="App-section contact" data-section="contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></p>
          <p>GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">Your GitHub</a></p>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
      <div className="statue-container">
        <div className={`statue ${scrollDirection}`}>
          <div className="rope"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
