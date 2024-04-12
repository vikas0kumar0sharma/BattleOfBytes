import React from 'react';
import './Footer.css'; // Import your CSS file

function Footer() {
  return (
    <footer className="dark-footer">
      <div className="container">
        <div className="social-media" style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          Follow us on :
          <a href="https://www.instagram.com/battle_of_bytes?igsh=MXMzNDlsaGVscmZ6cQ=="><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" /></a>
          <a href="https://www.linkedin.com/company/battle-of-bytes/"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" /></a>
          <a href="https://battleofbytes.techverse.ltd"><img src="./BOB_Logo.png" alt="Website" /></a>
        </div>
        <br />
        ©2024,Battle of Bytes
      </div>
    </footer>
  );
}

export default Footer;
