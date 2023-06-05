import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";



async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {revalidate: 10},
    });


    if ( !res.ok) {
        throw new Error ("Failed to get data");
    }
    return res.json();
}

const Blog = async () => {
    const data = await getData()
    return (
        <>
            <div className={styles.mainContainer}>


                {data.map(item => (

                    <Link key={item.id} href="/blog/testid" className={styles.container} >

                        <div className={styles.imgContainer} >
                            <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                                   alt=""
                                   width={400}
                                   height={250}
                                   className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.title}> {item.title}</h1>
                            <p className={styles.desc}>{item.title}</p>

                        </div>
                    </Link>
                ))}

            </div>
        </>
    )
}

export default Blog;