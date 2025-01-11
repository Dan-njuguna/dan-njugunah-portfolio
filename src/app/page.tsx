import { H1 } from "@/components/ui/H1";
import type { Metadata } from "next";
import Image from "next/image";
import me from "@/assets/dan-photo.jpg";
import { H2 } from "@/components/ui/H2";
import { Bot } from "lucide-react";

export const metadata: Metadata = {
  title: {
    template: "%s | Dan Njuguna",
    default: "Dan Njuguna | Machine Learning Engineer | AI Enthusiast",
  },
  description: "Dan Njuguna is a Machine Learning Engineer and AI Enthusiast from Kenya. He is passionate about building AI-First applications and websites.",
}

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py8">
      <section className="grid grid-cols-1 items-center gap-8 sn:grid-cols-2">
        <div className="space-y-3">
          <H1>Hello, I&apos;m Dan Njuguna👋🏾</H1>
          <p className="text-center sm:text-start">I&apos;m a Machine Learning Engineer from Kenya🇰🇪. 💻AI Enthusiast.</p>
        </div>
        <div className="flex justify-center">
          <Image src={me} alt="A photo of Dan Njuguna" width={300} height={300} className="rounded-full aspect-square border-2 object-cover shadow-md dark: border-foreground" />
        </div>
      </section>
      <section className="space-y-3 text-center">
        <H2>Ask the Chatbot🙂</H2>
        <p>
          Click the little <Bot className="inline pb-1"/>  icon in the top bar to activate the AI chat.
          You can ask the Chatbot any question about me and it will find relevant information on this website.
        </p>
      </section>
    </section>
  );
}