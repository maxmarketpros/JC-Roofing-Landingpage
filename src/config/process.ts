import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Consultation",
    description:
      "We start with a thorough discussion of your project goals, budget, and timeline. This is where we listen, assess, and begin building your custom plan.",
    icon: "MessageSquare",
  },
  {
    step: 2,
    title: "Planning & Estimate",
    description:
      "You receive a detailed proposal with transparent line-item pricing, a clear project timeline, and a comprehensive scope of work — no surprises.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "Execution",
    description:
      "Our team gets to work with daily coordination, quality checkpoints, and regular progress updates. We treat your project like our own.",
    icon: "Hammer",
  },
  {
    step: 4,
    title: "Final Walkthrough",
    description:
      "We don't consider a project done until you're completely satisfied. A thorough final inspection ensures every detail meets our exacting standards.",
    icon: "CheckCircle",
  },
];
