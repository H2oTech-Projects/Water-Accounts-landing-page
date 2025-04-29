import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-1 w-screen h-screen ">
      <header className="flex pl-2 lg:px-5 pt-5 justify-between w-full h-20">
        <div className="flex gap-2 justify-items-center items-center">
          <div><Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
          /></div>  

          <h1 className="text-xl sm:text-2xl lg:text-3xl  font-semibold text-white">FLOW</h1>
        </div>
        <Link href={"https://h2otechonline.com/contact/"} target="new" className="flex justify-items-center items-center md:h-10 px-2 text-base rounded-xl  text-white font-medium hover:text-blue-400 hover:bg-white">CONTACT</Link>
      </header>
      <main className="flex flex-col flex-grow justify-between items-baseline-last py-6 lg:p-0 ">
        <div className="flex  flex-col justify-center  mt-3 w-full">
          <h1 className="flex justify-center w-full lg:justify-end lg:px-5  text-5xl lg:text-7xl font-semibold text-white ">COMING SOON</h1>
          <h1 className="flex justify-center lg:justify-end lg:px-5  text-base lg:text-4xl font-normal text-white ">We are working on something exciting for you.</h1>
        </div>
        <div className="py-5">
          <h1 className="flex justify-center lg:justify-start lg:text-3xl text-base text-wrap text-white font-medium px-2 lg:px-5">Allocation management, ET data, surface water, and groundwater for your fields in one easy to use platform. </h1>
        </div>
      </main>
      <footer className="flex flex-col sm:flex-row justify-between items-center px-4 md:px-6 py-4 text-white text-sm">
        <a href="mailto:Info@H2oTechOnline.com">Email: Info@H2oTechOnline.com</a>
        <p className="mt-1 sm:mt-0">© 2025 H2oTech</p>
      </footer>
      <Image
        src="/background.png"
        alt="Background Image"
        fill
        className="absolute -z-10 object-cover object-center w-full h-full "
      />
    </div>
  );
}

