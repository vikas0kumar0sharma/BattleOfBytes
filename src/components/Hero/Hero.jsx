import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">

        {/* left side */}
        <div className=" flexColStart hero-left">

          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2.5,
                type: "spring"
              }}
            >
              Battle of  <br />Bytes<br /> Auction Event
            </motion.h1>
          </div>

          {/* description */}
          <div className="flexColStart hero-des">
            <span>Bid to win at the Battle of Bytes auction event,</span>
            <span>where technology and competition collide in an </span>
            <span>electrifying atmosphere at BIT Mesra, Jaipur.</span>
          </div>

          <div className="flexCenter stats">

            <div className="flexColStart stat">
              <span>
                <CountUp start={0} end={132} duration={4} style={{ fontSize: '36px' }} />
                <span style={{ color: 'orange', fontSize: '36px' }}></span>
              </span>
              <span style={{ color: 'var(--secondary)', fontSize: 'small' }}>Participants</span>
            </div>

            <div className="flexColStart stat">
              <span>
                <CountUp start={0} end={12} duration={4} style={{ fontSize: '36px' }} />
                <span style={{ color: 'orange', fontSize: '36px' }}></span>
              </span>
              <span style={{ color: 'var(--secondary)', fontSize: 'small' }} >Teams</span>
            </div>

            <div className="flexColStart stat">
              <span>
                <CountUp start={0} end={3} duration={4} style={{ fontSize: '36px' }} />
                <span style={{ color: 'orange', fontSize: '36px' }}></span>
              </span>
              <span style={{ color: 'var(--secondary)', fontSize: 'small' }} >Winning Team</span>
            </div>

          </div>

        </div>

        {/* right side */}
        <div className="flexCenter hero-right img-container">
          <motion.div
            initial={{ x: "2rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2.5,
              type: "spring"
            }}
          >
            <img src='./BOB_Logo.png'></img>
          </motion.div>
        </div>
      </div>
    </div >
  )
}

export default Hero