import React from 'react';
import './Footer.css';

// Todo el código estaba preparado para hacer otro estilo de footer
// pero no he sido capaz de darle la animación deseada
// Lo dejo por si lo vuelvo a intentar
function Footer() {
  // const [rrssDetails, setRrssDetails] = useState(null);
  return (
    <footer className="rrss">
      {/* <div className="rrss">
        <p className="rrss-details" style={{ display: rrssDetails ? 'flex' : 'none' }}>
          {rrssDetails}
        </p> */}
      <article className="rrss-logos">
        <a
          href="https://github.com/Graimi"
          target="_blank"
          rel="noopener noreferrer"
          // onMouseEnter={() => setRrssDetails('Graimi')}
          // onMouseLeave={() => setRrssDetails(null)}
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
          // onMouseEnter={() => setRrssDetails('floreslujan')}
          // onMouseLeave={() => setRrssDetails(null)}
        >
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/linkedin_gbpe7u.png"
            alt="Linkedin"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=34638560723"
          target="_blank"
          rel="noopener noreferrer"
          // onMouseEnter={() => setRrssDetails('638560723')}
          // onMouseLeave={() => setRrssDetails(null)}
        >
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1681288245/NASA/whatsapp_s2iqjh.png"
            alt="Teléfono"
          />
        </a>
        <a
          href="mailto:jaimefloreslujan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          // onMouseEnter={() => setRrssDetails('jaimefloreslujan@gmail.com')}
          // onMouseLeave={() => setRrssDetails(null)}
        >
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/email_bgpahe.png"
            alt="Email"
          />
        </a>
      </article>
      {/* </div> */}
      <div className="circleDecoration" />
    </footer>
  );
}

export default Footer;
