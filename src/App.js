import './App.css';
import img from './imgs/Vaseline.JPG'
import { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap';

function App() {

  const hero = useRef()
  const slider = useRef()
  const logo = useRef()
  const hamburger = useRef()
  const headline = useRef()

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(hero.current, 1, { height: '0%' }, { height: '100%', ease: Power2.easeInOut })
      .fromTo(hero.current, 1.2, { width: '100%' }, { width: '80%', ease: Power2.easeInOut })
      .fromTo(slider.current, 1.2, { x: '-100%' }, { x: '0%', ease: Power2.easeInOut }, '-=1.2')
      .fromTo(logo.current, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5')
      .fromTo(hamburger.current, 0.5, { opacity: 0, x: -30 }, { opacity: 1, x: 0 }, '-=0.5')
  })

  return (
    <div className="App">
      <header>
        <nav>
          <h3 id="logo" ref={logo}>Vaseline Ambassador</h3>
          <h3 className="hamburger" ref={hamburger}>Lyly Nguyen</h3>
        </nav>
        <section>
          <div className="hero" ref={hero}>
            <img src={img} alt="Vaseline" />
            <h1 className="headline" ref={headline}>Big Dream</h1>
          </div>
        </section>
      </header>

      <div className="slider" ref={slider}></div>
    </div>
  );
}

export default App;
