import Image from "next/image";
import Email from "../../public/email-svgrepo-com.svg";
import Github from "../../public/github-142-svgrepo-com.svg";
import Phone from "../../public/phone-svgrepo-com.svg";


export default function Footer() {
    return (
        <footer className="h-24 flex items-center">
            <div>
                <h1 className="text-black xl:text-3xl xl:mx-5 ml-2 text-xl">Cameron Canfield</h1>
            </div>
            <div className="ml-auto">
                <ul className="flex space-x-4 mr-5">
                    <li>
                        <Image 
                            src={Email}
                            alt="Email Icon"
                            width="50"
                            height="50"
                        />
                    </li>
                    <li>
                        <Image 
                            src={Github}
                            alt="Github Icon"
                            width="50"
                            height="50"
                        />
                    </li>
                    <li>
                        <Image 
                            src={Phone}
                            alt="Phone Icon"
                            width="50"
                            height="50"
                        />
                    </li>
                </ul>
            </div>
        </footer>
    );
}