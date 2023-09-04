function Navigation() {
  return (
    <div className="navigation max-width">
      <div className="navigation__block-one">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="26"
          viewBox="0 0 11 26"
          fill="none"
          className="logo"
        >
          <path
            d="M0 14.2452H8.95785C10.0624 14.2452 10.9579 15.1406 10.9579 16.2452V23.2031C10.9579 24.3076 10.0624 25.2031 8.95785 25.2031H2C0.89543 25.2031 0 24.3076 0 23.2031V14.2452Z"
            fill="#C86767"
          />
          <path
            d="M0 2C0 0.89543 0.895431 0 2 0H8.95785C10.0624 0 10.9579 0.895431 10.9579 2V10.9579H2C0.89543 10.9579 0 10.0624 0 8.95785V2Z"
            fill="#C6A2A2"
          />
        </svg>
        <nav>
          <a className="navigation__link" href="#">
            OUR MISSION
          </a>
          <a className="navigation__link" href="#">
            ROADMAP
          </a>
          <a className="navigation__link" href="#">
            CONTACT US
          </a>
        </nav>
      </div>
      <div className="navigation__block-two">
        <button>JOIN THE BETA</button>
      </div>
    </div>
  );
}

export default Navigation;
