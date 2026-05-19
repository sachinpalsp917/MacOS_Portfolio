const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Changelog",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Learning",
    items: ["Go"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Redux", "TanStack Query", "ShadCN", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Hono", "REST APIs", "Microservices", "OOP"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Drizzle ORM"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "GHCR", "GitHub Actions", "AWS (EC2, S3, IAM)", "TrueNAS"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/sachinpalsp917",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/sachin-pal-937151240/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/PalSach13138584",
  },
  {
    id: 4,
    text: "Email",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "mailto:sachinpalsp917@gmail.com",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/sachin.jpg",
  },
  {
    id: 2,
    img: "/images/sachin-travel.jpg",
  },
  {
    id: 3,
    img: "/images/sachin-2.jpg",
  },
  {
    id: 4,
    img: "/images/sachin-3.jpg",
  },
];

// ─── Changelog feed ──────────────────────────────────────────────────────
// Personal build log surfaced in the Safari/Changelog window.
// Newest entry sits on top automatically — the component sorts by `date` desc.
// To add a new entry: copy any object, bump the id, set today's date (YYYY-MM
// or YYYY-MM-DD), write a short summary, set status, add tags. Done.
//
// status: "shipped" → green dot | "in-progress" → amber dot | "planned" → blue
const projectUpdates = [
  {
    id: 1,
    date: "2026-05",
    title: "Building this portfolio",
    summary:
      "Shipping a macOS-style portfolio site (Vite + React + GSAP + Zustand) with draggable windows, a working Finder, and a locked-down Safari that now serves this Changelog.",
    tags: ["React", "Vite", "Portfolio"],
    status: "in-progress",
    link: null,
    linkLabel: null,
  },
  {
    id: 2,
    date: "2026-02",
    title: "Learning Go",
    summary:
      "Picking up Go for systems / infra work — goroutines, channels, packages, file I/O so far. First real project on the horizon: a small CLI that wraps the Infisical API.",
    tags: ["Learning", "Go"],
    status: "in-progress",
    link: null,
    linkLabel: null,
  },
  {
    id: 3,
    date: "2025-11",
    title: "Shodh CI/CD pipeline live across two environments",
    summary:
      "Stood up a GitHub Actions pipeline that lints, tests, builds Docker images to GHCR, deploys to a self-hosted bare-metal staging box (i9 / 128 GB RAM / GPU on TrueNAS) for QA, then promotes main-branch merges to AWS production (EC2, IAM, S3) backed by PostgreSQL.",
    tags: ["Shodh", "CI/CD", "Docker", "AWS", "TrueNAS"],
    status: "shipped",
    link: null,
    linkLabel: null,
  },
  {
    id: 4,
    date: "2025-10",
    title: "Shodh per-tenant Redis caching layer",
    summary:
      "Designed a Redis caching layer over hot dashboard queries and LLM model state with TTLs of 300–1000s. Cut repeat-query latency and reduced LLM token spend on duplicate prompts.",
    tags: ["Shodh", "Redis", "LLM", "Performance"],
    status: "shipped",
    link: null,
    linkLabel: null,
  },
  {
    id: 5,
    date: "2025-09",
    title: "Shodh now ingests from four omnichannel sources",
    summary:
      "OAuth 2.0 gateways with refresh-token rotation across Microsoft Teams, Slack, Jira, and ERP — over webhooks and polling. Powers Shodh's cross-tool dashboards and daily LLM-generated insight summaries.",
    tags: ["Shodh", "OAuth", "Integrations"],
    status: "shipped",
    link: null,
    linkLabel: null,
  },
  {
    id: 6,
    date: "2025-08",
    title: "Joined Corp8AI as Full-Stack Developer",
    summary:
      "Joined Corp8AI, the AI-products arm of Uminber (6-year-old digital agency). Owning Shodh (enterprise AI insights) and Nyxo (no-code creator platform) end-to-end.",
    tags: ["Corp8AI", "Milestone"],
    status: "shipped",
    link: null,
    linkLabel: null,
  },
  {
    id: 7,
    date: "2025-05",
    title: "AuthHub v1 — pentested",
    summary:
      "Self-hosted multi-tenant TypeScript auth microservice. All common auth methods (email/password, magic links, OTP, social, TOTP MFA, WebAuthn passkeys), OAuth 2.1 + PKCE-S256, per-app EdDSA (Ed25519) JWT signing with envelope-encrypted private keys at rest, atomic refresh-token rotation, HMAC-SHA256 webhook signing. Hardened against a 17-attack pentest before declaring v1.",
    tags: ["AuthHub", "Security", "TypeScript", "Hono", "OAuth"],
    status: "shipped",
    link: "https://github.com/sachinpalsp917",
    linkLabel: "View on GitHub",
  },
  {
    id: 8,
    date: "2025-03",
    title: "GATE 2025 qualified — Computer Science",
    summary: "Cleared the all-India national-level CS exam.",
    tags: ["Academic"],
    status: "shipped",
    link: null,
    linkLabel: null,
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  techStack,
  socials,
  photosLinks,
  gallery,
  projectUpdates,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1 — AuthHub
    {
      id: 5,
      name: "AuthHub",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "AuthHub.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "AuthHub is a self-hosted, multi-tenant TypeScript auth microservice — Clerk-style authentication without the SaaS lock-in.",
            "It ships every common auth method out of the box: email/password, magic links, email and SMS OTP, social sign-in (Google, GitHub), TOTP MFA, WebAuthn passkeys, and a full OAuth 2.1 authorization server with PKCE-S256 for agent tooling.",
            "Under the hood: per-app EdDSA (Ed25519) JWT signing with envelope-encrypted private keys at rest, atomic refresh-token rotation, Argon2id password hashing with constant-time user-not-found, and HMAC-SHA256-signed webhooks with idempotency.",
            "Built across a Hono API server, a Next.js 15 dashboard, and a published TypeScript SDK that runs in Node, Bun, Deno, and Workers — all wired together in a Turborepo monorepo with Drizzle + Postgres + Docker. Hardened against a 17-attack pentest before v1.",
          ],
        },
        {
          id: 2,
          name: "github.com/sachinpalsp917/authhub",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/sachinpalsp917",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "authhub.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2 — Shodh (Corp8AI, proprietary)
    {
      id: 6,
      name: "Shodh (Corp8AI)",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Shodh.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Shodh is the enterprise AI insights platform I shipped end-to-end at Corp8AI — an AI startup that is the products arm of Uminber (a 6-year-old digital agency).",
            "It ingests data from Microsoft Teams, Slack, Jira, and ERP systems via OAuth 2.0 gateways with refresh-token rotation, over webhooks and polling, then surfaces unified cross-tool dashboards and daily LLM-generated insight summaries for ops teams.",
            "Performance: a per-tenant Redis caching layer over hot dashboard queries and LLM model state (TTLs 300–1000s) cut repeat-query latency significantly and reduced LLM token spend on duplicate prompts.",
            "Ops: a GitHub Actions CI/CD pipeline runs lint + tests on push, builds Docker images to GHCR, deploys to a self-hosted bare-metal staging server (i9 / 128GB RAM / GPU running TrueNAS) for QA, then promotes main-branch merges to AWS production (EC2, IAM service roles, S3) backed by PostgreSQL.",
            "Note: Shodh is a proprietary Corp8AI product, so there's no public link.",
          ],
        },
        {
          id: 4,
          name: "shodh.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3 — Nyxo (Corp8AI, proprietary)
    {
      id: 7,
      name: "Nyxo (Corp8AI)",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Nyxo.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Nyxo is a no-code platform I shipped end-to-end at Corp8AI for creators and influencers — currently in private beta.",
            "It lets a creator publish a sellable personal website in a single onboarding flow, then list, sell, and manage products, services, and digital courses from one dashboard.",
            "Built on the full Next.js + TypeScript + Prisma + PostgreSQL stack: site builder, content schemas, storefront, product/service/course modules, and the publishing + payout admin.",
            "Note: Nyxo is a proprietary Corp8AI product in private beta, so there's no public link yet.",
          ],
        },
        {
          id: 4,
          name: "nyxo.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },

    // ▶ Project 4 — LeetLab
    {
      id: 8,
      name: "LeetLab",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-60 left-5",
      windowPosition: "top-[40vh] left-12",
      children: [
        {
          id: 1,
          name: "LeetLab.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "LeetLab is a full-stack DSA practice platform — solve Data Structures & Algorithms problems online in an interactive environment.",
            "Features include dynamic problem listings, real-time code execution, user progress tracking, and submission history.",
            "Built with Next.js + ShadCN on the frontend (using TanStack Query for cache-aware navigation between problems), Express + TypeScript + Prisma on the backend, and PostgreSQL for persistence.",
            "Security note: untrusted user code is isolated in a separate Dockerized sandbox microservice — each submission runs inside its own container, keeping the main API process free of untrusted execution.",
          ],
        },
        {
          id: 2,
          name: "github.com/sachinpalsp917/leetlab",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/sachinpalsp917",
          position: "top-10 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/sachin.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/sachin-2.jpg",
    },
    {
      id: 3,
      name: "shodh-booth.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/sachin-3.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Full-Stack Developer · Building Shodh + Nyxo at Corp8AI",
      image: "/images/sachin.jpg",
      description: [
        "Hey! I'm Sachin 👋 — a full-stack developer based in Ahmedabad, currently building Shodh (enterprise AI insights) and Nyxo (no-code creator platform) at Corp8AI, the AI-products arm of Uminber.",
        "I work mostly across React, Next.js, TypeScript, Node.js, PostgreSQL, and Redis — with a soft spot for security infrastructure. I recently shipped AuthHub, a self-hosted multi-tenant auth microservice with EdDSA JWT signing, envelope-encrypted private keys at rest, and a 17-attack pentest passed before v1.",
        "GATE 2025 qualified in Computer Science. I care about clean architecture, fast feedback loops, and writing code I won't be embarrassed by in six months.",
        "Outside of dev work: still figuring out how to keep my tab count below 40 🙃",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
