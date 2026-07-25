export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export const site = {
  name: "Bharat Parmar",
  role: "Self-Taught Software Developer",
  location: "Morbi, Gujarat, India",
  email: "bharatparmar.dev@gmail.com",
  phone: "+91 99091 52535",
  phoneHref: "+919909152535",
  copyrightLine: "Built with persistence, not a degree.",
  linkedin: "#",
  github: "#",

};

export const home = {
  hero: {
    headline: "You're looking at my strongest project right now.",
    subheadline:
      "I built this entire site by hand — self-taught, no computer science degree, the same way I've solved every real problem I've taken on.",
        primaryCta: { label: "See How I Built This", href: "/projects" },
        secondaryCta: { label: "Contact Me", href: "/contact" },
  },
  tenSecondVersion: {
    heading: "Here's What You're About to Learn",
    body: "I'm self-taught, from Excel macros to full desktop applications in C# and SQL Server. For years, I've run the technical and operational backbone of a business — without ever holding an official 'IT' title. If you're looking for someone who can walk into an undefined problem and come out the other side with a working solution, keep reading.",
    ctaLabel: "Read My Full Story",
    ctaHref: "/about",
  },
  proof: {
    heading: "What I've Actually Built",
    intro:
      "Four examples of how I work when the manual runs out — including the site you're looking at right now.",
    cards: [
      {
        tag: "Featured",
        title: "This Website",
        summary:
          "Built by hand, with Claude AI assisting on planning and task breakdown along the way. It's a working example of what I can ship without a formal IT background — you're looking at it right now.",
      },
      {
        tag: "Production Fix",
        title: "A Production Camera Failure, Fixed With a Custom Driver",
        summary:
          "When Windows blocked webcam access for business-critical software, I built a custom driver that solved it — drawing on a similar problem I'd already worked through elsewhere.",
      },
      {
        tag: "Desktop App",
        title: "A Commercial Inventory System, Rebuilt From Scratch",
        summary:
          "With no source code and no formal training, I rebuilt most of the everyday, real-world functionality of a commercial inventory system — just by studying how it worked.",
      },
      {
        tag: "First Project",
        title: "Where My Development Journey Actually Began",
        summary:
          "A tangled, multi-file Excel workflow was my first build. Small in scope — but the project that made me the person the business now turns to for every new tool it needs.",
      },
    ],
    ctaLabel: "See Every Project",
    ctaHref: "/projects",
  },
  worthTenMinutes: {
    heading: "What Years of Real Work Actually Taught Me",
    body: "I've handled fast-moving retail transactions under real pressure. I've managed inventory across many product categories for a sizeable team. I've been the person colleagues call first when something breaks — network, printer, software, or otherwise. None of that shows up on a computer science transcript. All of it shows up in how I work.",
    ctaLabel: "See My Full Experience",
    ctaHref: "/experience",
  },
  bottomCta: {
    heading: "I'm Not Looking for Just Any Job. I'm Looking for the Right One.",
    body: "I'm actively pursuing my first professional software development role — open to relocating, especially to Ahmedabad. If you need someone who treats 'I don't know how yet' as a starting point instead of a stop sign, let's talk.",
    ctaLabel: "Start the Conversation",
    ctaHref: "/contact",
  },
};

export const about = {
  header: {
    eyebrow: "About Me",
    title:
      "I didn't take the usual road into software. Here's the one I actually took.",
  },
  whereItStarted: {
    heading: "Curious Since the 8th Grade",
    paragraphs: [
      "My first real encounter with computers came in 8th standard, and something about them just clicked. Not only software — hardware, systems, how any of it actually worked under the surface. That curiosity never had a clear career plan attached to it. I just knew I loved it.",
      "Life had other plans for the next several years. I started working part-time at sixteen, right after my board exams — stepping into financial responsibility for my family early on. By the time I reached college, work came first and graduation came second, and I never finished my degree. What I did instead was keep working, and keep being curious.",
    ],
  },
  whereItTurned: {
    heading: "The Job That Became a Classroom",
    paragraphs: [
      "For years now, I've run the technical and operational side of a jewellery business — inventory, billing, staff attendance, network troubleshooting, and every 'the software won't open' call in the building.",
      "During the quiet hours, I noticed the internal Excel system used to calculate ornament estimates was a mess: several files, connected by hyperlinks, redone by hand every time. I rebuilt it with VBA and one-click automation. It was a small project. It also happened to be the first time I built something instead of just using something — and I haven't stopped since.",
      "From there, the path built itself: VBA led to full C# desktop applications, then SQL Server, then real database-backed software. Nobody assigned me a curriculum. Each project simply demanded the next skill, and I went and learned it.",
    ],
  },
  howFar: {
    heading: 'What "Self-Taught" Actually Looks Like in Practice',
    paragraphs: [
      "When I try to build something, I don't stop at the first wall. When our showroom's camera integration broke after a Windows update, I'd already worked through a similar limitation once before, building my own inventory software demo, and had solved it there with a workaround of my own design.",
      "When the same issue came up at work, I built on that experience and developed a proper driver-level fix — this time directly for the environment where it mattered. It's been running in production ever since.",
      "That's how I approach anything I don't already know how to do: work through it, build something that actually works, then take it further when it counts.",
    ],
  },
  cta: {
    heading: "Here's What That Persistence Has Actually Built",
    ctaLabel: "View My Projects",
    ctaHref: "/projects",
  },
};

