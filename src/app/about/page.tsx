import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Florian Walther and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Know Dan better!🙃🫠</H2>
        <p>
          My name is Dan Njuguna, a Machine Learning Engineer from Kenya🇰🇪. I have been building awesome
          solutions since March 2023 when I started my programming journey. I have a vision to explore the full
          potential of Artificial Intelligence and innovative solutions to Machine Learning Problems.
        </p>
        <p>
          I&apos;m passionate about building cool AI-First applications and websites and I love
          sharing the things I learn with people in tech communities.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a Machine Learning Engineer specializing in{" "}
          <strong>Large Language Models</strong>, <strong>Computer Vision</strong>, and{" "}
          <strong>AI deployment</strong>.
        </p>
        <p>
          I also have experience with multiple AI frameworks such as langchain, openai and vertex-ai. I have also worked
          on RAG applications using huggingface provided models locally. I, however, enjoy writing more of AI first web applications
          as they have wide applications in various industries. In the future, I am working
          to bring AI solutions in the fields of Finance and Energy. To finance is to help 
          get the optimal economical opportunities🧾🧾 and in energy I intend to revolutionarise
          the energy consumption and saving ability to have a greener world!🌿🌿
        </p>
        <div className="flex flex-wrap space-x-4">
          <div className="flex items-center space-x-2">
            <Image src="./icons/python.svg" alt="Python" width={24} height={24} className="h-6 w-6 " />
            <span>Python</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="./icons/javascript.svg" alt="JavaScript" width={24} height={24} className="h-6 w-6" />
            <span>JavaScript</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="./icons/typescript.svg" alt="TypeScript" width={24} height={24} className="h-6 w-6" />
            <span>TypeScript</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="./icons/nextjs.svg" alt="Next.js" width={24} height={24} className="h-6 w-6" />
            <span>Next.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="./icons/c.svg" alt="C" width={24} height={24} className="h-6 w-6" />
            <span>C</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="./icons/c-plusplus.svg" alt="C++" width={24} height={24} className="h-6 w-6" />
            <span>C++</span>
          </div>
        </div>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Side projects</H2>
        <p>
          In my free time, I like to work on side projects to keep my skill
          sharp and try out new tech. You can check my current projects on my Github shared below:{" "}
        </p>
        <ul className="list-inside list-disc">
          <li>
            <Link
              href="https://github.com/Dan-njuguna"
              className="text-primary hover:underline"
              target="_blank"
            >
              GitHub
            </Link>{" "}
            - Access my current projects source codes.
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Fun Fact🤭😇</H2>
        <p>
          I love story telling. I more often than not fall in the pit of narrating stories endlessly.
          Outside technology, I love cycling and hiking. Gaming is also a part of what I do best. 
          I listen to a lot of Nyashinski and Sauti Sol music🎶🎶. Founder of - &apos;&apos;We Listen, but we don&apos;t judge!&apos;&apos;
        </p>
        <p>
          I&apos;m also very much into self-improvement, nutrition, and positive
          psychology.
        </p>
      </section>
    </section>
  );
}