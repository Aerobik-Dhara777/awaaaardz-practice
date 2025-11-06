import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollingAnimation = () => {
  const mainRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // GSAP Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "75% 50%",
        end: "100% 50%",
        scrub: 5,
        duration: 1,
        pin: true,
      }
    });

    tl.to(imgRef.current, {
      width: "100vw",
      height: "100vh",
    });

    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef} id="main">
      <nav className="nav">
        <a href="/">( MENU )</a>
        <a id="our" href="/">Our Revolution</a>
        <a href="/">( WORK* )</a>
      </nav>

      <div className="content">
        <div className="dots-div">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <h1>
          Till now, energy drinks have been like <br />
          a bad cologne, overwhelming and <br />
          hard to get away from. Time for a <br />
          change. Time to remove bad energy.
        </h1>
        <div className="dots-div">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      <div className="img-div">
        <div ref={imgRef} className="img"></div>
      </div>
    </div>
  );
};

export default ScrollingAnimation;