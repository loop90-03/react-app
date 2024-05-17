import '../css/gasp01.css';
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Gsap01 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const box1 = document.querySelector("#section1 .parallax__item__img");
    const box2 = document.querySelector("#section2 .parallax__item__img");
    const box3 = document.querySelector("#section3 .parallax__item__img");
    const box4 = document.querySelector("#section4 .parallax__item__img");
    const box5 = document.querySelector("#section5 .parallax__item__img");
    const box6 = document.querySelector("#section6 .parallax__item__img");
    const box7 = document.querySelector("#section7 .parallax__item__img");
    const box8 = document.querySelector("#section8 .parallax__item__img");

    gsap.to(box1, {
      duration: 2,
      x: 500,
      borderRadius: 100,
      rotation: 360
    });

    gsap.to(box2, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: 100,
      scrollTrigger: {
        trigger: box2
      }
    });

    gsap.to(box3, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: 100,
      scrollTrigger: {
        trigger: box3,
        toggleActions: "play none reverse none"
      }
    });

    gsap.to(box4, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: 100,

      scrollTrigger: {
        trigger: box4,
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none reverse none",
        markers: false
      }
    });

    gsap.to(box5, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: 100,

      scrollTrigger: {
        trigger: box5,
        start: "top 50%",
        end: "bottom 20%",
        scrub: true, //true, 1, 2...
        markers: false
      }
    });

    gsap.to(box6, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: 100,

      scrollTrigger: {
        trigger: box6,
        start: "top 50%",
        end: "bottom 200px",
        pin: true,
        scrub: true, 
        markers: false
      }
    });

    gsap.to(box7, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: 100,

      scrollTrigger: {
        trigger: box7,
        start: "top center",
        end: "bottom top",
        scrub: true, 
        toggleClass: "active",
        markers: false,
        id: "box7"
      }
    });

    gsap.to(box8, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: 100,

      scrollTrigger: {
        trigger: box8,
        start: "top center",
        end: "bottom 20%",
        scrub: true, 
        markers: true,
        // onEnter: () => {console.log("onEnter")},
        // onLeave: () => {console.log("onLeave")},
        // onEnterBack: () => {console.log("onEnterBack")},
        // onLeaveBack: () => {console.log("onLeaveBack")},
        onUpdate : (self) => {console.log("onUpdate", self.progress.toFixed(3))},
        onToggle : (self) => {console.log("onToggle", self.isActive)},
      }
    });

  },[]);


  return (
    <main id='parallax__cont'>
      <section id="section1" className="parallax__item">
        <span className="parallax__item__num">01</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section2" className="parallax__item">
        <span className="parallax__item__num">02</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section3" className="parallax__item">
        <span className="parallax__item__num">03</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section4" className="parallax__item">
        <span className="parallax__item__num">04</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section5" className="parallax__item">
        <span className="parallax__item__num">05</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section6" className="parallax__item">
        <span className="parallax__item__num">06</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section7" className="parallax__item">
        <span className="parallax__item__num">07</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section8" className="parallax__item">
        <span className="parallax__item__num">08</span>
        <div className="parallax__item__img"></div>
      </section>

      <section id="section9" className="parallax__item">
        <span className="parallax__item__num">09</span>
        <div className="parallax__item__img"></div>
      </section>
    </main>
  )
}

export default Gsap01;