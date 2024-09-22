import React from 'react'
import { Link } from 'react-router-dom'
import { menuItemsData } from '../menuItemsData.js'
import DropdownDepth02 from './DropdownDepth02.jsx'

const DropdownDepth01 = () => {
    
    return (
        <ul className="depth01">
            {
                menuItemsData.map(( menu, index ) => {
                    return (
                        <li key={index} >
                            <Link to={menu.url} >
                                {menu.title} 
                            </Link>
                            <DropdownDepth02 submenus={menu.submenu} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default DropdownDepth01