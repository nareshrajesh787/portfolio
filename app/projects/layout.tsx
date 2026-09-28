import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Naresh Rajesh: SpeechScore, an AI speech coaching platform, plus Clarity, PeerPoint, and EcoSearch. Full-stack apps and multimodal AI pipelines.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
