import React from 'react';
import styles from './page.module.css'
import Button from "@/companents/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.cartTitle}>{params.category}</h1>
                <div className={styles.item}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>test</h1>
                        <p className={styles.desc}>desc</p>
                        <Button url="#" text="See More" />
                    </div>
                        <div className={styles.imgContainer}> 
                        <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                               fill={true}
                               className={styles.img}

                            alt="" /> </div>

                </div>
                <div className={styles.item}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>test</h1>
                        <p className={styles.desc}>desc</p>
                        <Button url="#" text="See More" />
                    </div>
                    <div className={styles.imgContainer}>
                        <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                               fill={true}
                               className={styles.img}

                               alt="" /> </div>

                </div>
                <div className={styles.item}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>test</h1>
                        <p className={styles.desc}>desc</p>
                        <Button url="#" text="See More" />
                    </div>
                    <div className={styles.imgContainer}>
                        <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                               fill={true}
                               className={styles.img}

                               alt="" /> </div>

                </div>
                <div className={styles.item}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>test</h1>
                        <p className={styles.desc}>desc</p>
                        <Button url="#" text="See More" />
                    </div>
                    <div className={styles.imgContainer}>
                        <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                               fill={true}
                               className={styles.img}

                               alt="" /> </div>

                </div>
            </div>
        </>
    )
}

export default Category;