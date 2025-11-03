import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // GSAP Timeline Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        // markers: true,
        start: "38% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true
      }
    });

    tl.to(".text", {
      top: "-7%",
    }, 'a')
    .to("#card-one", {
      top: "35%",
    }, 'a')
    .to("#card-two", {
      top: "130%"
    }, 'a')
    .to("#card-two", {
      top: "42%"
    }, 'b')
    .to("#card-one", {
      width: "65%",
      height: "65vh"
    }, 'b')
    .to("#card-three", {
      top: "130%"
    }, 'b')
    .to("#card-three", {
      top: "50%"
    }, 'c')
    .to("#card-two", {
      width: "70%",
      height: "70vh"
    }, 'c');

    // Cleanup function to kill ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="main">
      <div className="text">
        <div className="text-img"></div>
        <h1>always learn new things <br />Soumadip Dhara</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut illum ex eveniet 
          fugiat facere, rerum placeat. Earum, consequuntur accusantium dolore totam at optio 
          ad obcaecati, esse, voluptas aut ipsum. Cupiditate, repudiandae hic dolore delectus 
          iusto dolores?
        </p>
      </div>

      <div className="cards" id="card-one"></div>
      <div className="cards" id="card-two"></div>
      <div className="cards" id="card-three"></div>
    </div>
  );
}

export default App;