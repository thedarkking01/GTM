// import React, { useRef } from 'react';
// import Logo from './Logo';
// import styles from './Navbar.module.css';
// import { NavLink } from 'react-router-dom';
// import { FaBars, FaTimes } from "react-icons/fa";

// const NavbarComponent = () => {

//     const navRef = useRef();

//     const showNavbar = () => {
//         navRef.current.classList.toggle(
//             styles["responsive_nav"]
//         );
//     };

//     return (
//         <>
//             <nav className={styles['main-container']}>
//                 <Logo />
//                 <div ref={navRef} className={styles['menu-link']}>
//                     <ul>
//                         <li>
//                             <NavLink to='/home' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Home</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to='/service' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Service</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to='/products' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Products</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to='/team' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Team</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to='/blogs' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Blogs</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to='/carrier' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Carrier</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to='/director' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Director</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to='/aboutus' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>About us</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to='/' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Contact Us</NavLink>
//                         </li>
//                     </ul>
//                     <button
//                         className={`${styles["nav-btn"]} ${styles["nav-close-btn"]}`}
//                         onClick={showNavbar}>
//                         <FaTimes />
//                     </button>
//                 </div>
//                 <button
//                     className={styles["nav-btn"]}
//                     onClick={showNavbar}>
//                     <FaBars />
//                 </button>
//             </nav>
//         </>
//     );
// };

// export default NavbarComponent


import React, { useRef, useState } from 'react';
import Logo from './Logo';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarComponent = () => {
    const navRef = useRef();
    const dropdownRef = useRef();
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        calculateDropdownPosition();
    };

    const hideDropdown = () => {
        setShowDropdown(false);
    };

    const calculateDropdownPosition = () => {
        if (dropdownRef.current) {
            const navRect = navRef.current.getBoundingClientRect();
            dropdownRef.current.style.top = `${navRect.bottom}px`;
            dropdownRef.current.style.left = `${navRect.left}px`;
        }
    };

    return (
        <nav className={styles['main-container']}>
            <Logo />
            <div ref={navRef} className={styles['menu-link']}>
                <ul>
                    <li>
                        <NavLink to='/home' activeClassName={styles["gradient"]} className={styles["navlinks"]} >Home</NavLink>
                    </li>
                    <li className={styles['dropdown-container']}>
                        <span className={styles['navlinks']} onClick={toggleDropdown} style={{position:'relative'}}>Service</span>
                        {showDropdown && (
                            <div ref={dropdownRef} className={styles['dropdown-menu']} >
                                <NavLink to='/service1' className={styles["navlinks"]} onClick={hideDropdown}>Service 1</NavLink><br/>
                                <NavLink to='/service2' className={styles["navlinks"]} onClick={hideDropdown}>Service 2</NavLink><br/>
                                <NavLink to='/service3' className={styles["navlinks"]} onClick={hideDropdown}>Service 3</NavLink>
                                
                            </div>
                        )}
                    </li>
                    <li>
                        <NavLink to='/products' activeClassName={styles["gradient"]} className={styles["navlinks"]}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/team' activeClassName={styles["gradient"]} className={styles["navlinks"]}>Team</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blogs' activeClassName={styles["gradient"]} className={styles["navlinks"]}>Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to='/carrier' activeClassName={styles["gradient"]} className={styles["navlinks"]}>Carrier</NavLink>
                    </li>
                    <li>
                        <NavLink to='/director' activeClassName={styles["gradient"]} className={styles["navlinks"]}>Director</NavLink>
                    </li>
                    <li>
                        <NavLink to='/aboutus' activeClassName={styles["gradient"]} className={styles["navlinks"]}>About us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeClassName={styles["gradient"]} className={styles["navlinks"]}>Contact Us</NavLink>
                    </li>
                </ul>
                <button className={`${styles["nav-btn"]} ${styles["nav-close-btn"]}`} onClick={toggleDropdown}>
                    {showDropdown ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default NavbarComponent;
