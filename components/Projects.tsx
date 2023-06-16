import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import { projects } from "@/Data/Data";
import {AiFillGithub,AiFillEye} from "react-icons/ai"

export default function Projects() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col pt-40 items-center text-center">
          <div className="uppercase font-semibold text-sm text-WhiteGray">
            - Projects
          </div>
          <div className="font-semibold text-3xl mt-8 text-White uppercase">
            My Personal Projects
          </div>
          <p className="text-WhiteGray text-sm mt-8 leading-7 max-w-3xl">
            I created a big e-commerce platform including
            visualization dashboards, using the latest technologies and agile
            methodologies to deliver exceptional user experiences and measurable
            business outcomes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 md:px-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-Blur p-4  rounded-lg"
              >
                <div className="w-full  relative group">
                  <img
                    src={project.img}
                    alt=""
                  />
                  <div className="absolute w-full h-full bg-Orange top-0 left-0 z-10 flex items-center justify-center gap-4 scale-0 group-hover:scale-100 transition-all duration-300">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <AiFillGithub className="text-3xl hover:scale-110 transition-all duration-300" />
                    </Link>
                    <Link href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                      <AiFillEye className="text-3xl hover:scale-110 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
                <div className="text-White mt-2 text-start">{project.name}</div>
                <div className="flex mt-2 flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-Blur rounded-full py-2 px-3 text-white text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
