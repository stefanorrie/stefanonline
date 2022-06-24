import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <div className="flex justify-center">
            <Link href="/">
                <Image src={"/SOELOGO.svg"} width="200%" height="120%"></Image>
            </Link>
        </div>
    );
};
