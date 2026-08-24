/**
 * Portfolio Projects Data - Kshitij Tiwari
 * ----------------------------------------------------
 * You can easily add, edit, or remove projects.
 */

const portfolioProjects = [
  {
    id: "neural-vision-segmentation",
    title: "NeuroSeg: Real-Time Edge Segmentation",
    category: "aiml",
    categoryLabel: "AI / ML & Computer Vision",
    shortDescription: "Lightweight semantic segmentation model optimized with TensorRT & ONNX for low-latency edge inference on embedded devices.",
    image: "assets/images/project-1.svg",
    tags: ["PyTorch", "Python", "OpenCV", "TensorRT", "CUDA"],
    liveUrl: "projects/neuroseg/index.html",
    githubUrl: "https://github.com/yourusername/neuroseg",
    highlights: [
      "Trained custom MobileNetV3-UNet architecture achieving 82.4% mIoU on benchmark dataset.",
      "Quantized FP32 weights to INT8, decreasing inference latency from 45ms to 11ms on edge GPUs.",
      "Engineered automated synthetic data augmentation pipeline boosting generalization."
    ],
    architecture: "PyTorch training pipeline with automated ONNX export and high-throughput Python C++ binding inference wrapper.",
    challenges: "Minimizing accuracy degradation during INT8 post-training quantization."
  },
  {
    id: "algo-lens-visualizer",
    title: "AlgoLens: Interactive Algorithm Workbench",
    category: "systems",
    categoryLabel: "Competitive Programming & Systems",
    shortDescription: "High-performance interactive visualizer for graph algorithms, dynamic programming tables, and memory allocation graphs.",
    image: "assets/images/project-3.svg",
    tags: ["C++", "WebAssembly", "TypeScript", "React", "Canvas API"],
    liveUrl: "projects/algolens/index.html",
    githubUrl: "https://github.com/yourusername/algolens",
    highlights: [
      "Compiled core C++ graph traversal and DP engines into WebAssembly for 60 FPS animation rendering.",
      "Implemented step-by-step state rewind and memory pointer inspection.",
      "Benchmarked execution performance against standard browser JavaScript engines with 4x speedup."
    ],
    architecture: "C++ core compiled via Emscripten into WASM modules, rendered through an optimized HTML5 2D Canvas loop.",
    challenges: "Handling bidirectional step-by-step state history without high memory allocation overhead."
  },
  {
    id: "sentitrack-llm-monitor",
    title: "SentiTrack: Multilingual Sentiment Hub",
    category: "aiml",
    categoryLabel: "AI / NLP & Transformers",
    shortDescription: "Distributed NLP pipeline processing live social streams with transformer embeddings, topic modeling, and sentiment metrics.",
    image: "assets/images/project-2.svg",
    tags: ["Hugging Face", "Python", "FastAPI", "PostgreSQL", "Docker"],
    liveUrl: "projects/sentitrack/index.html",
    githubUrl: "https://github.com/yourusername/sentitrack",
    highlights: [
      "Fine-tuned RoBERTa transformer for domain-specific multi-class sentiment classification.",
      "Built asynchronous ingestion worker pool using Celery & Redis to handle 5k requests/min.",
      "Packaged end-to-end service into Docker containers for single-command orchestration."
    ],
    architecture: "FastAPI REST API with asynchronous transformer batch inference and PostgreSQL timeseries storage.",
    challenges: "Balancing GPU batch sizing to achieve optimal throughput without exceeding VRAM bounds."
  },
  {
    id: "devpulse-cloud-platform",
    title: "CodeForge: Online Competitive Arena",
    category: "web",
    categoryLabel: "Full Stack & Web",
    shortDescription: "Real-time collaborative code execution sandbox with custom sandboxed Docker runners and live socket feedback.",
    image: "assets/images/project-4.svg",
    tags: ["Node.js", "Docker", "WebSockets", "React", "Tailwind CSS"],
    liveUrl: "projects/codeforge/index.html",
    githubUrl: "https://github.com/yourusername/codeforge",
    highlights: [
      "Built isolated Linux container sandbox executing untrusted user code with CPU & memory limits.",
      "Delivered instant execution test-case outputs through low-overhead WebSocket streams.",
      "Engineered automated rating calculation engine implementing Glicko-2 algorithm."
    ],
    architecture: "React frontend communicating with Node.js orchestrator and Docker daemon socket with strict cgroups isolation.",
    challenges: "Securing multi-tenant container runtime against malicious system calls and fork-bombs."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { portfolioProjects };
}
