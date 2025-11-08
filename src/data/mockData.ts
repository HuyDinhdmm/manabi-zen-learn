import { Goal } from "@/types/goal";
import { Quiz } from "@/types/quiz";

export const mockGoals: Goal[] = [
  // Completed goals (100% progress) - Green colors
  {
    id: "1",
    title: "Master Machine Learning Fundamentals",
    description: "Complete Andrew Ng's ML course and build 3 practice projects",
    category: "theory",
    targetHours: 40,
    currentHours: 40,
    deadline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "4",
    title: "Linear Regression Implementation",
    description: "Code gradient descent from scratch and visualize the results",
    category: "practice",
    targetHours: 10,
    currentHours: 10,
    deadline: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "11",
    title: "Git & Version Control Mastery",
    description: "Advanced Git workflows, branching strategies, and collaborative development practices",
    category: "skill",
    targetHours: 12,
    currentHours: 12,
    deadline: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "13",
    title: "Python Web Scraping Project",
    description: "Build a comprehensive web scraper with BeautifulSoup, Selenium, and data storage",
    category: "practice",
    targetHours: 18,
    currentHours: 18,
    deadline: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "20",
    title: "Advanced CSS & Animations",
    description: "Master CSS Grid, Flexbox, animations, and modern layout techniques",
    category: "skill",
    targetHours: 20,
    currentHours: 20,
    deadline: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },

  // Nearly completed goals (80-95% progress) - Blue colors
  {
    id: "2",
    title: "Build Portfolio Website",
    description: "Create a responsive portfolio showcasing 5 projects with modern design",
    category: "project",
    targetHours: 20,
    currentHours: 18,
    deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    title: "React Advanced Patterns",
    description: "Learn custom hooks, context API, and performance optimization",
    category: "theory",
    targetHours: 15,
    currentHours: 14,
    deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "5",
    title: "Data Structures & Algorithms",
    description: "Practice 50 LeetCode problems focusing on arrays, trees, and graphs",
    category: "practice",
    targetHours: 30,
    currentHours: 27,
    deadline: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 17 * 24 * 60 * 60 * 1000).toISOString(),
  },

  // In progress goals (40-70% progress) - Orange/Yellow colors
  {
    id: "6",
    title: "E-commerce Dashboard Project",
    description: "Build a full-stack admin dashboard with real-time analytics",
    category: "project",
    targetHours: 50,
    currentHours: 32,
    deadline: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "8",
    title: "Database Design & Optimization",
    description: "Learn PostgreSQL, indexing strategies, and query optimization techniques",
    category: "theory",
    targetHours: 35,
    currentHours: 21,
    deadline: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "12",
    title: "AWS Cloud Architecture",
    description: "Learn cloud services, deployment strategies, and infrastructure as code",
    category: "skill",
    targetHours: 40,
    currentHours: 24,
    deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 19 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "18",
    title: "Computer Vision with OpenCV",
    description: "Image processing, object detection, and face recognition applications",
    category: "theory",
    targetHours: 38,
    currentHours: 22,
    deadline: new Date(Date.now() + 27 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "19",
    title: "Real-time Chat Application",
    description: "Build a scalable chat app with Socket.io, Redis, and user authentication",
    category: "project",
    targetHours: 42,
    currentHours: 28,
    deadline: new Date(Date.now() + 17 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
  },

  // Early stage goals (10-35% progress) - Purple/Red colors
  {
    id: "7",
    title: "TypeScript Mastery",
    description: "Deep dive into advanced TypeScript features, generics, and type manipulation",
    category: "skill",
    targetHours: 25,
    currentHours: 7,
    deadline: new Date(Date.now() + 40 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "9",
    title: "Mobile App with React Native",
    description: "Build a cross-platform mobile app with navigation, state management, and API integration",
    category: "project",
    targetHours: 60,
    currentHours: 12,
    deadline: new Date(Date.now() + 55 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "10",
    title: "System Design Fundamentals",
    description: "Understand scalability, load balancing, caching, and microservices architecture",
    category: "theory",
    targetHours: 45,
    currentHours: 13,
    deadline: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "14",
    title: "UI/UX Design Principles",
    description: "Study design systems, user research, and prototyping with Figma",
    category: "theory",
    targetHours: 30,
    currentHours: 9,
    deadline: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "16",
    title: "DevOps & CI/CD Pipeline",
    description: "Set up automated testing, deployment pipelines with GitHub Actions and Docker",
    category: "skill",
    targetHours: 28,
    currentHours: 11,
    deadline: new Date(Date.now() + 23 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 16 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "17",
    title: "GraphQL API Development",
    description: "Build efficient APIs with GraphQL, Apollo Server, and real-time subscriptions",
    category: "practice",
    targetHours: 22,
    currentHours: 6,
    deadline: new Date(Date.now() + 13 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString(),
  },

  // Just started goals (0-10% progress) - Gray colors
  {
    id: "15",
    title: "Blockchain Development",
    description: "Learn smart contracts, Web3.js, and build a decentralized application",
    category: "project",
    targetHours: 70,
    currentHours: 2,
    deadline: new Date(Date.now() + 85 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "21",
    title: "Vue.js Ecosystem Mastery",
    description: "Learn Vue 3, Composition API, Pinia, and build modern applications",
    category: "theory",
    targetHours: 32,
    currentHours: 1,
    deadline: new Date(Date.now() + 38 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "22",
    title: "Microservices with Spring Boot",
    description: "Build scalable microservices architecture with Spring Boot and Docker",
    category: "project",
    targetHours: 55,
    currentHours: 3,
    deadline: new Date(Date.now() + 65 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "23",
    title: "Machine Learning with Python",
    description: "Scikit-learn, Pandas, NumPy for data analysis and predictive modeling",
    category: "practice",
    targetHours: 36,
    currentHours: 1,
    deadline: new Date(Date.now() + 42 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "24",
    title: "Cloud Security Fundamentals",
    description: "Learn AWS Security, IAM, encryption, and compliance best practices",
    category: "skill",
    targetHours: 26,
    currentHours: 0,
    deadline: new Date(Date.now() + 33 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const mockResources = [
  {
    id: 1,
    title: "Introduction to Neural Networks",
    type: "theory" as const,
    description: "Comprehensive guide covering perceptrons, activation functions, and backpropagation.",
    tags: ["#AI", "#ML", "#deep-learning"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    content: "Neural networks are computing systems inspired by biological neural networks. They consist of interconnected nodes (neurons) that process information using a connectionist approach to computation.",
    links: [
      { title: "Neural Networks Basics - Stanford", url: "https://cs231n.github.io/" },
      { title: "Deep Learning Book - Goodfellow", url: "https://www.deeplearningbook.org/" },
      { title: "3Blue1Brown Neural Networks", url: "https://www.youtube.com/watch?v=aircAruvnKk" },
    ],
  },
  {
    id: 2,
    title: "Building RESTful APIs with Node.js",
    type: "case-study" as const,
    description: "Real-world case study of designing scalable APIs with Express and MongoDB.",
    tags: ["#backend", "#nodejs", "#api"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    content: "Learn how to build production-ready REST APIs using Node.js and Express. This case study explores authentication, data validation, error handling, and MongoDB integration.",
    links: [
      { title: "Express.js Documentation", url: "https://expressjs.com/" },
      { title: "MongoDB Node.js Driver", url: "https://mongodb.github.io/node-mongodb-native/" },
      { title: "RESTful API Design Guide", url: "https://restfulapi.net/" },
    ],
  },
  {
    id: 3,
    title: "Linear Regression in Practice",
    type: "project" as const,
    video: "https://youtu.be/sample-regression-demo",
    description: "A small Python project demonstrating regression model visualization.",
    tags: ["#AI", "#ML", "#theory-to-practice"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    content: "Implement linear regression from scratch using Python and NumPy. Visualize the cost function, gradient descent optimization, and prediction results.",
    links: [
      { title: "scikit-learn Linear Models", url: "https://scikit-learn.org/stable/modules/linear_model.html" },
      { title: "Linear Regression Math Explained", url: "https://ml-cheatsheet.readthedocs.io/en/latest/linear_regression.html" },
      { title: "Python NumPy Tutorial", url: "https://numpy.org/doc/stable/user/quickstart.html" },
    ],
  },
  {
    id: 4,
    title: "How Gradient Descent Works",
    type: "video" as const,
    video: "https://youtu.be/sample-gradient-descent",
    description: "A 3-minute animation explaining how gradient descent optimizes models.",
    tags: ["#AI", "#math", "#learning"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
    content: "Gradient descent is an optimization algorithm used to minimize the cost function in machine learning models. Learn how it iteratively adjusts parameters to find optimal solutions.",
    links: [
      { title: "Gradient Descent Visual", url: "https://ml-cheatsheet.readthedocs.io/en/latest/gradient_descent.html" },
      { title: "3Blue1Brown Calculus Series", url: "https://www.youtube.com/watch?v=WUvTyaaNkzM" },
      { title: "Andrew Ng ML Course", url: "https://www.coursera.org/learn/machine-learning" },
    ],
  },
  {
    id: 5,
    title: "React Performance Optimization",
    type: "theory" as const,
    description: "Learn memoization, lazy loading, and code splitting techniques.",
    tags: ["#react", "#performance", "#frontend"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    content: "Master React performance optimization techniques including useMemo, useCallback, React.memo, lazy loading, code splitting, and virtual scrolling for large lists.",
    links: [
      { title: "React Performance Docs", url: "https://react.dev/learn/render-and-commit" },
      { title: "Web.dev React Guide", url: "https://web.dev/react/" },
      { title: "Kent C. Dodds Performance", url: "https://kentcdodds.com/blog/optimize-react-re-renders" },
    ],
  },
  {
    id: 6,
    title: "Full-Stack E-commerce Build",
    type: "project" as const,
    description: "Complete tutorial building an e-commerce site with payment integration.",
    tags: ["#fullstack", "#project", "#ecommerce"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop",
    content: "Build a complete e-commerce platform with product catalog, shopping cart, user authentication, payment processing with Stripe, and order management.",
    links: [
      { title: "Stripe Payments Guide", url: "https://stripe.com/docs/payments" },
      { title: "Next.js Commerce Demo", url: "https://nextjs.org/commerce" },
      { title: "E-commerce Best Practices", url: "https://www.shopify.com/blog/ecommerce-website-design" },
    ],
  },
  {
    id: 7,
    title: "Understanding Docker Containers",
    type: "video" as const,
    video: "https://youtu.be/sample-docker",
    description: "Visual guide to containerization and deployment workflows.",
    tags: ["#devops", "#docker", "#containers"],
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=300&fit=crop",
    content: "Learn Docker fundamentals, containerization concepts, Dockerfile creation, Docker Compose for multi-container apps, and deployment strategies.",
    links: [
      { title: "Docker Official Docs", url: "https://docs.docker.com/get-started/" },
      { title: "Docker Compose Tutorial", url: "https://docs.docker.com/compose/" },
      { title: "Kubernetes Basics", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
    ],
  },
  {
    id: 8,
    title: "Airbnb's Design System Case Study",
    type: "case-study" as const,
    description: "How Airbnb built and scaled their design system across products.",
    tags: ["#design", "#ui-ux", "#case-study"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    content: "Explore how Airbnb created and maintained a unified design language across web, iOS, and Android. Learn about their component library, design tokens, and collaboration processes.",
    links: [
      { title: "Airbnb Design Stories", url: "https://airbnb.design/" },
      { title: "Design Systems Handbook", url: "https://www.designbetter.co/design-systems-handbook" },
      { title: "Material Design Guidelines", url: "https://m3.material.io/" },
    ],
  },
  {
    id: 9,
    title: "TypeScript Advanced Patterns",
    type: "theory" as const,
    description: "Master conditional types, mapped types, and utility types for robust applications.",
    tags: ["#typescript", "#types", "#advanced"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop",
    content: "Dive deep into TypeScript's advanced type system including conditional types, mapped types, template literal types, and utility types. Learn how to create type-safe, maintainable applications.",
    links: [
      { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/" },
      { title: "Advanced TypeScript Types", url: "https://blog.logrocket.com/typescript-advanced-types/" },
      { title: "TypeScript Utility Types", url: "https://www.typescriptlang.org/docs/handbook/utility-types.html" },
    ],
  },
  {
    id: 10,
    title: "Netflix's Microservices Architecture",
    type: "case-study" as const,
    description: "Deep dive into how Netflix handles 800+ microservices at scale.",
    tags: ["#microservices", "#scalability", "#architecture"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    content: "Explore Netflix's journey from monolithic to microservices architecture. Learn about their service mesh, chaos engineering, and how they handle millions of concurrent users.",
    links: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com/" },
      { title: "Microservices Patterns", url: "https://microservices.io/" },
      { title: "Service Mesh with Istio", url: "https://istio.io/latest/docs/" },
    ],
  },
  {
    id: 11,
    title: "Building a GraphQL Server",
    type: "project" as const,
    video: "https://youtu.be/sample-graphql-server",
    description: "Step-by-step tutorial creating a GraphQL API with Apollo Server and Prisma.",
    tags: ["#graphql", "#apollo", "#backend"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    content: "Build a modern GraphQL API from scratch using Apollo Server, Prisma ORM, and PostgreSQL. Learn about schemas, resolvers, subscriptions, and authentication.",
    links: [
      { title: "Apollo Server Docs", url: "https://www.apollographql.com/docs/apollo-server/" },
      { title: "Prisma Documentation", url: "https://www.prisma.io/docs/" },
      { title: "GraphQL Specification", url: "https://spec.graphql.org/" },
    ],
  },
  {
    id: 12,
    title: "CSS Grid vs Flexbox Explained",
    type: "video" as const,
    video: "https://youtu.be/sample-css-layout",
    description: "Visual comparison and best practices for modern CSS layout techniques.",
    tags: ["#css", "#layout", "#frontend"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    content: "Understand when to use CSS Grid vs Flexbox for different layout scenarios. Learn about 1D vs 2D layouts, alignment, and responsive design patterns.",
    links: [
      { title: "CSS Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
      { title: "Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
      { title: "Grid vs Flexbox", url: "https://web.dev/one-dimensional-layouts/" },
    ],
  },
  {
    id: 13,
    title: "PostgreSQL Performance Tuning",
    type: "theory" as const,
    description: "Learn indexing strategies, query optimization, and database monitoring.",
    tags: ["#database", "#postgresql", "#optimization"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop",
    content: "Master PostgreSQL performance optimization including index design, query planning, connection pooling, and monitoring tools for production databases.",
    links: [
      { title: "PostgreSQL Documentation", url: "https://www.postgresql.org/docs/" },
      { title: "Database Performance Tips", url: "https://www.postgresql.org/docs/current/performance-tips.html" },
      { title: "pgAdmin Tutorial", url: "https://www.pgadmin.org/docs/" },
    ],
  },
  {
    id: 14,
    title: "Spotify's Recommendation Engine",
    type: "case-study" as const,
    description: "How Spotify uses machine learning to personalize music recommendations.",
    tags: ["#ml", "#recommendation", "#spotify"],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    content: "Discover how Spotify's recommendation system works, from collaborative filtering to deep learning models. Learn about their approach to music discovery and personalization.",
    links: [
      { title: "Spotify Engineering Blog", url: "https://engineering.atspotify.com/" },
      { title: "Recommendation Systems Guide", url: "https://www.coursera.org/learn/recommender-systems" },
      { title: "Music Information Retrieval", url: "https://www.ismir.net/" },
    ],
  },
  {
    id: 15,
    title: "React Native Mobile App",
    type: "project" as const,
    description: "Build a cross-platform mobile app with navigation and state management.",
    tags: ["#react-native", "#mobile", "#cross-platform"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    content: "Create a complete React Native application with navigation, state management using Redux Toolkit, and native device features. Deploy to both iOS and Android.",
    links: [
      { title: "React Native Docs", url: "https://reactnative.dev/docs/getting-started" },
      { title: "React Navigation", url: "https://reactnavigation.org/" },
      { title: "Redux Toolkit", url: "https://redux-toolkit.js.org/" },
    ],
  },
  {
    id: 16,
    title: "AWS Services Overview",
    type: "video" as const,
    video: "https://youtu.be/sample-aws-overview",
    description: "Complete guide to AWS core services and when to use each one.",
    tags: ["#aws", "#cloud", "#devops"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    content: "Comprehensive overview of AWS services including EC2, S3, Lambda, RDS, and more. Learn about cloud architecture patterns and cost optimization strategies.",
    links: [
      { title: "AWS Documentation", url: "https://docs.aws.amazon.com/" },
      { title: "AWS Free Tier", url: "https://aws.amazon.com/free/" },
      { title: "AWS Well-Architected", url: "https://aws.amazon.com/architecture/well-architected/" },
    ],
  },
  {
    id: 17,
    title: "Design Thinking Process",
    type: "theory" as const,
    description: "Learn the 5-stage design thinking methodology for user-centered solutions.",
    tags: ["#design", "#ux", "#methodology"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
    content: "Master the design thinking process: Empathize, Define, Ideate, Prototype, and Test. Learn how to apply human-centered design to solve complex problems.",
    links: [
      { title: "IDEO Design Thinking", url: "https://www.ideou.com/pages/design-thinking" },
      { title: "Stanford d.school", url: "https://dschool.stanford.edu/" },
      { title: "Figma Design Systems", url: "https://www.figma.com/design-systems/" },
    ],
  },
  {
    id: 18,
    title: "Uber's Real-time System",
    type: "case-study" as const,
    description: "How Uber handles millions of real-time location updates and matching.",
    tags: ["#real-time", "#system-design", "#uber"],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    content: "Explore how Uber built their real-time system for driver-rider matching, including their use of Apache Kafka, microservices, and geospatial data processing.",
    links: [
      { title: "Uber Engineering Blog", url: "https://eng.uber.com/" },
      { title: "Apache Kafka Guide", url: "https://kafka.apache.org/documentation/" },
      { title: "Real-time Systems Design", url: "https://www.highload.ru/en/2022/abstracts/8666" },
    ],
  },
  {
    id: 19,
    title: "Web Scraping with Python",
    type: "project" as const,
    video: "https://youtu.be/sample-web-scraping",
    description: "Build a comprehensive web scraper with BeautifulSoup and Selenium.",
    tags: ["#python", "#scraping", "#automation"],
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
    content: "Learn web scraping techniques using Python libraries like BeautifulSoup, Selenium, and Scrapy. Handle dynamic content, anti-bot measures, and data extraction.",
    links: [
      { title: "BeautifulSoup Documentation", url: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/" },
      { title: "Selenium WebDriver", url: "https://selenium-python.readthedocs.io/" },
      { title: "Scrapy Framework", url: "https://docs.scrapy.org/" },
    ],
  },
  {
    id: 20,
    title: "Git Advanced Workflows",
    type: "video" as const,
    video: "https://youtu.be/sample-git-workflows",
    description: "Master Git Flow, GitHub Flow, and advanced branching strategies.",
    tags: ["#git", "#workflow", "#collaboration"],
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
    content: "Advanced Git techniques including branching strategies, merge vs rebase, interactive rebasing, cherry-picking, and collaboration workflows for teams.",
    links: [
      { title: "Git Documentation", url: "https://git-scm.com/doc" },
      { title: "GitHub Flow", url: "https://docs.github.com/en/get-started/quickstart/github-flow" },
      { title: "Atlassian Git Tutorials", url: "https://www.atlassian.com/git/tutorials" },
    ],
  },
  {
    id: 21,
    title: "System Design Fundamentals",
    type: "theory" as const,
    description: "Learn scalability, load balancing, caching, and microservices architecture.",
    tags: ["#system-design", "#scalability", "#architecture"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    content: "Master system design principles including horizontal vs vertical scaling, load balancing strategies, caching mechanisms, and distributed system patterns.",
    links: [
      { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
      { title: "High Scalability", url: "http://highscalability.com/" },
      { title: "Designing Data-Intensive Applications", url: "https://dataintensive.net/" },
    ],
  },
  {
    id: 22,
    title: "Slack's Communication Platform",
    type: "case-study" as const,
    description: "How Slack built a real-time messaging platform for millions of users.",
    tags: ["#real-time", "#messaging", "#slack"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    content: "Learn how Slack architected their real-time messaging platform, including WebSocket connections, message queuing, and handling millions of concurrent users.",
    links: [
      { title: "Slack Engineering Blog", url: "https://slack.engineering/" },
      { title: "WebSocket Guide", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
      { title: "Real-time Communication", url: "https://ably.com/topic/real-time" },
    ],
  },
  {
    id: 23,
    title: "Blockchain DApp Development",
    type: "project" as const,
    description: "Build a decentralized application with smart contracts and Web3.js.",
    tags: ["#blockchain", "#smart-contracts", "#web3"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    content: "Create a decentralized application (DApp) using Ethereum smart contracts, Solidity, and Web3.js. Learn about gas optimization, testing, and deployment.",
    links: [
      { title: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
      { title: "Web3.js Library", url: "https://web3js.readthedocs.io/" },
      { title: "OpenZeppelin Contracts", url: "https://docs.openzeppelin.com/contracts/" },
    ],
  },
  {
    id: 24,
    title: "Kubernetes Orchestration",
    type: "video" as const,
    video: "https://youtu.be/sample-kubernetes",
    description: "Complete guide to container orchestration with Kubernetes.",
    tags: ["#kubernetes", "#containers", "#devops"],
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=300&fit=crop",
    content: "Master Kubernetes container orchestration including pods, services, deployments, ingress, and advanced features like auto-scaling and service mesh.",
    links: [
      { title: "Kubernetes Documentation", url: "https://kubernetes.io/docs/" },
      { title: "Kubernetes Tutorial", url: "https://kubernetes.io/docs/tutorials/" },
      { title: "Helm Package Manager", url: "https://helm.sh/" },
    ],
  },
  {
    id: 25,
    title: "Computer Vision Basics",
    type: "theory" as const,
    description: "Introduction to image processing, object detection, and OpenCV.",
    tags: ["#computer-vision", "#opencv", "#image-processing"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    content: "Learn computer vision fundamentals including image processing, edge detection, object recognition, and face detection using OpenCV and Python.",
    links: [
      { title: "OpenCV Documentation", url: "https://docs.opencv.org/" },
      { title: "Computer Vision Course", url: "https://www.coursera.org/learn/computer-vision-basics" },
      { title: "PyImageSearch Tutorials", url: "https://pyimagesearch.com/" },
    ],
  },
  {
    id: 26,
    title: "Instagram's Photo Sharing",
    type: "case-study" as const,
    description: "How Instagram scaled to handle billions of photos and videos.",
    tags: ["#scalability", "#media", "#instagram"],
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop",
    content: "Explore Instagram's architecture evolution, from simple photo sharing to handling billions of users, stories, reels, and real-time features.",
    links: [
      { title: "Instagram Engineering", url: "https://instagram-engineering.com/" },
      { title: "Media Processing at Scale", url: "https://engineering.fb.com/2020/12/10/production-engineering/instagram-media-processing/" },
      { title: "CDN Best Practices", url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" },
    ],
  },
  {
    id: 27,
    title: "CI/CD Pipeline Setup",
    type: "project" as const,
    video: "https://youtu.be/sample-cicd",
    description: "Automate testing and deployment with GitHub Actions and Docker.",
    tags: ["#cicd", "#automation", "#devops"],
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
    content: "Build a complete CI/CD pipeline using GitHub Actions, automated testing, Docker containerization, and deployment to cloud platforms.",
    links: [
      { title: "GitHub Actions Docs", url: "https://docs.github.com/en/actions" },
      { title: "Docker Documentation", url: "https://docs.docker.com/" },
      { title: "Jenkins Pipeline Guide", url: "https://www.jenkins.io/doc/book/pipeline/" },
    ],
  },
  {
    id: 28,
    title: "Responsive Design Principles",
    type: "video" as const,
    video: "https://youtu.be/sample-responsive",
    description: "Master mobile-first design and flexible layouts.",
    tags: ["#responsive", "#design", "#mobile"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    content: "Learn responsive design principles including mobile-first approach, flexible grids, media queries, and progressive enhancement for all devices.",
    links: [
      { title: "Responsive Web Design", url: "https://web.dev/responsive-web-design-basics/" },
      { title: "CSS Media Queries", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries" },
      { title: "Bootstrap Framework", url: "https://getbootstrap.com/" },
    ],
  },
  {
    id: 29,
    title: "Redis Caching Strategies",
    type: "theory" as const,
    description: "Learn caching patterns, eviction policies, and performance optimization.",
    tags: ["#redis", "#caching", "#performance"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop",
    content: "Master Redis caching strategies including cache-aside, write-through, write-behind patterns, and advanced features like pub/sub and Lua scripting.",
    links: [
      { title: "Redis Documentation", url: "https://redis.io/documentation" },
      { title: "Caching Strategies", url: "https://aws.amazon.com/caching/" },
      { title: "Redis University", url: "https://university.redis.com/" },
    ],
  },
  {
    id: 30,
    title: "WhatsApp's Messaging System",
    type: "case-study" as const,
    description: "How WhatsApp handles end-to-end encryption for billions of messages.",
    tags: ["#encryption", "#messaging", "#whatsapp"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    content: "Discover how WhatsApp scaled their messaging platform to billions of users while maintaining end-to-end encryption, reliability, and real-time delivery.",
    links: [
      { title: "WhatsApp Engineering Blog", url: "https://engineering.fb.com/category/whatsapp/" },
      { title: "Signal Protocol", url: "https://signal.org/docs/" },
      { title: "End-to-End Encryption", url: "https://www.eff.org/encryption" },
    ],
  },
];

// University and Documents Data Structure
export interface Document {
  id: string;
  title: string;
  author: string;
  type: "theory" | "exercise" | "practice" | "exam";
  description: string;
  fileUrl?: string;
  videoUrl?: string;
  tags: string[];
  rating: number;
  reviewCount: number;
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  description: string;
  documents: Document[];
}

export const mockUniversities: University[] = [
  {
    id: "1",
    name: "Đại học Bách Khoa Hà Nội",
    shortName: "ĐH Bách Khoa HN",
    description: "Trường đại học kỹ thuật hàng đầu Việt Nam",
    documents: [
      {
        id: "1-1",
        title: "Cấu Trúc Dữ Liệu và Giải Thuật",
        author: "PGS. TS Nguyễn Đức Nghĩa",
        type: "theory",
        description: "Giáo trình cơ bản về cấu trúc dữ liệu và thuật toán",
        fileUrl: "https://example.com/ds-algo-theory.pdf",
        videoUrl: "https://youtu.be/sample-ds-algo-theory",
        tags: ["#algorithms", "#data-structures", "#programming"],
        rating: 4.8,
        reviewCount: 156
      },
      {
        id: "1-2",
        title: "Bài tập Cấu Trúc Dữ Liệu",
        author: "PGS. TS Nguyễn Đức Nghĩa",
        type: "exercise",
        description: "Tuyển tập bài tập từ cơ bản đến nâng cao",
        fileUrl: "https://example.com/ds-algo-exercises.pdf",
        videoUrl: "https://youtu.be/sample-ds-algo-exercises",
        tags: ["#exercises", "#practice", "#algorithms"],
        rating: 4.6,
        reviewCount: 89
      },
      {
        id: "1-3",
        title: "Đề thi Cấu Trúc Dữ Liệu",
        author: "PGS. TS Nguyễn Đức Nghĩa",
        type: "exam",
        description: "Bộ đề thi các năm gần đây",
        fileUrl: "https://example.com/ds-algo-exams.pdf",
        videoUrl: "https://youtu.be/sample-ds-algo-exams",
        tags: ["#exams", "#test", "#algorithms"],
        rating: 4.7,
        reviewCount: 203
      },
      {
        id: "1-4",
        title: "Hệ Điều Hành",
        author: "TS Trịnh Anh Phúc",
        type: "theory",
        description: "Giáo trình hệ điều hành từ cơ bản đến nâng cao",
        fileUrl: "https://example.com/os-theory.pdf",
        tags: ["#operating-system", "#system", "#theory"],
        rating: 0,
        reviewCount: 0
      },
      {
        id: "1-5",
        title: "Kiến Trúc Máy Tính",
        author: "ThS Đỗ Tuấn Anh",
        type: "theory",
        description: "Nguyên lý hoạt động và kiến trúc máy tính",
        fileUrl: "https://example.com/computer-architecture.pdf",
        tags: ["#computer-architecture", "#hardware", "#system"],
        rating: 0,
        reviewCount: 0
      }
    ]
  },
  {
    id: "2",
    name: "Đại học Bách Khoa TP.HCM",
    shortName: "ĐH Bách Khoa HCM",
    description: "Trường đại học kỹ thuật hàng đầu phía Nam",
    documents: [
      {
        id: "2-1",
        title: "Cấu Trúc Dữ Liệu và Giải Thuật",
        author: "Huỳnh Tấn Đạt",
        type: "theory",
        description: "Giáo trình cấu trúc dữ liệu và thuật toán",
        fileUrl: "https://example.com/ds-algo-hcm-theory.pdf",
        tags: ["#algorithms", "#data-structures", "#programming"],
        rating: 0,
        reviewCount: 0
      },
      {
        id: "2-2",
        title: "Bài tập Thực hành",
        author: "Huỳnh Tấn Đạt",
        type: "practice",
        description: "Bài tập thực hành lập trình",
        fileUrl: "https://example.com/ds-algo-hcm-practice.pdf",
        tags: ["#practice", "#programming", "#exercises"],
        rating: 0,
        reviewCount: 0
      },
      {
        id: "2-3",
        title: "Đề thi Cấu Trúc Dữ Liệu",
        author: "PGS. TS Cao Hoàng Trụ",
        type: "exam",
        description: "Bộ đề thi và đáp án chi tiết",
        fileUrl: "https://example.com/ds-algo-hcm-exams.pdf",
        tags: ["#exams", "#test", "#algorithms"],
        rating: 0,
        reviewCount: 0
      },
      {
        id: "2-4",
        title: "Mạng Máy Tính",
        author: "Trương Tuấn Anh",
        type: "theory",
        description: "Giáo trình mạng máy tính và internet",
        fileUrl: "https://example.com/computer-networks.pdf",
        tags: ["#networking", "#internet", "#communication"],
        rating: 0,
        reviewCount: 0
      }
    ]
  },
  {
    id: "3",
    name: "Đại học Khoa Học Tự Nhiên TP.HCM",
    shortName: "ĐH Khoa Học Tự Nhiên HCM",
    description: "Trường đại học khoa học tự nhiên hàng đầu",
    documents: [
      {
        id: "3-1",
        title: "Cấu Trúc Dữ Liệu và Giải Thuật",
        author: "Phạm Thế Bảo",
        type: "theory",
        description: "Giáo trình cấu trúc dữ liệu và thuật toán",
        fileUrl: "https://example.com/ds-algo-natural-theory.pdf",
        tags: ["#algorithms", "#data-structures", "#programming"],
        rating: 0,
        reviewCount: 0
      },
      {
        id: "3-2",
        title: "Bài tập Cấu Trúc Dữ Liệu",
        author: "ThS Nguyễn Tri Tuấn",
        type: "exercise",
        description: "Tuyển tập bài tập có lời giải chi tiết",
        fileUrl: "https://example.com/ds-algo-natural-exercises.pdf",
        tags: ["#exercises", "#practice", "#algorithms"],
        rating: 0,
        reviewCount: 0
      },
      {
        id: "3-3",
        title: "Thực hành Lập trình",
        author: "Văn Chí Nam, Nguyễn Thị Hồng Nhung, Đặng Nguyễn Đức Tiến",
        type: "practice",
        description: "Bài tập thực hành lập trình C/C++",
        fileUrl: "https://example.com/programming-practice.pdf",
        tags: ["#practice", "#programming", "#c-cpp"],
        rating: 0,
        reviewCount: 0
      },
      {
        id: "3-4",
        title: "Đề thi Cấu Trúc Dữ Liệu",
        author: "TS Bùi Tiến Lên",
        type: "exam",
        description: "Bộ đề thi các năm với đáp án",
        fileUrl: "https://example.com/ds-algo-natural-exams.pdf",
        tags: ["#exams", "#test", "#algorithms"],
        rating: 0,
        reviewCount: 0
      }
    ]
  },
  {
    id: "4",
    name: "Đại học Công Nghệ Thông Tin",
    shortName: "ĐH Công Nghệ TT",
    description: "Trường đại học chuyên về công nghệ thông tin",
    documents: [
      {
        id: "4-1",
        title: "Cấu Trúc Dữ Liệu và Giải Thuật",
        author: "ThS Trịnh Quốc Sơn",
        type: "theory",
        description: "Giáo trình cấu trúc dữ liệu và thuật toán",
        fileUrl: "https://example.com/ds-algo-it-theory.pdf",
        tags: ["#algorithms", "#data-structures", "#programming"],
        rating: 0,
        reviewCount: 0
      },
      {
        id: "4-2",
        title: "Bài tập Thực hành",
        author: "ThS Trịnh Quốc Sơn",
        type: "practice",
        description: "Bài tập thực hành lập trình",
        fileUrl: "https://example.com/ds-algo-it-practice.pdf",
        tags: ["#practice", "#programming", "#exercises"],
        rating: 0,
        reviewCount: 0
      },
      {
        id: "4-3",
        title: "Đề thi Cấu Trúc Dữ Liệu",
        author: "ThS Trịnh Quốc Sơn",
        type: "exam",
        description: "Bộ đề thi và đáp án chi tiết",
        fileUrl: "https://example.com/ds-algo-it-exams.pdf",
        tags: ["#exams", "#test", "#algorithms"],
        rating: 0,
        reviewCount: 0
      }
    ]
  },
  {
    id: "5",
    name: "Học viện Công nghệ Bưu chính Viễn thông",
    shortName: "HV Công Nghệ BCVT",
    description: "Học viện chuyên về công nghệ viễn thông",
    documents: [
      {
        id: "5-1",
        title: "Cấu Trúc Dữ Liệu và Giải Thuật",
        author: "Phan Thị Hà",
        type: "theory",
        description: "Giáo trình cấu trúc dữ liệu và thuật toán",
        fileUrl: "https://example.com/ds-algo-bcvt-theory.pdf",
        tags: ["#algorithms", "#data-structures", "#programming"],
        rating: 0,
        reviewCount: 0
      },
      {
        id: "5-2",
        title: "Bài tập Cấu Trúc Dữ Liệu",
        author: "Phan Thị Hà",
        type: "exercise",
        description: "Tuyển tập bài tập từ cơ bản đến nâng cao",
        fileUrl: "https://example.com/ds-algo-bcvt-exercises.pdf",
        tags: ["#exercises", "#practice", "#algorithms"],
        rating: 0,
        reviewCount: 0
      }
    ]
  },
  {
    id: "6",
    name: "Đại học Cần Thơ",
    shortName: "ĐH Cần Thơ",
    description: "Trường đại học khu vực Đồng bằng sông Cửu Long",
    documents: [
      {
        id: "6-1",
        title: "Cấu Trúc Dữ Liệu và Giải Thuật",
        author: "Giảng viên Khoa CNTT",
        type: "theory",
        description: "Giáo trình cấu trúc dữ liệu và thuật toán",
        fileUrl: "https://example.com/ds-algo-cantho-theory.pdf",
        tags: ["#algorithms", "#data-structures", "#programming"],
        rating: 0,
        reviewCount: 0
      }
    ]
  }
];

// Quiz Data
export const mockQuizzes: Quiz[] = [
  {
    id: "quiz-1",
    title: "Cấu Trúc Dữ Liệu và Giải Thuật - Cơ Bản",
    description: "Kiểm tra kiến thức cơ bản về cấu trúc dữ liệu và thuật toán",
    category: "Algorithms",
    timeLimit: 1800, // 30 minutes
    passingScore: 70,
    tags: ["#algorithms", "#data-structures", "#programming"],
    questions: [
      {
        id: "q1",
        question: "Độ phức tạp thời gian của thuật toán Quick Sort trong trường hợp trung bình là gì?",
        options: [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(log n)"
        ],
        correctAnswer: 1,
        explanation: "Quick Sort có độ phức tạp O(n log n) trong trường hợp trung bình, đây là một trong những thuật toán sắp xếp hiệu quả nhất.",
        difficulty: "medium",
        category: "Sorting"
      },
      {
        id: "q2",
        question: "Cấu trúc dữ liệu nào sử dụng nguyên lý LIFO (Last In First Out)?",
        options: [
          "Queue",
          "Stack",
          "Tree",
          "Graph"
        ],
        correctAnswer: 1,
        explanation: "Stack sử dụng nguyên lý LIFO - phần tử được thêm vào cuối cùng sẽ được lấy ra đầu tiên.",
        difficulty: "easy",
        category: "Data Structures"
      },
      {
        id: "q3",
        question: "Độ phức tạp thời gian để tìm kiếm một phần tử trong Binary Search Tree (cân bằng) là gì?",
        options: [
          "O(n)",
          "O(log n)",
          "O(n log n)",
          "O(1)"
        ],
        correctAnswer: 1,
        explanation: "Binary Search Tree cân bằng có độ phức tạp O(log n) cho thao tác tìm kiếm, vì mỗi lần so sánh sẽ loại bỏ được một nửa cây.",
        difficulty: "medium",
        category: "Trees"
      },
      {
        id: "q4",
        question: "Thuật toán nào sử dụng kỹ thuật chia để trị (Divide and Conquer)?",
        options: [
          "Bubble Sort",
          "Insertion Sort",
          "Merge Sort",
          "Selection Sort"
        ],
        correctAnswer: 2,
        explanation: "Merge Sort sử dụng kỹ thuật chia để trị - chia mảng thành các phần nhỏ hơn, sắp xếp từng phần, sau đó hợp nhất lại.",
        difficulty: "medium",
        category: "Sorting"
      },
      {
        id: "q5",
        question: "Cấu trúc dữ liệu nào phù hợp nhất để implement một hàng đợi (Queue)?",
        options: [
          "Array",
          "Linked List",
          "Stack",
          "Tree"
        ],
        correctAnswer: 1,
        explanation: "Linked List phù hợp để implement Queue vì có thể thêm và xóa phần tử ở cả hai đầu một cách hiệu quả (O(1)).",
        difficulty: "easy",
        category: "Data Structures"
      },
      {
        id: "q6",
        question: "Độ phức tạp không gian của thuật toán Merge Sort là gì?",
        options: [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n²)"
        ],
        correctAnswer: 2,
        explanation: "Merge Sort cần thêm không gian O(n) để lưu trữ mảng tạm trong quá trình hợp nhất (merge).",
        difficulty: "hard",
        category: "Sorting"
      },
      {
        id: "q7",
        question: "Trong thuật toán Dijkstra, cấu trúc dữ liệu nào được sử dụng để lưu trữ các đỉnh chưa được xử lý?",
        options: [
          "Stack",
          "Queue",
          "Priority Queue",
          "Array"
        ],
        correctAnswer: 2,
        explanation: "Priority Queue (Min Heap) được sử dụng trong Dijkstra để luôn lấy đỉnh có khoảng cách ngắn nhất tiếp theo.",
        difficulty: "hard",
        category: "Graphs"
      },
      {
        id: "q8",
        question: "Hash Table có độ phức tạp thời gian trung bình cho thao tác tìm kiếm là gì?",
        options: [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n²)"
        ],
        correctAnswer: 2,
        explanation: "Hash Table có độ phức tạp O(1) trung bình cho thao tác tìm kiếm, đây là một trong những điểm mạnh của cấu trúc dữ liệu này.",
        difficulty: "medium",
        category: "Hash Tables"
      },
      {
        id: "q9",
        question: "Cây nhị phân tìm kiếm (BST) có tính chất nào sau đây?",
        options: [
          "Tất cả các node con trái đều nhỏ hơn node gốc",
          "Tất cả các node con phải đều lớn hơn node gốc",
          "Cả hai đều đúng",
          "Không có tính chất nào"
        ],
        correctAnswer: 2,
        explanation: "BST có cả hai tính chất: node con trái nhỏ hơn node gốc và node con phải lớn hơn node gốc.",
        difficulty: "easy",
        category: "Trees"
      },
      {
        id: "q10",
        question: "Thuật toán nào được sử dụng để tìm đường đi ngắn nhất từ một đỉnh đến tất cả các đỉnh khác trong đồ thị có trọng số dương?",
        options: [
          "BFS",
          "DFS",
          "Dijkstra",
          "Floyd-Warshall"
        ],
        correctAnswer: 2,
        explanation: "Thuật toán Dijkstra được sử dụng để tìm đường đi ngắn nhất từ một đỉnh nguồn đến tất cả các đỉnh khác trong đồ thị có trọng số không âm.",
        difficulty: "hard",
        category: "Graphs"
      }
    ]
  },
  {
    id: "quiz-2",
    title: "JavaScript Fundamentals",
    description: "Kiểm tra kiến thức cơ bản về JavaScript",
    category: "Programming",
    timeLimit: 1200, // 20 minutes
    passingScore: 60,
    tags: ["#javascript", "#programming", "#web"],
    questions: [
      {
        id: "q1",
        question: "Kết quả của đoạn code sau là gì?\n\nconst a = [1, 2, 3];\nconst b = a;\nb.push(4);\nconsole.log(a);",
        options: [
          "[1, 2, 3]",
          "[1, 2, 3, 4]",
          "[4]",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "Trong JavaScript, array được truyền theo reference. Khi gán b = a, cả hai biến đều trỏ đến cùng một mảng. Do đó khi b.push(4), mảng a cũng bị thay đổi.",
        difficulty: "medium",
        category: "Arrays"
      },
      {
        id: "q2",
        question: "Kết quả của '2' + 2 trong JavaScript là gì?",
        options: [
          "4",
          "22",
          "NaN",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "Khi sử dụng toán tử + với một string, JavaScript sẽ chuyển đổi số thành string và thực hiện nối chuỗi, kết quả là '22'.",
        difficulty: "easy",
        category: "Type Coercion"
      },
      {
        id: "q3",
        question: "Phương thức nào sau đây KHÔNG tạo ra một mảng mới?",
        options: [
          "map()",
          "filter()",
          "forEach()",
          "reduce()"
        ],
        correctAnswer: 2,
        explanation: "forEach() không tạo mảng mới, nó chỉ thực hiện một hàm cho mỗi phần tử. map(), filter() và reduce() đều tạo ra giá trị mới.",
        difficulty: "easy",
        category: "Array Methods"
      },
      {
        id: "q4",
        question: "Sự khác biệt giữa let và const là gì?",
        options: [
          "let có thể khai báo lại, const không thể",
          "const có thể thay đổi giá trị, let không thể",
          "Không có sự khác biệt",
          "let dùng cho function, const dùng cho object"
        ],
        correctAnswer: 0,
        explanation: "let cho phép khai báo lại biến trong cùng một scope, còn const không cho phép. Cả hai đều là block-scoped và không thể khai báo lại trong cùng một scope.",
        difficulty: "easy",
        category: "Variables"
      },
      {
        id: "q5",
        question: "Kết quả của đoạn code sau là gì?\n\nsetTimeout(() => console.log('A'), 0);\nconsole.log('B');",
        options: [
          "A B",
          "B A",
          "A",
          "B"
        ],
        correctAnswer: 1,
        explanation: "Do JavaScript event loop, setTimeout được đưa vào callback queue và chỉ thực thi sau khi call stack rỗng. Do đó 'B' sẽ được in trước 'A'.",
        difficulty: "hard",
        category: "Asynchronous"
      }
    ]
  },
  {
    id: "quiz-3",
    title: "React Fundamentals",
    description: "Kiểm tra kiến thức về React và các khái niệm cơ bản",
    category: "Frontend",
    timeLimit: 1500, // 25 minutes
    passingScore: 65,
    tags: ["#react", "#frontend", "#javascript"],
    questions: [
      {
        id: "q1",
        question: "Hook nào được sử dụng để quản lý state trong functional component?",
        options: [
          "useState",
          "useEffect",
          "useContext",
          "useReducer"
        ],
        correctAnswer: 0,
        explanation: "useState là hook cơ bản nhất để quản lý state trong functional component. Các hook khác có mục đích khác nhau.",
        difficulty: "easy",
        category: "Hooks"
      },
      {
        id: "q2",
        question: "Khi nào component sẽ re-render trong React?",
        options: [
          "Khi state thay đổi",
          "Khi props thay đổi",
          "Khi parent component re-render",
          "Tất cả các đáp án trên"
        ],
        correctAnswer: 3,
        explanation: "Component sẽ re-render khi state thay đổi, props thay đổi, hoặc khi parent component re-render (trừ khi được tối ưu với React.memo).",
        difficulty: "medium",
        category: "Rendering"
      },
      {
        id: "q3",
        question: "Sự khác biệt giữa controlled và uncontrolled component là gì?",
        options: [
          "Controlled: state quản lý bởi React, Uncontrolled: state quản lý bởi DOM",
          "Không có sự khác biệt",
          "Controlled dùng cho class component, Uncontrolled dùng cho functional component",
          "Tất cả đều sai"
        ],
        correctAnswer: 0,
        explanation: "Controlled component: React quản lý state của form element thông qua state và onChange. Uncontrolled component: DOM tự quản lý state thông qua ref.",
        difficulty: "medium",
        category: "Forms"
      },
      {
        id: "q4",
        question: "useEffect với dependency array rỗng [] sẽ chạy khi nào?",
        options: [
          "Mỗi lần component render",
          "Chỉ một lần sau khi component mount",
          "Mỗi khi state thay đổi",
          "Không bao giờ chạy"
        ],
        correctAnswer: 1,
        explanation: "useEffect với dependency array rỗng [] chỉ chạy một lần sau khi component mount, tương đương với componentDidMount trong class component.",
        difficulty: "easy",
        category: "Hooks"
      },
      {
        id: "q5",
        question: "React.memo() được sử dụng để làm gì?",
        options: [
          "Tối ưu performance bằng cách memoize component",
          "Quản lý memory",
          "Lưu trữ data",
          "Tạo memo component"
        ],
        correctAnswer: 0,
        explanation: "React.memo() là Higher Order Component để tối ưu performance bằng cách chỉ re-render component khi props thay đổi (shallow comparison).",
        difficulty: "medium",
        category: "Optimization"
      },
      {
        id: "q6",
        question: "Context API được sử dụng để làm gì?",
        options: [
          "Quản lý global state",
          "Truyền data qua nhiều level component mà không cần prop drilling",
          "Thay thế Redux",
          "Tất cả các đáp án trên"
        ],
        correctAnswer: 1,
        explanation: "Context API được sử dụng chủ yếu để tránh prop drilling - truyền data từ component cha xuống component con ở nhiều level mà không cần truyền qua từng level.",
        difficulty: "medium",
        category: "State Management"
      }
    ]
  },
  {
    id: "quiz-4",
    title: "Database & SQL Basics",
    description: "Kiểm tra kiến thức về cơ sở dữ liệu và SQL",
    category: "Database",
    timeLimit: 1800, // 30 minutes
    passingScore: 70,
    tags: ["#database", "#sql", "#backend"],
    questions: [
      {
        id: "q1",
        question: "ACID trong database là viết tắt của gì?",
        options: [
          "Atomicity, Consistency, Isolation, Durability",
          "Access, Control, Integrity, Data",
          "Association, Collection, Index, Definition",
          "Tất cả đều sai"
        ],
        correctAnswer: 0,
        explanation: "ACID là các thuộc tính của transaction trong database: Atomicity (tính nguyên tử), Consistency (tính nhất quán), Isolation (tính cô lập), Durability (tính bền vững).",
        difficulty: "medium",
        category: "Transactions"
      },
      {
        id: "q2",
        question: "Loại JOIN nào trả về tất cả các bản ghi từ bảng bên trái và các bản ghi khớp từ bảng bên phải?",
        options: [
          "INNER JOIN",
          "LEFT JOIN",
          "RIGHT JOIN",
          "FULL JOIN"
        ],
        correctAnswer: 1,
        explanation: "LEFT JOIN trả về tất cả các bản ghi từ bảng bên trái (left table) và các bản ghi khớp từ bảng bên phải. Nếu không có bản ghi khớp, giá trị NULL sẽ được trả về.",
        difficulty: "easy",
        category: "SQL Joins"
      },
      {
        id: "q3",
        question: "Index trong database được sử dụng để làm gì?",
        options: [
          "Tăng tốc độ truy vấn",
          "Giảm không gian lưu trữ",
          "Tăng tính bảo mật",
          "Quản lý transaction"
        ],
        correctAnswer: 0,
        explanation: "Index được sử dụng để tăng tốc độ truy vấn bằng cách tạo một cấu trúc dữ liệu bổ sung cho phép database tìm kiếm nhanh hơn.",
        difficulty: "easy",
        category: "Performance"
      },
      {
        id: "q4",
        question: "Normalization trong database là gì?",
        options: [
          "Quá trình tổ chức dữ liệu để giảm redundancy",
          "Quá trình tăng tốc độ truy vấn",
          "Quá trình backup dữ liệu",
          "Quá trình mã hóa dữ liệu"
        ],
        correctAnswer: 0,
        explanation: "Normalization là quá trình tổ chức dữ liệu trong database để giảm redundancy (dư thừa) và đảm bảo data integrity bằng cách chia nhỏ các bảng và thiết lập quan hệ giữa chúng.",
        difficulty: "medium",
        category: "Database Design"
      },
      {
        id: "q5",
        question: "Sự khác biệt giữa PRIMARY KEY và UNIQUE constraint là gì?",
        options: [
          "PRIMARY KEY không cho phép NULL, UNIQUE cho phép một NULL",
          "Không có sự khác biệt",
          "PRIMARY KEY chỉ có một, UNIQUE có thể có nhiều",
          "Cả A và C đều đúng"
        ],
        correctAnswer: 3,
        explanation: "PRIMARY KEY: không cho phép NULL và mỗi bảng chỉ có một. UNIQUE: cho phép một giá trị NULL và mỗi bảng có thể có nhiều UNIQUE constraints.",
        difficulty: "medium",
        category: "Constraints"
      }
    ]
  }
];
