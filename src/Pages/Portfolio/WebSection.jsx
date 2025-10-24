import React from 'react'
import {websites} from "./WebLinksexport"

const WebSection = () => {
  return (
    <div>
        <p className="portfolio-subtext website-text">Websites</p>
    <div className="website-sample">
      {websites.map((website) => (
        <div className=' flex items-center justify-center' key={website.id}>
          <a target="_blank" href={website.link}>
            <img className='' src={website.imgUrl} alt="" />
            <p>{website.info}</p>
          </a>
        </div>
      ))}
    </div>
  </div>
  )
}

export default WebSection