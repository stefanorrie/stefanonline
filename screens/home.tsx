import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import me from "../public/StefanMynd.jpg";
import { Header } from "../components/header/header";
import styles from "../styles/Home.module.css";
import { Bubble } from "../components/bubble/bubble";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Home: NextPage = () => {
    // const [bubbleShown, setBubbleShown] = useState<boolean>(false);
    const [ref, inView] = useInView();

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
                                <h1 className="text-2xl">
                                    Stefán Orri Eyþórsson
                                </h1>
                            </div>
                            <div className=" w-screen ">
                                <div
                                    className={`${styles.textBox} w-8/12 text-sm`}
                                >
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
                                    <div className="hidden md:block">
                                        Most of the coding work I have done have
                                        been various school projects but these
                                        days my main projects are sites I make
                                        at work. As for personal coding projects
                                        to show off, this website is currently
                                        the only personal project I can show off
                                        but this site will showcase future
                                        projects.
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className={styles.over}>
                        <div className="mt-10 h-max flex justify-center">
                            <h1 className="text-2xl">About</h1>
                        </div>
                        <div className="mt-10 h-max flex justify-center">
                            <Image
                                className="rounded-xl"
                                src={me}
                                height="240"
                                width="200"
                                alt="literally me"
                                objectFit="contain"
                            />
                        </div>

                        <div
                            className={`${styles.textBox} w-8/12 text-sm mb-16`}
                        >
                            I've worked in various fields of tech. I have sold
                            tech at Tölvutek, and taught children and teachers
                            basic programming skills and more, from ages 13 to
                            16 at Skema. Previously to software developement I
                            worked as an IT specialist at Skatturinn (IRS).
                            <div className="mt-32 bottom-16 right-56">
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: inView ? 1 : 0,
                                        scale: inView ? 1.0 : 0.8,
                                        y: inView ? 0 : 100,
                                    }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                >
                                    <Bubble />
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
