import logo from './logo.svg';
import './App.css';
import profileImage from './arsh.jpeg';
import favicon from './favicon.png';
import React from 'react';
import './styles.css';
import { Link, animateScroll as scroll } from "react-scroll";

const App = () => {
  return (
    <div>
    {/* Header */}
    <header>
      <h1>Arsh Jain</h1>
      <nav>
        <Link to="about" smooth={true}>About</Link>
        <Link to="education" smooth={true}>Education</Link>
        <Link to="employment" smooth={true}>Employment</Link>
        <Link to="projects" smooth={true}>Projects</Link>
        <Link to="skills" smooth={true}>Skills</Link>
        <Link to="extracurriculars" smooth={true}>Extracurriculars</Link>
      </nav>
    </header>

    {/* About Me */}
    <section id="about">
      <h2>About Me</h2>
      <img src={profileImage} className="profile-image"/>
      <p className="introduction">
          Hello! I'm Arsh, a student at Rice University with a passion for computer science and economics. 
          I enjoy tackling complex problems and am always eager to learn new skills. 
          My main languages are Python and Javascript, but I am comfortable in many different other programming languages and frameworks.
          If you want to learn more about me, feel free to look at this website!
        </p>
    </section>

    {/* Education */}
    <section id="education">
      <h2>Education</h2>
      <p>Rice University, College of Engineering, Houston, TX</p>
      <p>Greenwich High School, Greenwich, CT</p>
    </section>

    {/* Employment */}
    <section id="employment">
        <h2>Employment</h2>
        <p>Rice University, COMP 140 Teaching Assistant</p>
        <p>Stoneview Technologies, Intern</p>
        <p>Greenwich Public Schools, Education IT Intern</p>
        <p>Zaniac, Coding and Math Instructor</p>
    </section>

    {/* Projects */}
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <a href="https://arshjain08.github.io/FlowBreak/" className="project-link">
        <img src={favicon} alt="FlowBreak" className="project-image"/>
        <span>Flowbreak</span>
        </a>
        <p className="project-description">
          Developed a work management software using JavaScript, Bootstrap, HTML, and CSS. 
          The software increases efficiency by implementing the Pomodoro Method and utilizing a system that automatically closes out tabs that could cause distraction.
        </p>
      </div>

      <div className="project">
        <a href="https://github.com/Real-Human-1000/datathon2023" className="project-link">
        <img src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/264/440/datas/large.png" alt="Rice Datathon" className="project-image"/>
        </a>
        <span>Rice Datathon</span>

        <p className="project-description">
          Worked as a team to model the US states that Chevron should invest in for optimal renewable energy development. 
          Utilized Python, Matplotlib, Pandas, and various regression models.
        </p>
      </div>

    </section>

    {/* Skills */}
    <section id="skills">
      <h2>Specialized Skills</h2>
      <p>Programming Languages: Python, JavaScript, Java, HTML, CSS, C++, C, Lua</p>
      <p>Programs: VS Code, IntelliJ, PyCharm, GitHub, LaTeX, Ubuntu, Linux, Excel, Word, PowerPoint, Google Drive</p>
    </section>

    {/* Extracurriculars */}
    <section id="extracurriculars">
      <h2>Extracurricular Involvement</h2>
      <p>Rice Eclipse, Auto-Recovery Team Member</p>
      <p>Rice CS Club, Member</p>
      <p>Rice Data Science Club, Member</p>
    </section>

    {/* Footer */}
    <footer>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/arsh-jain-907b0893/">LinkedIn Profile</a></p>
        <p>Github: <a href="https://github.com/arshjain08">GitHub Profile</a></p>
        <p>Phone: (203)-940-1516  Email: aj76@rice.edu</p>
      </footer>
  </div>

  );
};

export default App;

