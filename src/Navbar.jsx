import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEthereum, faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons"
function Navbar() {
  return (
    <div>
        <nav className='navbar p-2'>
            <h2 className="text-2xl text-white">
              <FontAwesomeIcon icon={faEthereum}/>
            </h2>
            <h2 className='text-2xl text-white ml-2'>NFTFinder</h2>
            <div className="flex ml-auto text-white text-xl lg:mr-3 py-2 px-6 ">
            <a href="https://github.com/adarshswaminath">
              <FontAwesomeIcon className='ml-4 hover:text-black' icon={faGithub}/>
            </a>
            <a href="https://twitter.com/adarshs002">
              <FontAwesomeIcon className='ml-4 hover:text-blue-400' icon={faTwitter}/>
            </a>
            <a href="https://www.linkedin.com/in/adarsh-s-09935b240">
              <FontAwesomeIcon className='ml-4 hover:text-blue-300' icon={faLinkedin}/>
            </a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;