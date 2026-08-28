import type { AccordionItem } from "../types/accordion";

export const faqData: AccordionItem[] = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces using reusable components.",
  },
  {
    id: 2,
    question: "What is TypeScript?",
    answer:
      "TypeScript is a strongly typed programming language that builds on JavaScript.",
  },
  {
    id: 3,
    question: "What is the difference between state and props?",
    answer:
      "Props are data passed from a parent component, while state is data managed by the component itself.",
  },
  {
    id: 4,
    question: "What are React Hooks?",
    answer:
      "Hooks are functions that allow functional components to use state and other React features.",
  },
  {
    id: 5,
    question: "What is useEffect used for?",
    answer:
      "useEffect is used to perform side effects such as API calls, subscriptions, and updating external systems.",
  },
];
