import Link from "next/link";
import styles from "./headerNav.module.css";

type HeaderNavProps = {
    menuOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
    onHamburgerKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const HeaderNav = ({ menuOpen, toggleMenu, onHamburgerKeyDown, closeMenu }: HeaderNavProps) => {
    return (
        <header className={styles.dashboardHeaderContainer}>
            <section className={styles.dashboardHeader}>
                <button
                    type="button"
                    className={`${styles.hamburgerMenu} ${menuOpen ? styles.hamburgerOpen : ""}`}
                    onClick={toggleMenu}
                    onKeyDown={onHamburgerKeyDown}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav-panel"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    <span className={styles.bar} aria-hidden />
                    <span className={styles.bar} aria-hidden />
                    <span className={styles.bar} aria-hidden />
                </button>

                <h1 className={styles.dashboardTitle}>Lola-Lite</h1>
            </section>

            <section
                id="mobile-nav-panel"
                className={`${styles.hamburgerMenuContent} ${menuOpen ? styles.hamburgerMenuContentOpen : ""}`}
            >
                {menuOpen ? (
                    <button
                        type="button"
                        className={styles.closeHamburgerMenuContentButton}
                        onClick={closeMenu}
                        aria-label="Close menu"
                    > X </button>
                ) : null}
                <section className={styles.navCluster}>
                    <nav className={styles.navPrimary} aria-label="Main">
                        <ul>
                            <li>
                                <Link href="/">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/share">
                                    Share
                                </Link>
                            </li>
                            <li>
                                <Link href="/history">
                                    Travels
                                </Link>
                            </li>
                            <li>
                                <Link href="/history">
                                    Planning
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className={styles.navSecondary} aria-label="Account">
                        <ul>
                            <li>
                                <Link href="#">
                                    Account
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Settings
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
            </section>
        </header>
    );
}

export default HeaderNav;