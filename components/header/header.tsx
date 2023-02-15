import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

const svgVariants = {
    hidden: { y: 20 },
    visible: {
        y: 20,
        transition: {
            duration: 1,

            ease: 'easeInOut',
            delayChildren: 0,
            staggerChildren: 1,
        },
    },
}

const Variant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
    },
}

export const Header = () => {
    const [socialShown, setSocialShown] = useState<boolean>(false)
    const onScroll = useCallback((event: any) => {
        const { scrollY } = window
        if (scrollY >= 100) {
            setSocialShown(true)
        } else {
            setSocialShown(false)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true })
    }, [onScroll])

    return (
        <div className={`sticky top-0 ${styles.headerBlur}`}>
            <div className=" flex justify-center flex-row">
                <div
                    className="cursor-pointer"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                >
                    <motion.div
                        variants={svgVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ width: 150, height: 60 }}
                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 696.69 97.94"
                        >
                            <motion.path
                                d="M162.53,414.31a121.72,121.72,0,0,1,11.28-16.14q50.63,8.06,101.56,13.46c7.6.79,12.15.62,13.58-.46l18.92-14.26q2.14-1.62-1-2.31c-2.11-.46-6.16-1-12.12-1.63q-22.08-2.46-44.09-5.35c-6.19-.83-11.89-1.75-17.06-2.72a63.16,63.16,0,0,1-12.34-3.39c-3-1.27-4.54-2.64-4.58-4.07s2-3,5.94-4.79l54.15-24.11c6.31-2.8,14.63-4.51,24.5-5.18,11.67-.79,23.49.16,35.1,1.71q41.81,5.16,83.8,7.85a68.22,68.22,0,0,0-.22,15.84q-39.75-2.29-79.3-6.31c-5.68-.6-9.35-.36-11.07.77l-21.31,14c-1.18.78-1,1.42.55,1.92a46.31,46.31,0,0,0,8.34,1.4q25.13,2.63,50.32,4.54c9.53.86,19.4,1.42,28.65,3.86,6.06,1.6,8.2,4,6,7.08L383,423c-3.2,4.51-11.43,7.47-25.05,8.56-22.16,1.78-44.76-.2-66.91-2C248,425.67,205.22,420.67,162.53,414.31Z"
                                transform="translate(-162.53 -340.91)"
                                variants={Variant}
                                transition={{ delay: 0.5 }}
                            />
                            <motion.path
                                d="M650.79,423a3.25,3.25,0,0,1-.11,4.64c-1.35,1.53-4.58,3-9.79,4.35a161.68,161.68,0,0,1-22.38,3.69c-12.48,1.36-25.07,2-37.62,2.31q-64.49,1.62-128.94.36c-12.6-.27-25.24-.81-37.76-2.1a166.34,166.34,0,0,1-22.65-3.56c-5.3-1.33-8.65-2.78-10.1-4.29a3.29,3.29,0,0,1-.45-4.64l42.73-59.55c2.31-3.23,7.85-5.66,16-7.2,11.15-2.12,22.84-2.09,34.22-1.76q39.41.76,78.76-.22c11.42-.4,23.15-.47,34.36,1.56,8.25,1.5,14,3.9,16.53,7.12ZM499.47,370.18c-4.3,0-6.51.49-6.65,1.56l-6.54,50.76c-.08.61.45,1.06,1.6,1.34a48.75,48.75,0,0,0,8.12.46q19.53.1,39.07-.11a45.48,45.48,0,0,0,8.09-.5c1.12-.28,1.63-.73,1.51-1.35L534.5,371.63c-.21-1.07-2.47-1.57-6.76-1.52Q513.61,370.28,499.47,370.18Z"
                                transform="translate(-162.53 -340.91)"
                                variants={Variant}
                                transition={{ delay: 1.5 }}
                            />
                            <motion.path
                                d="M594.29,353.15c39.14-2.47,78-6.38,116.81-12.24,13.1,4.09,26.28,7.91,39.48,11.65q-36.12,5.85-72.43,9.84l26.51,18.4q32.16-3.57,64.16-8.26l25.58,12.55c-23.43,3.55-46.93,6.47-70.48,9.08l24.35,16.89q49.53-5.47,98.72-13.3a134.08,134.08,0,0,1,12.23,16c-66.6,10.05-133.52,16.7-200.74,20.82Z"
                                transform="translate(-162.53 -340.91)"
                                variants={Variant}
                                transition={{ delay: 2.5 }}
                            />
                        </motion.svg>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: socialShown ? 1 : 0 }}
                >
                    <div
                        className={`absolute right-0 flex justify-between w-20 pt-4 mr-3`}
                    >
                        <Link
                            href={'https://www.instagram.com/stefanorrie/'}
                            passHref
                        >
                            <a target="_blank">
                                <motion.div whileHover={{ opacity: 0.5 }}>
                                    <Image
                                        src="/instagram.svg"
                                        width="21px"
                                        height="21px"
                                        alt="instagram"
                                    />
                                </motion.div>
                            </a>
                        </Link>
                        <Link
                            href={'https://www.facebook.com/stefanorrie/'}
                            passHref
                        >
                            <a target="_blank">
                                <motion.div whileHover={{ opacity: 0.5 }}>
                                    <Image
                                        src="/facebook.svg"
                                        width="20px"
                                        height="20px"
                                        alt="facebook"
                                    />
                                </motion.div>
                            </a>
                        </Link>
                        <Link
                            href={'https://www.linkedin.com/in/stefanorrie/'}
                            passHref
                        >
                            <a target="_blank">
                                <motion.div whileHover={{ opacity: 0.5 }}>
                                    <Image
                                        src="/linkedin.svg"
                                        width="20px"
                                        height="20px"
                                        alt="linkedin"
                                    />
                                </motion.div>
                            </a>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
