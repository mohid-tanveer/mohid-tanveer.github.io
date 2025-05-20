import React, { useEffect, useState } from "react";
import "./topnav.css";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <div className={`topnav ${hidden ? "hidden" : ""}`}>
      <div className="grid-container25">
        <div className="grid-item25l">
          <small className="consistency">
            <Link to="/">HOME</Link>
          </small>
        </div>
        <div className="grid-item25l">
          <small className="consistency">
            <Link to="/work" className="workk">
              WORK
            </Link>
          </small>
        </div>
        <div className="grid-item25r">
          <small className="consistency">
            <Link to="/personal" className="personall">
              PERSONAL
            </Link>
          </small>
        </div>
        <div className="grid-item25r">
          <small className="consistency">
            <a
              href="https://github.com/mohid-tanveer"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
            &nbsp;&nbsp;&nbsp;
          </small>
          <small className="consistency">
            <a
              href="https://www.linkedin.com/in/mohidtanveer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDin
            </a>
          </small>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Topnav;
