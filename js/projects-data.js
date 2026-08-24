/**
 * Portfolio Projects Data - Kshitij Tiwari
 * ----------------------------------------------------
 * You can easily add, edit, or remove projects.
 */

const portfolioProjects = [
  {
    id: "modern-analytics-dashboard",
    title: "Interactive Analytics & Operations Dashboard",
    category: "web",
    categoryLabel: "Full Stack & Web Application",
    shortDescription: "A high-performance modern web dashboard featuring real-time data visual metrics, user management, and seamless responsive design deployed on Vercel.",
    image: "assets/images/project-1.svg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://dashboard-two-flax-98.vercel.app/",
    githubUrl: "https://github.com/kshitij-tiwari1845",
    highlights: [
      "Designed and deployed a responsive analytics dashboard with modern modular UI components.",
      "Optimized client-side rendering and asset delivery for fast load times on Vercel edge network.",
      "Constructed clean interactive data charts, state handling, and accessible layout navigation."
    ],
    architecture: "Component-driven React/Next.js architecture with Tailwind CSS utility styling and Vercel edge deployment.",
    challenges: "Building fluid responsive layouts and managing interactive client state without unnecessary re-renders."
  },
  {
    id: "algo-lens-visualizer",
    title: "AlgoLens: Interactive Algorithm Workbench",
    category: "systems",
    categoryLabel: "Competitive Programming & DSA",
    shortDescription: "Interactive workbench for graph traversal, dynamic programming tables, and algorithm execution tracing in C & Python.",
    image: "assets/images/project-3.svg",
    tags: ["C", "Python", "Data Structures", "Algorithms", "Canvas"],
    liveUrl: "projects/algolens/index.html",
    githubUrl: "https://github.com/kshitij-tiwari1845",
    highlights: [
      "Implemented core shortest-path and recursion tree visualizer with step-by-step state tracing.",
      "Benchmarked memory footprint and time complexity against standard test cases.",
      "Created interactive controls for stepping forward and inspecting vertex distances."
    ],
    architecture: "Modular algorithmic engine built with clean logic, state history arrays, and HTML5 Canvas rendering.",
    challenges: "Visualizing complex recursive calls and graph cycles cleanly on screen."
  },
  {
    id: "neural-vision-segmentation",
    title: "NeuroSeg: Real-Time Edge Segmentation",
    category: "aiml",
    categoryLabel: "AI / ML & Computer Vision",
    shortDescription: "Lightweight semantic segmentation experiments built with Python, PyTorch, and OpenCV exploring edge computer vision.",
    image: "assets/images/project-2.svg",
    tags: ["Python", "PyTorch", "OpenCV", "NumPy", "Machine Learning"],
    liveUrl: "projects/neuroseg/index.html",
    githubUrl: "https://github.com/kshitij-tiwari1845",
    highlights: [
      "Explored neural network architectures for computer vision and object mask segmentation.",
      "Engineered automated data preprocessing and augmentation scripts in Python.",
      "Analyzed model inference efficiency and metric trade-offs across validation sets."
    ],
    architecture: "Python training and evaluation scripts with automated dataset loaders and matrix evaluation utilities.",
    challenges: "Managing matrix batch sizes to prevent memory overflows during feature extraction."
  },
  {
    id: "sentitrack-llm-monitor",
    title: "SentiTrack: NLP Sentiment Hub",
    category: "aiml",
    categoryLabel: "AI / NLP & Python",
    shortDescription: "Natural Language Processing experiments in Python exploring transformer tokenization, text embeddings, and sentiment classification.",
    image: "assets/images/project-4.svg",
    tags: ["Python", "NLP", "Scikit-Learn", "FastAPI", "Pandas"],
    liveUrl: "projects/sentitrack/index.html",
    githubUrl: "https://github.com/kshitij-tiwari1845",
    highlights: [
      "Built text tokenization and sentiment classification pipelines using Python NLP libraries.",
      "Implemented clean data cleaning and vocabulary extraction algorithms.",
      "Benchmarked inference confidence across diverse sentence categories."
    ],
    architecture: "Python analytical scripts with matrix tokenizers and modular feature vector pipelines.",
    challenges: "Handling multilingual and nuanced sentiment contexts effectively."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { portfolioProjects };
}
