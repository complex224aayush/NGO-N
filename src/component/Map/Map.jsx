import React from 'react'
import "./Map.css"

const Map = () => {
  return (
    <div className='containerrrr'>
      <h1 className='mop'>MAP LOCATION</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28998.456990854276!2d84.96459637134403!3d24.69915619419751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32c5fbc12ed3d%3A0x9bbc5dccc57d96e!2sBodh%20Gaya%2C%20Bihar!5e0!3m2!1sen!2sin!4v1705984093128!5m2!1sen!2sin"
       width="525"
        height="450"
         style={{border:0}}
          allowfullscreen=""
           loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map
