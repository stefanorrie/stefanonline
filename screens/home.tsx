import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/header/header";
import styles from "../styles/Home.module.css";

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
                <div className="container flex flex-col content-center justify-center">
                    <div className={styles.wrapper}>
                        <section className={styles.under}>
                            <div className="mt-10 h-max flex justify-center">
                                <h1 className="text-3xl">
                                    Stefán Orri Eyþórsson
                                </h1>
                            </div>
                            <div className="pt-10 px-60 select-none flex justify-center content-center">
                                Yeah, look, when I was in jail, I was lowkey
                                (Uh) Shout out to supporters that wrote me Eat
                                food, work out and then go sleep You know I'm
                                prayin', He carryin' both feet (Yeah) **** know
                                we got God with us (God with us) You look at me
                                and see a God figure (Uh) And when I start
                                vibin', I know that He with me And I'ma always
                                catch a hard shiver (Uh) I know it's demons in
                                that dark liquor (Uh) We buy a bottle and squash
                                with ya (Uh) Everybody turn into a harsh ****
                                But my pockets bigger and my heart richer (Uh)
                                My mind smarter, my grind harder (Skrr) And my
                                car quicker (Skrrt) I met her in church, she
                                pray for me She my God-sister (She my
                                God-sister, yeah) I'm only trustin' the people I
                                keep close **** sellin' they soul for a repost
                                Remember when I was broke, wearin' cheap coats{" "}
                            </div>
                        </section>
                    </div>
                    <section className={styles.over}>
                        <div className="pt-10 px-60 select-none flex justify-center content-center ">
                            Verdana was a popular sans-serif font in early
                            2000s. This was because it was used for Microsoft
                            products. It features a large x-height, and wide
                            proportions. The font works great on computer
                            screens, but isn't recommended for high quality
                            print. For these reasons, it is such a popular font.
                            Verdana was a challenge to find a good similar
                            looking font.
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
