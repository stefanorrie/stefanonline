import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/header/header";
import styles from "../styles/Home.module.css";
import me from "../public/StefanMynd.jpg";

export const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>STEFANONLINE</title>
                <meta name="STEFANONLINE" content="STEFANONLINE WEBSITE" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className="sticky top-0 z-10">
                    <Header />
                </div>
                <div className="flex-col flex pt-5 pb-5">
                    <div className={styles.wrapper}>
                        <section className={styles.under}>
                            <div className="flex justify-center">
                                <h1 className="text-3xl">
                                    Stefán Orri Eyþórsson
                                </h1>
                            </div>
                            <div className=" w-screen ">
                                <div className={`${styles.textBox} w-8/12`}>
                                    My name is Stefán Orri and I am a software
                                    developer. I work at a Icelandic software
                                    company called Sendiráðið located in
                                    Reykjavík. I currently mostly do front end
                                    work where my interest lies but I intend on
                                    getting more experience in app developing
                                    and the backend later on in my career.
                                    Current technologies we use are NextJS with
                                    TypeScript.
                                    <br />
                                    <br />I am set to graduate university after
                                    this semester, where I am currently only
                                    doing my final project and a single other
                                    course, then I will have aquired a BSc.
                                    degree in Software Engineering from
                                    Reykjavik University. I will possibly be
                                    able to apply to become a Computer Scientist
                                    post graduation.
                                    <br />
                                    <br />
                                    Most of the coding work I have done have
                                    been various school projects but these days
                                    my main projects are sites I make at work.
                                    As for personal coding projects to show off,
                                    this website is currently the only personal
                                    project I can show off but this site will
                                    showcase future projects.
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className={styles.over}>
                        <div className="mt-10 h-max flex justify-center">
                            <h1 className="text-3xl">My Work</h1>
                        </div>
                        <div className="mt-10 h-max flex justify-center">
                            <Image
                                src={me}
                                height="350"
                                width="300"
                                alt="literally me"
                            />
                        </div>

                        <div className={`${styles.textBox} w-8/12`}>
                            Verdana was a popular sans-serif font in early
                            2000s. This was because it was used for Microsoft
                            products. It features a large x-height, and wide
                            proportions. The font works great on computer
                            screens, but isn't recommended for high quality
                            print. For these reasons, it is such a popular font.
                            Verdana was a challenge to find a good similar
                            looking font.n
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
