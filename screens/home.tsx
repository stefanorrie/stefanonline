import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import me from '../public/StefanMynd.jpg'
import { Header } from '../components/header/header'
import styles from '../styles/Home.module.css'
import { Bubble } from '../components/bubble/bubble'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export const Home: NextPage = () => {
    // const [bubbleShown, setBubbleShown] = useState<boolean>(false);
    const [ref, inView] = useInView()

    return (
        <div>
            <Head>
                <title>STEFANONLINE</title>
                <meta name="STEFANONLINE" content="STEFANONLINE WEBSITE" />
                <meta
                    name="description"
                    content="My name is Stefán Orri and I am a software developer. I work at a Icelandic software company called Norda located in Reykjavík."
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className="sticky top-0 z-10">
                    <Header />
                </div>
                <div className="flex-col flex pt-5 pb-5">
                    <div className={styles.wrapper}>
                        <div className={styles.under}>
                            <div className="flex justify-center">
                                <h1 className="text-2xl">
                                    Stefán Orri Eyþórsson
                                </h1>
                            </div>
                            <div className="w-screen ">
                                <div
                                    className={`${styles.textBox} w-8/12 text-sm`}
                                >
                                    My name is Stefán Orri and I am a software
                                    developer. I work at a Icelandic software
                                    company called Norda located in Reykjavík. I
                                    currently mostly do front end work where my
                                    interest lies but I intend on getting more
                                    experience in app developing and the backend
                                    later on in my career. Current technologies
                                    we use are NextJS with TypeScript.
                                    <br />
                                    <br />I have a B.Sc. degree in Software
                                    Engineering from Reykjavik University. A
                                    part of my job at Norda is a contractor
                                    position at the city of Reykjavík in the
                                    data team as a front end developer for them.
                                    <br />
                                    <br />
                                    <div className="hidden md:block">
                                        Most of the coding work I have done have
                                        been various school projects but these
                                        days my main projects are sites I make
                                        at work. A little side project I did was
                                        to make a{' '}
                                        <Link
                                            href={'https://antifan.vercel.app/'}
                                            passHref
                                        >
                                            <a
                                                className="underline hover:text-[#FF00B8]  transition-colors duration-500"
                                                target={'_blank'}
                                            >
                                                {' '}
                                                follower-following difference
                                                checker for Instagram.
                                            </a>
                                        </Link>
                                        <br />
                                        <br />I am also proud to show off my
                                        B.Sc. project,{' '}
                                        <Link
                                            href={'https://hugtakasafn.is/'}
                                            passHref
                                        >
                                            <a
                                                className="underline hover:text-[#47b2ff]  transition-colors duration-500"
                                                target={'_blank'}
                                            >
                                                {' '}
                                                Hugtakasafn ferðaþjónustunnar
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.over}>
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
                            className={`${styles.textBox} w-8/12 text-sm mb-16 flex flex-col justify-center items-center`}
                        >
                            I've worked in various fields of tech. I have sold
                            tech at Tölvutek, and taught children and teachers
                            basic programming skills and more, from ages 13 to
                            16 at Skema. Previously to software development I
                            worked as an IT specialist at Skatturinn (IRS).
                            <div className="mt-32 ">
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
                    </div>
                </div>
            </div>
        </div>
    )
}
