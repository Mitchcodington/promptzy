import Feed from "@components/Feed"
import Image from "next/image"


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <div className="flex  sm:flex-row flex-col w-full items-center justify-between gap-9">
        <div className="w-full"> 
        <h1 className="head_text  sm:text-start text-center w-full tracking-widest orange_gradient">
            IGNITE YOUR CREATIVITY 
            <br className="max-md:hidden"/>
          
        </h1>
        <h1 className="head_text2 sm:text-start text-center mt-4 tracking-widest">with AI-Powered Prompts</h1>
        <p className="desc sm:text-start text-center tracking-widest">
        <span className="font-bold ">Embrace Creative Exploration </span>
       <span className="bg-white orange_gradient font-bold  underline decoration-double ">Discover, Create, and Share </span>
        with <span className="font-bold">PROMPTZY</span>, Your Open-Source AI Prompting Tool
        </p>
        </div>
        <div className="w-[60%]">
        <Image src='/assets/images/loffi.gif'
            alt="prompto logo"
            width={50}
            height={50}
            className=" w-full object-cover "/>
         </div>   
      </div>
        <Feed/>

    </section>
  )
}
export default Home