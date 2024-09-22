import React from 'react'
import  { Link } from 'react-router-dom'

const DropdownDepth03 = ({ subsubmenus }) => {

    return (
        <ul className="depth03">
            { subsubmenus ? 
                            subsubmenus.map(( subsubmenu, index ) => {
                                return (
                                <li key={index} >
                                    <Link to={subsubmenu.url} >{subsubmenu.title}</Link>
                                </li>
                                )
                            })
                            : null
            }
        </ul>
    )

}

export default DropdownDepth03