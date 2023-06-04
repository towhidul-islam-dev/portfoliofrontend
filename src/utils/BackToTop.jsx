import React from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import "../style/BackToTop.css";
import { Link } from 'react-router-dom';

const BackToTop = () => {
    
  return (
    <div className='backToTop'>
        <Link to="introSection">
            <FaArrowAltCircleUp className='topBtn' />
        </Link>
    </div>
  )
}

export default BackToTop