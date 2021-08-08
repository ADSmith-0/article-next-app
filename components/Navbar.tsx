import NavLink from './NavLink';
import styles from '../styles/Navbar.module.css';
export default function Navbar() {
    return (
        <nav id={styles.navbar}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/bookmarks">Bookmarks</NavLink>
        </nav>
    )
}
