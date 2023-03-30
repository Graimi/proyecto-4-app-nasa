import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <article className="contact">
        <a href="https://github.com/Graimi" target="_blank" rel="noopener noreferrer">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/github_qlykzr.png"
            alt="Github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/floreslujan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/linkedin_gbpe7u.png"
            alt="Linkedin"
          />
        </a>
        <a href="638560723" target="_blank" rel="noopener noreferrer">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/telefono_smjgow.png"
            alt="Teléfono"
          />
        </a>
        <a href="jaimefloreslujan@gmail.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/email_bgpahe.png"
            alt="Email"
          />
        </a>
      </article>
      <span className="circleDecoration" />
    </footer>
  );
}

export default Footer;
