import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center">
      <p className="font-black text-9xl proportional-nums">
          PORTFOLIO
        </p>

        <p className="font-black text-9xl proportional-nums">
        METOO
        </p>

        <Image
          className=""
          src="/Photo01.jpg"
          alt="Next.js logo"
          width={1000}
          height={200}
          priority
        />
        <Image className=""
          src="/Photo02.jpg"
          alt="Next.js logo"
          width={1000}
          height={200}
          priority>
          </Image>
          
          <Image 
          className=""
          src="/Photo03.jpg"
          alt="Next.js logo"
          width={1000}
          height={200}
          priority>
          </Image>

          <Image 
          className=""
          src="/Photo04.jpg"
          alt="Next.js logo"
          width={1000}
          height={200}
          priority>
          </Image>

          <Image 
          className=""
          src="/Photo05.jpg"
          alt="Next.js logo"
          width={1000}
          height={200}
          priority>
          </Image>


          <Image 
          className=""
          src="/Photo06.jpg"
          alt="Next.js logo"
          width={1000}
          height={200}
          priority>
          </Image>

          <Image 
          className=""
          src="/Photo07.jpg"
          alt="Next.js logo"
          width={1000}
          height={200}
          priority>
          </Image>


          <Image 
          className=""
          src="/Photo08.jpg"
          alt="Next.js logo"
          width={1000}
          height={200}
          priority>
          </Image>


      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/Veerapat02/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/Logofacebook.png"
            alt="File icon"
            width={30}
            height={30}
          />
          Facebook
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/me_to02/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/LogoIG.png"
            alt="Window icon"
            width={30}
            height={30}
          />
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://line.me/ti/p/Z_dJgbtaFI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/logoLine.png"
            alt="Globe icon"
            width={30}
            height={30}
          />
          0661368838
        </a>
      </footer>
    </div>
  );
}
