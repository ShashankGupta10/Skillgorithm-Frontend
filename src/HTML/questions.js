// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    question:
      " Which data structure is best suited for implementing a LIFO (Last-In-First-Out) behavior?",
    answer: "Stack",
    explanation:
      "A stack is a data structure that follows the LIFO principle, where the last element added is the first one to be removed. This makes it suitable for tasks like function call management and tracking recent items.",
    options: ["Queue", "Stack", "Linked List", "Binary Tree"],
  },
  {
    question:
      "What is the time complexity of searching for an element in a balanced binary search tree?",
    answer: "O(log N)",
    explanation:
      "In a balanced binary search tree, each comparison divides the search space in half. This results in a time complexity of O(log N) for searching an element, where N is the number of elements in the tree",
    options: [" O(1)", "O(log N)", "O(N)", "O(N^2)"],
  },
  {
    question:
      "Which sorting algorithm has the best average and worst-case time complexity?",
    answer: " Merge Sort",
    explanation:
      "Merge Sort has a consistent time complexity of O(N log N) for both average and worst-case scenarios, making it more efficient than Bubble Sort, Quick Sort, and Insertion Sort in most cases.",
    options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Merge Sort"],
  },
  {
    question:
      "Which data structure allows for efficient insertion and deletion of elements at both ends?",
    answer: "Linked List",
    explanation:
      "A doubly-linked list allows for efficient insertion and deletion of elements at both the beginning and the end because it provides direct access to adjacent elements.",
    options: ["Array", "Linked List", "Stack", "Queue"],
  },
  {
    question: "In the context of dynamic programming, what is memoization?",
    answer:
      "A method to store precomputed results to avoid redundant calculations",
    explanation:
      "Memoization involves storing previously computed results to avoid redundant calculations in dynamic programming. It optimizes recursive algorithms by reusing solutions to subproblems to improve time complexity.",
    options: [
      "A method to store precomputed results to avoid redundant calculations",
      "A method for dividing a problem into smaller subproblems",
      "A data structure used for caching",
      " A sorting technique",
    ],
  },

  {
    question:
      "Which data structure is typically used to implement a priority queue?",
    answer: "Heap",
    explanation:
      "A heap is a data structure that allows efficient retrieval of the element with the highest (or lowest) priority, making it suitable for implementing a priority queue.",
    options: ["Array", "Linked List", "Heap", "Hash Table"],
  },
  {
    question:
      "What is the time complexity of the best-known algorithms for finding the shortest path in a weighted graph?",
    answer: "O(E + V log V)",
    explanation:
      "The best-known algorithms for finding the shortest path in a weighted graph, like Dijkstra's and A* algorithms, have a time complexity of O(E + V log V), where E is the number of edges and V is the number of vertices.",
    options: ["O(N)", "O(N^2)", "O(N log N)", "O(E + V log V)"],
  },
  {
    question:
      "In which data structure is the order of elements not based on their values, but on the order in which they were added?",
    answer: "Queue",
    explanation:
      "In a queue, elements are ordered based on the order in which they were added, following the FIFO (First-In-First-Out) principle.",
    options: ["Stack", "Queue", "Set", "Binary Search Tree"],
  },
  {
    question:
      " Which sorting algorithm has the best average-case time complexity for a small number of elements, typically less than 10?",
    answer: "Insertion Sort",
    explanation:
      " Insertion Sort performs efficiently for small arrays and lists and has a time complexity of O(N^2). For a small number of elements, it can outperform more complex algorithms.",
    options: ["Quick Sort", "Insertion Sort", "Merge Sort", "Heap Sort"],
  },
  {
    question:
      " What data structure is used to represent a hierarchical structure with a root node and child nodes?",
    answer: "Tree",
    explanation:
      "A tree data structure is used to represent a hierarchical structure with a root node and child nodes, making it suitable for various applications like directory structures, family trees, and computer science parsing.",
    options: [
      "Array",
      "Stack",
      "Queue",
      "Tree",
    ],
  },
];

function getRandomQuestions(arr, numQuestions) {
    // Create a copy of the original array to avoid modifying it
    const copyArray = [...arr];
    
    // Initialize an empty array to store the selected questions
    const selectedQuestions = [];
  
    // Loop to select random questions
    for (let i = 0; i < numQuestions; i++) {
      const randomIndex = Math.floor(Math.random() * copyArray.length);
      const randomQuestion = copyArray.splice(randomIndex, 1)[0];
      selectedQuestions.push(randomQuestion);
    }
  
    return selectedQuestions;
  }
  