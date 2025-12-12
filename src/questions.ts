export interface Question{
    question:string;
    options:string[];
    answer: string;
}

export const questions: Question[] = [
    {
        question: "What is TypeScript?",
        options: ["A JavaScript library", "A CSS framework", "A superset of JavaScript", "A database system"],
        answer: "A superset of JavaScript"
    },
    {
        question: "Which of the following is NOT a JavaScript framework?",
        options: ["React", "Vue", "Angular", "Python"],
        answer: "Python"
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["let", "const", "var", "function"],
        answer: "const"
    },
    
  {
    question: "What is the Virtual DOM in React?",
    options: [
      "A lightweight copy of the actual DOM, kept in memory.",
      "A method for styling components in a virtual environment.",
      "The official documentation for React developers.",
      "A way to handle server-side rendering."
    ],
    answer: "A lightweight copy of the actual DOM, kept in memory."
  },
  {
    question: "Which of the following is used to manage state in a functional component in React?",
    options: [
      "this.state",
      "useState()",
      "componentDidMount()",
      "render()"
    ],
    answer: "useState()"
  },
  {
    question: "What is the primary purpose of 'props' (properties) in React?",
    options: [
      "To handle asynchronous operations.",
      "To pass data from parent components to child components.",
      "To update the component's internal state.",
      "To define the HTML structure of a component."
    ],
    answer: "To pass data from parent components to child components."
  }

    
];