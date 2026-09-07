import dynamic from "next/dynamic";

import Breakline from "@/common/components/elements/Breakline";
import Story from "./Story";

const CareerList = dynamic(() => import("./CareerList"), {
  ssr: true,
});

const EducationList = dynamic(() => import("./EducationList"), {
  ssr: true,
});

const About = () => {
  return (
    <>
      <Story />
      <Breakline className="my-8" />
      <CareerList />
      <Breakline className="my-8" />
      <EducationList />
    </>
  );
};

export default About;
