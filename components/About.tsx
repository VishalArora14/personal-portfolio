import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex flex-col gap-12 lg:flex-row items-center justify-center mb-12 min-h-screen lg:mb-0 pt-28 lg:pt-0">
        <Image
          src={"/about.jpg"}
          width={400}
          height={400}
          alt={"about image"}
          className="rounded-full"
        />
        <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
          <div className="uppercase font-semibold text-sm text-WhiteGray">
            - Introduction
          </div>
          <div className="font-semibold text-3xl mt-8 text-White uppercase">
            Fullstack Web Developer
          </div>
          <p className="text-WhiteGray text-sm mt-8 leading-7">
            {" "}
            I'm FullStack Web Developer skilled in the ME(React/Next)N stack and I possess
            advanced proficiency in C++ programming. I have a strong foundation
            in RESTful APIs and object-oriented programming.
          </p>
        </div>
      </div>
    </>
  );
}
