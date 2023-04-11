import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [rrss, setRrss] = useState(null);

  return (
    <footer>
      <div className="rrss">
        <p className="info-rrss" style={{ display: rrss ? 'flex' : 'none' }}>
          {rrss}
        </p>
        <article className="contact">
          <a
            href="https://github.com/Graimi"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setRrss('Graimi')}
            onMouseLeave={() => setRrss(null)}
          >
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/github_qlykzr.png"
              alt="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/floreslujan/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setRrss('floreslujan')}
            onMouseLeave={() => setRrss(null)}
          >
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/linkedin_gbpe7u.png"
              alt="Linkedin"
            />
          </a>
          <a
            href="638560723"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setRrss('638560723')}
            onMouseLeave={() => setRrss(null)}
          >
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/telefono_smjgow.png"
              alt="Teléfono"
            />
          </a>
          <a
            href="jaimefloreslujan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setRrss('jaimefloreslujan@gmail.com')}
            onMouseLeave={() => setRrss(null)}
          >
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/email_bgpahe.png"
              alt="Email"
            />
          </a>
        </article>
      </div>
      <div className="circleDecoration" />
    </footer>
  );
}

export default Footer;