export const projects = {
  header: {
    eyebrow: "Projects",
    title: "Not a list of technologies. A record of problems I worked through, one at a time.",
  },
  featured: {
    tag: "Featured",
    title: "This Website",
    problem:
      "I needed a way to prove I can build and ship real, working software — without a computer science degree or a professional developer job on my resume.",
    what: "I designed and built this entire site by hand — every page, every line of content, every implementation decision. Claude AI acted as a planning and task-breakdown partner throughout, but the building was mine.",
    outcome:
      "You're looking at the result. If you're wondering whether I can actually ship something real, this site is the answer.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  list: [
    {
      tag: "Production Fix",
      title: "A Production Camera Failure, Fixed With a Custom Driver",
      problem:
        "After a Windows update, our showroom's inventory software lost webcam access when running over the network.",
      context:
        "I'd worked through a similar limitation before, while building my own inventory software demo, and solved it there with a different, simpler workaround.",
      what: "When the issue came up at work, I discussed it with the software vendor's CTO, who suggested trying a proper virtual camera driver. I built one directly for the production environment where the problem actually lived.",
      outcome:
        "The driver resolved the issue at my workplace, and it's been running in production ever since.",
      tech: ["C#", "Windows Driver Development"],
    },
    {
      tag: "Desktop App",
      title: "JewelX — An Inventory System, Rebuilt From Zero",
      problem:
        "I used commercial jewellery inventory software every day at work and got curious whether I could build something functionally similar — without ever seeing its source code.",
      what: "I built a full desktop inventory management system in C#, Windows Forms, and SQL Server, covering inventory tracking, billing, tag generation, and customer management.",
      outcome:
        "I rebuilt most of the everyday, real-world functionality of a real commercial product, purely by studying how it worked and recreating it in my own architecture.",
      tech: ["C#", "Windows Forms", "SQL Server"],
    },
    {
      tag: "First Project",
      title: "Where My Development Journey Actually Began",
      problem:
        "Daily gold ornament estimate calculations depended on several Excel files, linked by hyperlinks, each with a handful of sheets. It was slow and easy to break.",
      what: "I rebuilt the workflow using VBA and ActiveX controls, replacing every hyperlink with a one-click button and adding one-click reset macros.",
      outcome:
        "My first programming project — small in scope, but it proved I could turn an idea into working software. Since then, I've built several more custom Excel tools as new business needs came up, and I'm now the first person the business calls whenever a new one is needed.",
      tech: ["VBA", "Excel Automation"],
    },
    {
      tag: "Personal Tool",
      title: "Desktop Countdown Widget",
      problem:
        "I needed a dead-simple, always-visible way to track an important deadline without keeping another app open.",
      what: "Built an always-on-top desktop widget with drag-and-drop positioning, position locking, and a timer that survives a full system restart.",
      outcome: "Still running on my desktop today, doing exactly what it was built to do.",
      tech: ["C#", "Windows Forms"],
    },
    {
      tag: "AI-Assisted",
      title: "Android Call History Archive",
      problem:
        "Modern Android dialers cap call history much lower than older phones did — often just a month or two of history, with no way to extend it.",
      what: "I built this one differently on purpose, working with an AI coding agent to explore what that kind of tool can actually deliver — guiding it toward a finished, working app rather than writing every line by hand myself.",
      outcome:
        "MVP complete and in active personal use, and a useful firsthand look at how far AI-assisted development can go with the right guidance.",
      tech: ["Android", "Java/Kotlin", "AI-Assisted Development"],
    },
    {
      tag: "Engineering Judgment",
      title: "Custom Android Dialer — Where I Chose to Stop",
      problem:
        "I wanted a fully custom phone dialer with built-in two-way call recording — a feature my previous phone had, and my new one didn't.",
      what: "The Android APIs required for system-level call recording aren't available without rooting the device.",
      outcome:
        "I made the call to stop rather than root my personal phone and compromise its security. Knowing when not to force a solution is also part of engineering.",
      tech: ["Android", "API Research"],
    },
  ],
  cta: {
    heading: "These Projects Didn't Build Themselves. Here's How I Actually Work.",
    ctaLabel: "View My Skills",
    ctaHref: "/skills",
  },
};

