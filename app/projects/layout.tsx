import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Naresh Rajesh",
  description: "Explore my projects in AI, Machine Learning, and robust technical implementations.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
