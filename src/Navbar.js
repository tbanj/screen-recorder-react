import React from "react";
import GitHubButton from "react-github-btn";

const Navbar = () => (
  <nav>
    <h2>
      <a href="https://github.com/tbanj/screen-recorder-react">
        use-screen-recorder
      </a>
      <GitHubButton
        href="https://github.com/tbanj/screen-recorder-react"
        data-show-count="true"
        aria-label="Star tbanj/screen-recorder-react on GitHub"
      >
        Star
      </GitHubButton>
      <GitHubButton
        href="https://github.com/tbanj"
        data-show-count="true"
        aria-label="Follow @tbanj on GitHub"
      >
        Follow @tbanj
      </GitHubButton>
    </h2>
    <a href="https://shina-code.netlify.app">More in portfolio</a>
  </nav>
);

export default Navbar;
