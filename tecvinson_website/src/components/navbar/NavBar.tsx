"use client"

import React, { useState } from 'react';
import styles from './NavbarStyles.module.css'; // Import your CSS styles

const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>Logo</span>
      </div>
      <div className={`${styles.menu} ${isDropdownOpen ? styles.open : ''}`} onClick={toggleDropdown}>
        <span className={styles.browseText}>Browse</span>
        {isDropdownOpen && (
          <div className={styles.dropdown}>
            <ul>
              <li>Category 1</li>
              <li>Category 2</li>
              {/* Add more categories as needed */}
            </ul>
          </div>
        )}
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Search..." />
      </div>
      <div className={styles.buttons}>
        <button>Artwork</button>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
