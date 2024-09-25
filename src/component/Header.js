import React from "react";
import { Link } from 'react-router-dom';
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}><Link className={styles.link} to="/">Home</Link></li>
                    <li className={styles.li}><Link className={styles.link} to="/article-list">Article List</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;