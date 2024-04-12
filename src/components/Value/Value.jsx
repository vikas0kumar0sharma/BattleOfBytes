import React, { useState } from 'react'
import {
  Accordion, AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'

import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import accordian from '../../utils/accordion.jsx'
function Value() {
  return (
    <div className="v-wrapper" style={{ paddingTop: '3rem' }}>
      <div className="flexStart v-container">

        {/* left side */}

        <div className="v-left">
          <img src="./hero-image.jpg" alt="" className="img-container" />
        </div>

        {/* right side */}

        <div className="flexColStart v-right">

          <span className='orangeText'>Battle Of Bytes <br/> <hr style={{width:'75%',margin:'auto'}} /> </span>
          <span className='primaryText'>Auction Insights</span>
          <span style={{ color: 'grey' }}>Prepare for an immersive journey into the heart of the Battle of Bytes auction. 
            <br />
            Below, discover essential details about the event, including its format, purpose, and key participants.
          </span>

          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {
              accordian.map((it, index) => {

                const [className, setClassName] = useState(null)

                return (
                  <AccordionItem className={`accordionItem ${className}`} key={index} uuid={index}>

                    <AccordionItemHeading>

                      <AccordionItemButton className='flexStart accordionButton'>

                        <AccordionItemState>
                          {({ expanded }) => expanded ? setClassName('expanded') : setClassName('collapsed')}
                        </AccordionItemState>

                        <div className='flexCenter icon'>{it.icon}</div>
                        <span className='primaryText'>{it.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20}></MdOutlineArrowDropDown>
                        </div>
                      </AccordionItemButton>

                    </AccordionItemHeading>

                    <AccordionItemPanel className='secondaryText' style={{padding:'0.5rem'}}>{it.detail}</AccordionItemPanel>


                  </AccordionItem>
                )
              })
            }
          </Accordion>

        </div>

      </div>
    </div>
  )
}

export default Value