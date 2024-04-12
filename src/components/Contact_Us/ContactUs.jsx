import React from 'react'
import './ContactUs.css'
import QueryForm from '../Query_form/QueryForm'
function ContactUs() {
  return (
    <div className="r-wrapper" id='contact-us'>
      <div className="paddings innerWidth r-container">

        <div className="r-head flexColStart">
          <span className='orangeText'>Battle Of Bytes <br /> <hr style={{ width: '75%', margin: 'auto' }} /> </span>
          <span className='primaryText'>Contact Us</span>
        </div>

        <div style={{display:"flex",flexDirection:"row"}}>
          <QueryForm />

          <iframe class="map" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Bit Mesra malvia nagar jaipur&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" allowfullscreen="" loading="lazy"></iframe>
        </div>

      </div>
    </div>
  )
}

export default ContactUs