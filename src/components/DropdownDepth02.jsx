import React from 'react'
import { Link } from 'react-router-dom'
import DropdownDepth03 from './DropdownDepth03'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const DropdownDepth02 = ({ submenus }) => {

    return (
        <ul className="depth02">
            { submenus ? 
                        submenus.map(( submenu, index ) => {
                            return (
                                <li key={index} >
                                    <Link to={submenu.url} >
                                        {submenu.title} {submenu.submenu ? <FontAwesomeIcon icon={faChevronRight} /> : null }
                                    </Link>
                                    <DropdownDepth03 subsubmenus={submenu.submenu} />
                                </li>
                            );
                        })
                        : null
            }
        </ul>
    )
}

export default DropdownDepth02