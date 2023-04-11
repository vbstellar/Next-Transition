import { motion as m } from "framer-motion"

export default function Contact(){
    return(
        <m.main initial={{y: "100%"}} animate={{y: "0%"}} transition={{duration: 0.75, ease: "easeOut"}} exit={{opacity:1}} className="text--gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-46 px-16" >
            <div className="my-96 p-1">
                <h1 className="text-6xl text-center lg:text-right lg:text-9xl">Let{"'"}s Talk</h1>
            </div>
            <div className="flex gap-40">
                <div className="lg:text-2xl text-base">
                    <h4>Fine me:</h4>
                </div>
                <div className="lg:text-6xl text-2xl underline">
                    <ul>
                        <li className="pb-2">Twitter</li>
                        <li className="pb-2">Instagram</li>
                        <li className="pb-2">LinkedIn</li>
                        <li className="pb-2">Portolio</li>
                    </ul>
                </div>
            </div>
        </m.main>
    );
}