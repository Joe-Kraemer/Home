
const Navigation = props => {
    const { menus, visibleSection, headerRef } = props
    return (
        <header ref={headerRef}>

            <nav role="navigation" id="nav-main" className="navMenu">
                <ul className="navMenu">
                    {
                        menus.map((menuItem, index)=>(
                            <li
                                key={index}
                                className="navItem"
                                >
                                    <a className={visibleSection === menuItem ? "active" : "false"}
                                        href={`#${menuItem}`}>{menuItem}</a>
                                               <div className="dot"></div>

                                </li>
                                
                        ))
                    }
                </ul>
                <div className="dot"></div>
            </nav>
        </header>
    )
}

export default Navigation