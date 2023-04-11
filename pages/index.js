import { motion as m } from "framer-motion"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="public\favicon.ico" />
      </Head>
      <main>
        <div className="my-96 p-1 ">
          <h1 className=" text-6xl text-center lg:text-right lg:text-9xl">Happy Pickle</h1>
        </div>
        <div className="flex justify-between">
          <div>
            <h2>Design</h2>
            <h2>Company</h2>
            <h2>2023</h2>
          </div>
          <div>
            <h3>This pickle gonna make you smile. </h3>
            <h3>Indian designs to make you happy</h3>
            <h3>Click contact for cool transition. </h3>
          </div>
        </div>
      </main>
    </div>
  )
  
}
