import Wrapper from "@/components/Wrapper";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Vishal Arora</title>
      </Head>
      <Wrapper className="max-w-2xl text-center flex flex-col justify-center">
        <div className="flex sm:justify-between items-center gap-4 sm:gap-0">
          <div className="text-xl sm:text-3xl uppercase text-WhiteGray font-bold">Hi I&apos;m</div>
          <div className="sm:h-2 sm:w-[30rem] xs:w-[19rem] rounded-sm bg-Orange"></div>
        </div>
        <div className="sm:text-[7.2rem] xs:text-7xl text-5xl text-White font-medium">Vishal Arora</div>
        <div className="uppercase font-bold xs:text-2xl text-xl text-Orange text-end mt-8">A Frontend <br />developer</div>
      </Wrapper>
    </>
  );
}
