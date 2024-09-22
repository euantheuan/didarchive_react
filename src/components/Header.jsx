import React from 'react'
import { Link } from 'react-router-dom'
import '../css/header_footer.css'
import DropdownDepth01 from './DropdownDepth01.jsx'

const Header = () => {

    
    return (
        <div className='header_component'>
            <header>
                <div className="header">
                    <h1><Link to='/'>DID-archive</Link></h1>
                    <Link to='/'>Contact</Link>
                    <div className="gnb_area">
                        <DropdownDepth01 />
                    </div>
                </div>
                <div className="gnb_bg"></div>
            </header>
        <div className="bgbg"></div>
        </div>
    )
}

export default Header