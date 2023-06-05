import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";

const Blog = () => {
    return (
        <>
            <div className={styles.mainContainer}>

                <Link href="/blog/" className={styles.container} >

                    <div className={styles.imgContainer} >
                        <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                               alt=""
                               width={400}
                               height={250}
                               className={styles.image}
                               />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}> test</h1>
                        <p className={styles.desc}>desc</p>

                    </div>
                </Link>
                <Link href="#" className={styles.container} >

                    <div className={styles.imgContainer} >
                        <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                               alt=""
                               width={400}
                               height={250}
                               className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}> test</h1>
                        <p className={styles.desc}>desc</p>

                    </div>
                </Link>
                <Link href="#" className={styles.container} >

                    <div className={styles.imgContainer} >
                        <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                               alt=""
                               width={400}
                               height={250}
                               className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}> test</h1>
                        <p className={styles.desc}>desc</p>

                    </div>
                </Link>
                <Link href="#" className={styles.container} >

                    <div className={styles.imgContainer} >
                        <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                               alt=""
                               width={400}
                               height={250}
                               className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}> test</h1>
                        <p className={styles.desc}>desc</p>

                    </div>
                </Link>
                <Link href="#" className={styles.container} >

                    <div className={styles.imgContainer} >
                        <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                               alt=""
                               width={400}
                               height={250}
                               className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}> test</h1>
                        <p className={styles.desc}>desc</p>

                    </div>
                </Link>
            </div>
        </>
    )
}

export default Blog;