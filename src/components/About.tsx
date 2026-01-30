// src/components/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section className="about-section">
      <h1 className="about-title">About Me</h1>

      <p className="about-description">
        Hi, I'm <strong>Jatin Khandal</strong>, a B.Tech student specializing in
        <strong> Artificial Intelligence & Data Science</strong>.
        I have hands-on experience in Machine Learning, Computer Vision,
        and cloud-based AI solutions.
      </p>

      <p>
        My core interests include building real-world AI products,
        deploying ML models, and solving impactful problems using data.
      </p>
    </section>
  );
};

export default About;
