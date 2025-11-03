import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({scrollTrigger: {
    trigger :"#main",
    markers: true,
    start : "50% 50%",
    end: "100% 50%",
    scrub: 2,
    pin:true
}});

tl
.to("#top",{
    top:"-50%"
},'a')
.to("#bottom",{
    bottom:"-50%"
},'a')
.to("#top-h1",{
  y:"21%"
},'a')
.to("#bottom-h1",{
  y:"-17%"
},'a')
