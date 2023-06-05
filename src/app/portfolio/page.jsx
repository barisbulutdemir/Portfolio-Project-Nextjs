import React from 'react';
import styles from './portfolio.module.css'
import Link from "next/link";

const Portfolio = () => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.selectTitle}>Choose a gallery</h1>
                <div className={styles.items}>
                    <Link  id="item1" href="/portfolio/illustrations" className={styles.item}>
                        <span className={styles.title}>Illustrations</span>
                    </Link>
                    <Link id="item2" href="/portfolio/website" className={styles.item}>
                        <span className={styles.title}>Website</span>
                    </Link>
                    <Link id="item3" href="/portfolio/applications" className={styles.item}>
                        <span className={styles.title}>Applications</span>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Portfolio;