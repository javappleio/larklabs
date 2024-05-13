import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/larklabs_svg.svg'
import { Link } from 'react-router-dom'
import '../App.css'

function Home() {

  const [loading, setLoading] = useState(true)

  // state for mouse position
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  // Set cursor variant to change color on hover text
const [cursorVariant, setCursorVariant] = useState("default");
const [cursorTextVariant, setTextCursorVariant] = useState("");

// Variant animation
const variants = {

// default animation (applies onMouseLeave)
  default: {
    x: mousePosition.x - 15,
    y: mousePosition.y - 15,
  },

// text animation (applies onMouseEnter) 
  text: {
    height: 150,
    width: 150,
    x: mousePosition.x - 75,
    y: mousePosition.y - 75,
  },

  // text animation (applies onMouseEnter) 
  logo: {
    height: 150,
    width: 150,
    x: mousePosition.x - 75,
    y: mousePosition.y - 180,
  },

  // text animation (applies onMouseEnter) 
  social: {
    height: 100,
    width: 100,
    x: mousePosition.x - 50,
    y: mousePosition.y + 30,
  },
};

// function for textLeave and textEnter
const textEnterMetazooie = () => {setCursorVariant('logo'); setTextCursorVariant('Gaming Studio')};
const textEnterArkali = () => {setCursorVariant('logo'); setTextCursorVariant('Architecture Firm')};
const textEnterDY = () => {setCursorVariant('logo'); setTextCursorVariant('AI Development')};
const textEnterStr3m = () => {setCursorVariant('logo'); setTextCursorVariant('Short-format gaming')};
const textEnterRE = () => {setCursorVariant('logo'); setTextCursorVariant('Bendito Cerrito')};
const textEnterInstagram = () => {setCursorVariant('social'); setTextCursorVariant('Instagram')};
const textEnterLinkedIn = () => {setCursorVariant('social'); setTextCursorVariant('Linked In')};
const textEnterReachOut = () => {setCursorVariant('social'); setTextCursorVariant('Contact Us')};
const textEnter = () => {setCursorVariant('text'); setTextCursorVariant('')};
const textLeave = () => {setCursorVariant("default"); setTextCursorVariant('')};


  return (
    <motion.div
      transition={{duration: 0.5, delay: 0.3}}
      initial={{opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%'}}
      animate={{opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%'}}
      exit={{opacity: 0, clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%'}}
      className="hero"
    >
      {loading ? <div className='hero_loader'>
      <svg width="205" height="540" viewBox="0 0 205 540" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="svg_1">
          <path d="M205 177.445C205 118.083 186.234 71.007 147.185 39.9578C113.121 12.8723 68.2765 1.8122 19.7565 0.00999081C11.5777 -0.293801 4.93974 6.37038 4.93974 14.549V54.0391C4.93974 62.2177 11.5886 68.8031 19.7646 69.1752C58.8863 70.9558 86.3713 79.9184 104.125 94.0352C122.501 108.646 135.843 133.145 135.843 177.445V367.491C135.843 375.67 142.478 382.3 150.663 382.3H190.181C198.365 382.3 205 375.67 205 367.491V177.445Z" fill="white"/>
        </g>
        <g id ="svg_2">
          <path d="M0 362.555C-5.19324e-06 421.917 18.7659 468.993 57.8151 500.042C91.8794 527.128 136.723 538.188 185.243 539.99C193.422 540.294 200.06 533.63 200.06 525.451V485.961C200.06 477.782 193.411 471.197 185.235 470.825C146.114 469.044 118.629 460.082 100.875 445.965C82.4992 431.354 69.1566 406.855 69.1566 362.555L69.1566 172.509C69.1566 164.33 62.5218 157.7 54.3374 157.7H14.8193C6.63484 157.7 1.73417e-05 164.33 1.66262e-05 172.509L0 362.555Z" fill="white"/>
        </g>
      </svg>

      </div> : ''}
      <motion.div
       className="cursor"
       variants={variants}
       animate={cursorVariant}
      >
        <p>{cursorTextVariant}</p>
      </motion.div>
      <div className="cursor_movil"></div>
      <div className="hero_top">
        <div className="hero_top_left">
          <Link to='https://www.instagram.com/lark.labs/?hl=es' target='_blank'><p className='hero_p' onMouseEnter={textEnterInstagram} onMouseLeave={textLeave}>/instagram</p></Link>
          {/* <p className='hero_p' onMouseEnter={textEnterLinkedIn} onMouseLeave={textLeave}>/linkedin</p> */}
        </div>
        <Link to='https://larklabs.ventures/contact/index.php' target='_blank'>
          <p className='hero_top_right hero_p' onMouseEnter={textEnterReachOut} onMouseLeave={textLeave}>/reach_out</p>
        </Link>
      </div>
      <img onMouseEnter={textEnter} onMouseLeave={textLeave} src={logo} alt="Logo" className='hero_logo' />
      <div className="hero_bottom">
        <Link to='https://metazooie.com' target='_blank'><p className='hero_p' onMouseEnter={textEnterMetazooie} onMouseLeave={textLeave}>/metazooie</p></Link>
        <Link to='https://arkali.studio' target='_blank'><p className='hero_p' onMouseEnter={textEnterArkali} onMouseLeave={textLeave}>/arkali</p></Link>
        <Link to='https://digitalyou.ai' target='_blank'><p className='hero_p' onMouseEnter={textEnterDY} onMouseLeave={textLeave}>/digital_you</p></Link>
        <Link to='https://str3m.gg' target='_blank'><p className='hero_p' onMouseEnter={textEnterStr3m} onMouseLeave={textLeave}>/str3m.gg</p></Link>
        <Link to='https://arkali.studio/single.php?proyecto=benditocerrito' target='_blank'><p className='hero_p' onMouseEnter={textEnterRE} onMouseLeave={textLeave}>/real_estate</p></Link>
      </div>
      <div className="hero_footer">
        <p className='hero_footer_left'></p>
        <div className="hero_footer_right">
          {/* <p>Home</p> */}
          <Link to='/about'><p>About</p></Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
