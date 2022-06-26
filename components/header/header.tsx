import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <div className="relative pb-24">
            <div className="flex justify-center fixed top-0 left-0 right-0 bg-white">
                <div className="cursor-pointer">
                    <Link href="/">
                        <Image
                            src={"/SOELOGO.svg"}
                            width="180%"
                            height="100%"
                        ></Image>
                    </Link>
                </div>
            </div>
        </div>
    );
};
