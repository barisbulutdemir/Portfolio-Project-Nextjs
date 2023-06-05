import React from 'react';
import styles from './contact.module.css'
import Image from "next/image";
import Button from "@/companents/button/Button";
const Contact = () => {
    return (
        <>
            <div className={styles.container}>

                <h1 className={styles.title}>Let's Keep in touch</h1>
                <div className={styles.content}>
                    <div className={styles.imgContainer}>
                        <Image src="/contact.png" alt=""
                               fill={true}
                               className={styles.image}/>
                    </div>
                    <form className={styles.form}>
                        <input className={styles.input}
                               type="text"
                               placeholder="name"/>
                        <input className={styles.input}
                               type="text"
                               placeholder="name"/>
                        <textarea className={styles.textarea}
                                  placeholder="message"
                                  id="" cols="30" rows="10"></textarea>
                        <Button text="Send" url="/"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;