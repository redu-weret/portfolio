/**
 * ============================================================
 *  PORTFOLIO CONTENT — edit everything in this one file.
 *  No component changes needed to update text, skills or links.
 * ============================================================
 *
 * ⚠️ Placeholders intentionally left EMPTY (marked "TODO-YOU"):
 *    email, GitHub, LinkedIn, CV. Fill them in — nothing is invented.
 */

export type SkillCategory = {
  title: string;
  icon: "code" | "server" | "database" | "test" | "tools";
  blurb: string;
  items: string[];
};

export const name = "Rediet Weret Tezera";
export const initials = "RW";
export const role = "Aspiring Full-Stack Software Developer";

/** Hero intro shown under the name (1–2 sentences, easy to scan). */
export const heroIntro =
  "Computer Science student and full-stack developer building real web apps with React, C#/.NET and SQL — from database design to the interface in your browser.";

/** ---- Links ---- */
export const links = {
  github: "https://github.com/redu-weret",
  linkedin: "https://www.linkedin.com/in/rediet-weret-b92620331",
  cv: "", // TODO-YOU: drop your CV into /public and set "/cv.pdf"
  email: "mailto:weretrediet@gmail.com",
};

/** ---- About ---- */
export const about = {
  paragraphs: [
    "I'm Rediet, a Computer Science student at Hawassa University, based in Addis Ababa, Ethiopia. I build full-stack web applications — designing the database, building the API, and developing the interface that connects to it.",
    "I enjoy the whole stack: modeling problems with data, writing clean interfaces, and the discipline of shipping software that actually works. I'm currently open to internships, software developer roles and remote work where I can keep learning and contribute from day one.",
  ],
  quickFacts: [
    { label: "Focus", value: "Full-stack web development" },
    { label: "Core stack", value: "React · C# / ASP.NET Core · SQL Server" },
    { label: "Currently learning", value: "TypeScript & system design" },
    { label: "University", value: "Hawassa University — B.Sc. Computer Science" },
    { label: "Based in", value: "Addis Ababa, Ethiopia" },
  ],
};

/** ---- Skills (five compact categories) ---- */
export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "code",
    blurb: "Building interfaces",
    items: ["HTML", "CSS", "JavaScript", "React", "TypeScript (learning)", "Flutter (internship project)"],
  },
  {
    title: "Backend",
    icon: "server",
    blurb: "APIs & services",
    items: ["C#", "ASP.NET Core Web API", "REST APIs", "Auth & JWT concepts"],
  },
  {
    title: "Database",
    icon: "database",
    blurb: "Modeling & integrity",
    items: ["SQL", "SQL Server", "Relational design", "Constraints & validation"],
  },
  {
    title: "Testing",
    icon: "test",
    blurb: "Supporting skill",
    items: [
      "Manual testing",
      "Swagger API testing",
      "Integration testing",
      "Bug reporting",
    ],
  },
  {
    title: "Tools",
    icon: "tools",
    blurb: "Day-to-day",
    items: ["Git", "GitHub", "VS Code", "Swagger", "Docker"],
  },
];

/** ---- Projects (gallery you can expand) ---- */
export type ProjectCard = {
  title: string;
  description: string;
  stack: string[];
  status: "planned" | "in-progress" | "completed" | "live" | "private";
  note?: string; // e.g. "Source code private"
  github?: string; // space-separated for multiple repos, e.g. "<frontend-url> <backend-url>"
  demo?: string;
};

export const otherProjects: ProjectCard[] = [
  {
    title: "CBE Meeting Attendance System",
    description:
      "A full-stack meeting attendance system — replacing paper sign-ins with reliable, queryable records: employees & roles, sessions, a live analytics dashboard and exportable PDF/Excel reports.",
    stack: ["React", "TypeScript", "Tailwind CSS", "ASP.NET Core Web API", "SQL Server", "Swagger"],
    status: "completed",
    github: "https://github.com/redu-weret/CbeMeetingAttendanceFrontend https://github.com/redu-weret/CbeMeetingAttendanceBackend",
  },
  {
    // SECURITY NOTE: deliberately high-level. No endpoints, no internals,
    // no payment/auth mechanism details — nothing an attacker could use.
    title: "ETA Bingo — Real-Time Multiplayer Game Platform",
    description:
      "A Telegram-based real-time multiplayer bingo platform: live game rooms with WebSocket state broadcast, player wallets, and role-based access — designed and built end to end.",
    stack: ["Python", "FastAPI", "WebSockets", "SQLite", "Telegram Mini App", "Vanilla JS"],
    status: "private",
    note: "Source code private — details shared on request",
  },
  {
    title: "BusinessMate v1",
    description:
      "Working on: a multi-user business management mini-suite (auth, products, sales) with my own authenticated API and database.",
    stack: ["C#", "ASP.NET Core", "EF Core", "PostgreSQL", "React"],
    status: "in-progress",
  },
];

/** ---- Experience, education & certificates ---- */
export type TimelineEntry = {
  kind: "experience" | "education";
  title: string;
  org: string;
  period: string; // TODO-YOU: leave as-is if unknown
  detail: string;
};

export const timeline: TimelineEntry[] = [
  {
    kind: "experience",
    title: "Software Developer Intern — Development & Customization",
    org: "Commercial Bank of Ethiopia · Digital Factory",
    period: "Jul 2026 – Aug 2026",
    detail:
      "2-month internship (certificate of completion). Built the CBE Meeting Attendance System (web & mobile): React front end, ASP.NET Core REST APIs, SQL Server schema, RBAC user management, reporting dashboards, Swagger API testing, Git pull-request workflow and Docker.",
  },
  {
    kind: "education",
    title: "B.Sc. Computer Science",
    org: "Hawassa University",
    period: "Expected Jun 2027",
    detail: "Core coursework in programming, databases, networks and software engineering.",
  },
];

export const certificates = [
  {
    title: "CBE Internship Program — Certificate of Completion",
    issuer: "Commercial Bank of Ethiopia · Digital Factory",
    year: "Jul 2026",
    link: "",
  },
  {
    title: "Python",
    issuer: "Kaggle",
    year: "Jul 2025",
    link: "", // TODO-YOU: add your Kaggle profile/course URL if you want
  },
  {
    title: "Programming Fundamentals Nanodegree",
    issuer: "Udacity (Accenture)",
    year: "Sep 2024",
    link: "https://confirm.udacity.com/NQLJYNTA", // official verification URL printed on the certificate
  },
  {
    title: "5 Million Ethiopian Coders",
    issuer: "Federal initiative",
    year: "Add year", // TODO-YOU
    link: "",
  },
];

/** ---- Contact / footer ---- */
export const availability =
  "Open to internships, junior developer roles and remote work";
