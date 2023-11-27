import React from "react";
import GitHubButton from "react-github-btn";

const Navbar = () => (
  <nav>
    <h2>
      <a href="https://github.com/code2adebayo/screen-recorder-react">
        use-screen-recorder
      </a>
      <GitHubButton
        href="https://github.com/code2adebayo/screen-recorder-react"
        data-show-count="true"
        aria-label="Star code2adebayo/screen-recorder-react on GitHub"
      >
        Star
      </GitHubButton>
      <GitHubButton
        href="https://github.com/code2adebayo"
        data-show-count="true"
        aria-label="Follow @code2adebayo on GitHub"
      >
        Follow @code2adebayo
      </GitHubButton>
    </h2>
    <a href="https://shina-code.netlify.app">
      {/* <img src="https://ishanchhabra.com/logo.svg" /> */}
      More in portfolio
    </a>
  </nav>
);

export default Navbar;