export const skills = {
  header: {
    eyebrow: "Skills",
    title: "I could hand you a list of tools. Instead, here's how I actually think.",
  },
  sections: [
    {
      heading: "I Learn What the Problem Demands — Nothing More, Nothing Less",
      body: "I started with Excel formulas. Then VBA. Then C#, Windows Forms, and SQL Server. I didn't plan that progression — each project simply required the next skill, so I went and picked it up. That's the pattern I bring to any new stack, framework, or tool a job requires: I don't need to already know it. I need the chance to learn it fast, and I will.",
    },
    {
      heading: "If the First Approach Fails, I Don't Stop — I Redirect",
      body: "When I attempted to build a virtual camera driver completely from scratch, I eventually accepted that path wasn't realistic on its own — and pivoted to adapting existing open-source technology instead. That's not giving up. That's recognizing when persistence needs a smarter direction, not just more effort.",
    },
    {
      heading: "AI Is Guidance. I Do the Building.",
      body: "I use AI tools like ChatGPT and Gemini throughout my process, mainly for guidance — planning, debugging, and double-checking my own thinking. On nearly every project, the hands-on building is mine. The one exception is my Call History Archive app, built with the help of an AI coding agent, as a hands-on way to explore what agentic AI tools are actually capable of. Everything else here was built by hand, with AI as a guide rather than an author.",
    },
    {
      heading: 'My One-Line Definition of "Good Software"',
      body: "Software that gives the user a genuinely good experience and fully does what they need it to do. Not more complex than it needs to be. Not less useful than it could be.",
    },
  ],
  tools: {
    heading: "What I'm Comfortable Working With",
    body: "C#, SQL Server, and VBA/Excel automation are the tools I return to most. But my real skill isn't a fixed list — it's picking up whatever a project actually needs, as I've done project after project, and I'll do the same for whatever a role requires next.",
  },
  cta: {
    heading: "Here's Where I've Actually Applied All of This",
    ctaLabel: "View My Experience",
    ctaHref: "/experience",
  },
};

export const experience = {
  header: {
    eyebrow: "Experience",
    title: "Years of computer-based work. None of it inside an IT department. All of it relevant.",
  },
  entries: [
    {
      role: "Office Administration, Inventory Management & Self-Taught Developer",
      company: "Samrat Jewellers",
      duration: "March 2021 – Present",
      body: "I run the full technical and operational backbone of a jewellery business — inventory management across many product categories, daily billing, stock verification, staff attendance and payroll calculation, and all local network and hardware troubleshooting. I'm the first person colleagues call when software, printers, or the network stop working — and, during my own time, I diagnosed and built a custom driver-level fix for a production camera issue after tracing the cause myself.",
    },
    {
      role: "Cashier",
      company: "Reliance Smart",
      duration: "August 2020 – February 2021",
      body: "I joined ahead of Morbi's first-ever mall launch and quickly became the team's top-performing cashier, handling checkout through some of the busiest periods of the year — including Navratri, Diwali, and Republic Day sales — with zero prior retail experience going in.",
    },
    {
      role: "Marketing & Inventory Operator",
      company: "Jalaram Enterprise",
      duration: "August 2018 – March 2020",
      body: "I managed digital stock and customer ledgers for a wholesale mobile accessories distributor, splitting my time between daily field sales visits and computerized inventory tracking back at the office.",
    },
    {
      role: "Billing & Compliance Executive",
      company: "Ceramic Billing Company",
      duration: "May 2018 – August 2018",
      body: "I generated sales bills and E-Way bills for a ceramics manufacturing business, balancing full-time billing work with an unpredictable schedule that often ran well past midnight.",
    },
    {
      role: "Computer Operator / Office Executive",
      company: "Wadhara Tours & Travels",
      duration: "September 2016 – March 2018",
      body: "At sixteen, I was the first and only employee handling the complete computer operations of a newly launched travel agency — ticket booking, government ID services, and daily customer service for a steady stream of customers — while training every employee who joined after me.",
    },
  ],
  cta: {
    heading: "If This Sounds Like Someone Worth Hiring, Let's Talk",
    ctaLabel: "Contact Me",
    ctaHref: "/contact",
  },
};

export const contact = {
  header: {
    eyebrow: "Contact",
    title:
      "I'm actively looking for my first professional software development role — open to relocating, especially to Ahmedabad.",
  },
  form: {
    heading: "Send Me a Message",
    labels: { name: "Name", email: "Email", message: "Message" },
    submitLabel: "Send Message",
    success: "Thanks for reaching out — I'll get back to you as soon as I can.",
    error: "Something went wrong. Please try again, or reach me directly using the details below.",
  },
  direct: {
    heading: "Or Reach Me Directly",
  },
};

export const privacy = {
  title: "Privacy Policy",
  lastUpdated: "July 2026",
  sections: [
    {
      heading: "What This Page Covers",
      body: "This site collects limited information to help me respond to messages and understand how visitors use the site. Here's exactly what that means.",
    },
    {
      heading: "Information I Collect",
      body: "If you use the contact form, I collect the name, email address, and message you provide, solely to respond to your inquiry. I don't sell or share this information with third parties.",
    },
    {
      heading: "Analytics",
      body: "This site uses Google Analytics to understand general visitor traffic, such as page views and site usage patterns. This data is anonymized and doesn't identify you personally.",
    },
    {
      heading: "Questions",
      body: `If you have questions about your data or want it removed, email me directly at ${"bharatparmar.dev@gmail.com"}.`,
    },
  ],
};

export const notFound = {
  heading: "This page doesn't exist — but my projects do.",
  body: "Looks like you followed a broken link. Let's get you back on track.",
  ctaLabel: "Back to Home",
};