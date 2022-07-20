import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect } from "react";

export const Bubble = () => {
    return (
        <div className="absolute bg-neutral-300 w-4/12 flex p-10 flex-col rounded-2xl drop-shadow-2xl justify-self-center">
            <div className="m-auto pb-5 text-xl">Want more?</div>

            {/* <div className="text-xs"> */}
            <p className="m-auto text-xs">Check out my github</p>
            <p className="m-auto text-xs"> @stefanorrie</p>
            <p className="m-auto text-xs"> or be in touch via</p>
            {/* </div> */}

            <div className={`flex justify-between w-28 pt-8 m-auto pb-8`}>
                <motion.div
                    initial={{ scale: 1.0, fill: "white" }}
                    whileHover={{
                        scale: 1.2,
                    }}
                >
                    <Link
                        href={"https://www.instagram.com/stefanorrie/"}
                        passHref
                    >
                        <a target="_blank">
                            <Image
                                src="/instagram.svg"
                                width="31px"
                                height="31px"
                                alt="instagram"
                            />
                        </a>
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ scale: 1.0 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <Link
                        href={"https://www.facebook.com/stefanorrie/"}
                        passHref
                    >
                        <a target="_blank">
                            <Image
                                src="/facebook.svg"
                                width="30px"
                                height="30px"
                                alt="facebook"
                            />
                        </a>
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ scale: 1.0 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <Link
                        href={"https://www.linkedin.com/in/stefanorrie/"}
                        passHref
                    >
                        <a target="_blank">
                            <Image
                                src="/linkedin.svg"
                                width="30px"
                                height="30px"
                                alt="linkedin"
                            />
                        </a>
                    </Link>
                </motion.div>
            </div>
            <p className="m-auto text-xs"> else, email me</p>
            <a
                href="mailto:stefanorrie@gmail.com"
                className="m-auto text-xs hover:text-white duration-300"
            >
                stefanorrie@gmail.com
            </a>
        </div>
    );
};
