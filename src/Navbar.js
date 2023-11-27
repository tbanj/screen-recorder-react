import React from "react";
import GitHubButton from "react-github-btn";

const Navbar = () => (
  <nav>
    <h2>
      <a href="https://github.com/olashubomicode/screen-recorder-react">
        use-screen-recorder
      </a>
      <GitHubButton
        href="https://github.com/olashubomicode/screen-recorder-react"
        data-show-count="true"
        aria-label="Star olashubomicode/screen-recorder-react on GitHub"
      >
        Star
      </GitHubButton>
      <GitHubButton
        href="https://github.com/olashubomicode"
        data-show-count="true"
        aria-label="Follow @olashubomicode on GitHub"
      >
        Follow @olashubomicode
      </GitHubButton>
    </h2>
    <a href="https://azeez-coder.netlify.app">More in portfolio</a>
  </nav>
);

export default Navbar;
