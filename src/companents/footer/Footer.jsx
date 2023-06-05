import React from 'react';
import Image from "next/image";
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <div>©2023 Baris B. Demir. All rights reserved.</div>
                <div>
                    <div className={styles.social}>
                        <Image className={styles.icon} src="/1.png" alt="bbd dev" height={15} width={15} />
                        <Image className={styles.icon} src="/2.png" alt="bbd dev" height={15} width={15}/>
                        <Image className={styles.icon} src="/3.png" alt="bbd dev" height={15} width={15}/>
                        <Image className={styles.icon} src="/4.png" alt="bbd dev" height={15} width={15}/>

                    </div>
                </div>
            </div>


        </>
    )
}
export default Footer;