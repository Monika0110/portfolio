

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
    faGithub,
    faTwitter,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
  return (
    <div class="social-container">
      {/* <h3>Social Follow</h3> */}
      <a href="https://github.com/Monika0110"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="mailto:monikasarswat01@gmail.com"
        className="email social">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      <a href="https://twitter.com/MonikaSarswat2" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/monika-sarswat-6a6b871b8/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
}