import React, {useState, useEffect} from 'react'
import './About.css'
import logo from '../assets/larklabs_white.png'
import gus from '../assets/gus.png'
import kali from '../assets/kali.png'
import metazooie from '../assets/metazooie.png'
import arkali from '../assets/arkali.png'
import digital_you from '../assets/digital_you.png'
import str3m from '../assets/str3m.png'
import bc from '../assets/benditocerrito_1.jpeg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

export const About = () => {
  // state for mouse position
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [kaliPosition, setKaliPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const mouseMove = (e) => {

      var testDiv = document.getElementById("img_kali");
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setKaliPosition({
        x: testDiv.offsetLeft,
        y: testDiv.offsetTop,
      })
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
  team: {
    height: 80,
    width: 80,
    background: 'transparent',
    border: '4px solid white',
    x: mousePosition.x - 40,
    y: mousePosition.y - 40,
  },
};

const kakaliEnter = () => {setCursorVariant('team'); setTextCursorVariant('')};
const textEnter = () => {setCursorVariant('text'); setTextCursorVariant('')};
const textLeave = () => {setCursorVariant("default"); setTextCursorVariant('')};
  return (
    <motion.div
        transition={{duration: 0.5, delay: 0.3}}
        initial={{opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%'}}
        animate={{opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%'}}
        exit={{opacity: 0, clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%'}}
        style={{background: 'white'}}
    >
      <motion.div
       className="cursor"
       variants={variants}
       animate={cursorVariant}
      >
        <p>{cursorTextVariant}</p>
      </motion.div>
        <div className="about_hero">
          <img onMouseEnter={textEnter} onMouseLeave={textLeave} src={logo} alt="Logo LarkLabs" />
        </div>
        <div className="about_whatis">
          <div className="about_whatis_col_left">
            <h2>"The epicenter of innovation in technology, design, and immersive experiences."</h2>
          </div>
          <div className="about_whatis_col_right">
            <p>Lark Labs Holdings is a technology fund that is focused on harnessing cutting-edge technology and innovative ventures to create a world of boundless possibilities. As a diversified holding company, Lark Labs invests in and operates a portfolio of companies across various industries, including Real Estate, Architecture, AI technology, and gaming. The executive team, led by Manuel Ramirez and Gustavo Garza, brings a wealth of expertise and experience to the table.</p>
            <p>Additionally, Lark Labs has a prominent advisory board made up of industry experts and entrepreneurs who provide strategic guidance and support. With a focus on digital innovation, Lark Labs is well positioned to identify and invest in disruptive technologies that have the potential to revolutionize various industries. As a technology fund, Lark Labs Holdings offers a unique opportunity for investors to participate in the growth of cutting-edge technology and innovative ventures across diverse markets.</p>
          </div>
        </div>
        <div className="about_team">
          <div className="about_team_div about_team_left">
            <img onMouseEnter={kakaliEnter} onMouseLeave={textLeave} id='img_kali' src={kali} alt="Kali" />
            <div className="about_team_text">
              <h3>Kali</h3>
              <p>Renowned architect with a portfolio of over +150 architectural projects, has effectively managed construction teams of over +100 personnel. Demonstrates a strong track record in developing, designing, constructing, and selling over 20 luxury residences with a total value over $15 million usd. Avid gamer with experience in building custom gaming servers that handle thousands of users traffic</p>
            </div>
          </div>
          <div className="about_team_div about_team_right">
            <div className="about_team_text">
              <h3>Gus</h3>
              <p>Experienced entrepreneur and international business consultant with a proven track record in growing startups, which contributed to the success of Parrot Software's journey, which led to raising over $12 million in 2022 and consistently showcasing growth in clients and revenue.</p>
            </div>
            <img onMouseEnter={kakaliEnter} onMouseLeave={textLeave} id='img_gus' src={gus} alt="Gus" />
          </div>
        </div>
        <div className="about_portfolio">
          <div className="about_portfolio_div">
            <Splide 
              options={{
                direction: 'ltr',
                type: 'loop',
                perPage: 3,
                autoHeight: true,
                gap: 25,
                drag: true,
                arrows: false,
                pagination: false,
                autoScroll: {
                  speed: 1,
                  pauseOnHover: true,
                },
                breakpoints: {
                    650: {
                      autoScroll: {
                        speed: 0.5
                      },
                        perPage: 2,
                    }
                }
              }}
              extensions={{AutoScroll}}
              aria-label="Gallery"
            >
              <SplideSlide onMouseEnter={textEnter} onMouseLeave={textLeave} style={{position: 'relative'}}>
                <Link to='https://metazooie.com' target='_blank'>
                <div className="about_portfolio_overlay">
                  <p><b>Metazooie</b></p>
                  <p>Video game developer company specialized in immersive graphically advanced gaming experiences that run on any device.</p>
                </div>
                <img className='about_gallery_img' src={metazooie} alt='Metazooie'></img>
                </Link>
              </SplideSlide>
              <SplideSlide onMouseEnter={textEnter} onMouseLeave={textLeave} style={{position: 'relative'}}>
                <Link to='https://digitalyou.ai' target='_blank'>
                <div className="about_portfolio_overlay">
                  <p><b>Digital You</b></p>
                  <p>Innovative AI-powered chatbot platform enabling natural and intuitive interactions, like asking for recipe instructions or even requesting a portrait photo that resembles the user.</p>
                </div>
                <img className='about_gallery_img' src={digital_you} alt='Metazooie'></img>
                </Link>
              </SplideSlide>
              <SplideSlide onMouseEnter={textEnter} onMouseLeave={textLeave} style={{position: 'relative'}}>
                <Link to='https://arkali.studio' target='_blank'>
                <div className="about_portfolio_overlay">
                  <p><b>Arkali</b></p>
                  <p>Technology-driven architectural firm leveraging AI and 3D technologies to optimize execution and visualization throughout the design and construction process.</p>
                </div>
                <img className='about_gallery_img' src={arkali} alt='Metazooie'></img>
                </Link>
              </SplideSlide>
              <SplideSlide onMouseEnter={textEnter} onMouseLeave={textLeave} style={{position: 'relative'}}>
                <Link to='https://str3m.gg' target='_blank'>
                <div className="about_portfolio_overlay">
                  <p><b>Str3m.gg</b></p>
                  <p>Cloud gaming platform for digital creators with a focus on short-format video game experiences.</p>
                </div>
                <img className='about_gallery_img' src={str3m} alt='Metazooie'></img>
                </Link>
              </SplideSlide>
              <SplideSlide onMouseEnter={textEnter} onMouseLeave={textLeave} style={{position: 'relative'}}>
                <Link to='https://arkali.studio/single.php?proyecto=benditocerrito' target='_blank'>
                <div className="about_portfolio_overlay">
                  <p><b>Lark Labs Real Estate</b></p>
                  <p>Premier development of high-end beach residences and luxury villas.</p>
                </div>
                <img className='about_gallery_img' src={bc} alt='Metazooie'></img>
                </Link>
              </SplideSlide>
            </Splide>
          </div>
        </div>
        <div className="about_footer">
        <p className='about_footer_left'></p>
        <div className="about_footer_right">
          {/* <p>Home</p> */}
          <Link to='/'><p>Home</p></Link>
        </div>
      </div>
    </motion.div>
  )
}
