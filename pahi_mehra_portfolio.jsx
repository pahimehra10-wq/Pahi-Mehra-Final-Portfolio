import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ExternalLink, ChevronDown, Briefcase, PenSquare, Sparkles, Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const skills = [
  "Tech Reporting & Journalism",
  "Enterprise Technology Coverage",
  "Technical Writing",
  "SEO & Content Optimization",
  "Research, Verification & Fact-Checking",
  "Interviewing CXOs & Industry Leaders",
  "Feature Writing & Narrative Structuring",
  "Data-led Reporting & Trend Interpretation",
  "Headline Writing & Story Packaging",
  "Copy Editing & Proofreading",
  "Audience Analytics & Performance Tracking",
  "Editorial Planning & Newsroom Coordination",
  "Cross-functional Collaboration",
  "Content Strategy for Digital Platforms",
  "Corporate Communications Support",
  "Media Relations & Messaging",
  "Thought Leadership Content",
  "Executive Profiling & Narrative Development",
];

const experiences = [
  {
    role: "Tech Reporter",
    company: "TechCircle — Hindustan Times",
    period: "Jan 2023 – Present",
    points: [
      "Write, edit, and supervise stories on the latest technological developments and industry shifts.",
      "Cover enterprise technology, AI, cloud, data infrastructure, cybersecurity, and digital transformation through breaking news, interviews, and features.",
      "Ensure content quality and discoverability through SEO best practices, keyword strategy, hyperlinking, and strong headline writing.",
      "Collaborate with designers and creative teams to shape compelling visual storytelling formats.",
      "Translate complex technology topics into clear, engaging stories for broad audiences as well as business decision-makers.",
    ],
  },
  {
    role: "Technical News Writer",
    company: "TechGig — Times Internet",
    period: "Oct 2021 – Dec 2022",
    points: [
      "Streamlined website content to keep coverage current, credible, and aligned with editorial standards.",
      "Tracked performance indicators including page views, traffic sources, and user acquisition trends.",
      "Worked cross-functionally with sales, marketing, and brand acquisition teams on client-facing content initiatives.",
      "Balanced editorial quality with audience growth and platform performance goals.",
    ],
  },
  {
    role: "News Correspondent",
    company: "MyMobile",
    period: "May 2019 – May 2021",
    points: [
      "Reported and wrote news stories for publication and broadcast with context, background, and market relevance.",
      "Arranged and conducted interviews with industry professionals to uncover insights on technology market trends.",
      "Reviewed copy and corrected errors in content, grammar, and formatting while adhering to editorial guidelines.",
      "Handled high-profile interviews and strengthened the publication’s industry credibility through source development.",
    ],
  },
  {
    role: "Content Writer",
    company: "DigiTopper",
    period: "Jun 2018 – May 2019",
    points: [
      "Created category-wise content for the company’s newly launched app and digital initiatives.",
      "Produced timely coverage for anticipated and spontaneous news moments.",
      "Advised on app/web content presentation with a focus on SEO and user experience.",
      "Maintained publication workflows and tracking sheets for editing, review, and publishing stages.",
    ],
  },
  {
    role: "Volunteer",
    company: "Teach India Program",
    period: "Aug 2017 – Jan 2018",
    points: [
      "Supported English teaching and learning for underserved communities.",
      "Contributed to sustainable, scalable delivery of relevant language skills for youth learners.",
    ],
  },
];

const projects = [
  {
    title: "The AI infrastructure race: India steps in, gap remains",
    description:
      "Feature analysis on India’s AI infrastructure momentum, capacity gaps, and what it means for enterprise adoption and competitiveness.",
    tag: "Feature",
    link: "https://www.techcircle.in/2026/02/20/the-ai-infrastructure-race-india-steps-in-gap-remains",
  },
  {
    title: "India AI Summit 2026 news wrap: GPUs, data centers, sovereign AI",
    description:
      "Event-driven synthesis of major announcements, partnerships, and enterprise signals across India’s AI ecosystem.",
    tag: "News Wrap",
    link: "https://www.techcircle.in/2026/02/20/india-ai-summit-2026-news-wrap-gpus-data-centers-sovereign-ai",
  },
  {
    title: "Oracle’s approach: leave your data where it is, bring the AI to you",
    description:
      "Interview-led coverage unpacking enterprise AI deployment strategy, trust, and architecture choices.",
    tag: "Interview",
    link: "https://www.techcircle.in/2026/02/19/oracle-s-approach-leave-your-data-where-it-is-bring-the-ai-to-you",
  },
  {
    title: "The rise of domain-specific AI in India’s enterprise stack",
    description:
      "Trend feature on why enterprises are prioritizing domain-specific AI over generic tools for business workflows.",
    tag: "Trend Feature",
    link: "https://www.techcircle.in/2026/02/03/the-rise-of-domain-specific-ai-in-india-s-enterprise-stack",
  },
  {
    title: "Balancing local accountability with enterprise standards is key: Avaali CEO",
    description:
      "CXO interview exploring transformation at scale, governance, and operating models in enterprise environments.",
    tag: "CXO Interview",
    link: "https://www.techcircle.in/2026/01/20/balancing-local-accountability-with-enterprise-standards-is-key-avaali-ceo",
  },
  {
    title: "From infrastructure to experience: re-framing data as a product",
    description:
      "Data-led enterprise piece examining how organizations rethink data systems for AI, automation, and user impact.",
    tag: "Data-led Article",
    link: "https://www.techcircle.in/2025/12/18/from-infrastructure-to-experience-re-framing-data-as-a-product-in-indian-enterprise-tech",
  },
  {
    title: "How drugmaker Cipla sharpened ops using enterprise tech",
    description:
      "Case-oriented reporting on operational improvements and business outcomes enabled by enterprise technology.",
    tag: "Case Story",
    link: "https://www.techcircle.in/2025/11/13/how-drugmaker-cipla-sharpened-ops-using-enterprise-tech",
  },
  {
    title: "Apollo 24|7’s digital shift: integrating AI and data for scalable healthcare",
    description:
      "Healthcare-tech feature on platform scaling, data integration, and AI-led service delivery in digital health.",
    tag: "Healthcare Tech",
    link: "https://www.techcircle.in/2025/10/01/apollo-24-7-s-digital-shift-integrating-ai-and-data-for-scalable-healthcare/",
  },
];

const education = [
  {
    degree: "Bachelor in Journalism and Mass Communication",
    institute: "International Institute of Mass Media",
    period: "2015 – 2018",
  },
  {
    degree: "3rd Level Certificate",
    institute: "Japan Foundation",
    period: "2014 – 2016",
  },
  {
    degree: "High School",
    institute: "Veda Vyasa Dayanand Anglo Vedic School",
    period: "2002 – 2014",
  },
];

const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function PahiMehraPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50 to-orange-50 text-stone-900 selection:bg-amber-200 selection:text-stone-900" style={{ fontFamily: 'Georgia, ui-serif, serif' }}>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-stone-200/50 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-stone-200/90 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="group flex items-center gap-2 font-semibold tracking-wide">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-700 to-stone-800 text-white font-bold">
              P
            </span>
            <span className="text-sm sm:text-base text-stone-900">Pahi Mehra</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-stone-600 transition hover:text-stone-900">
                {item}
              </a>
            ))}
            <a href="#contact">
              <Button className="rounded-xl bg-stone-900 text-white hover:bg-stone-800">Let’s Connect</Button>
            </a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs text-amber-900">
              <Sparkles className="h-3.5 w-3.5" />
              Tech Journalist • Strategic Writer • Communications Storyteller
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: '"Times New Roman", Georgia, serif' }}>
                Pahi Mehra
              </h1>
              <p className="max-w-2xl text-lg text-stone-700 sm:text-xl" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                Tech journalist and strategic communications writer with 7+ years of experience translating fast-moving technology trends into clear, engaging, and high-impact narratives.
              </p>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-stone-600 sm:text-base" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
              I build narratives that help audiences understand <span className="text-stone-900">what’s changing in tech and why it matters</span> — across editorial reporting, executive positioning, thought leadership, and communication-ready story development.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#projects">
                <Button className="rounded-xl bg-stone-900 text-white hover:bg-stone-800">View Featured Work</Button>
              </a>
              <a href="https://www.techcircle.in/author/pahi-mehra" target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-xl border-stone-300 bg-white text-stone-900 hover:bg-stone-100">
                  More Stories <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            <div className="grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["7+", "Years Experience"],
                ["4", "Newsrooms & Brands"],
                ["AI/Cloud", "Coverage"],
                ["Editorial + Comms", "Strength"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-stone-200 bg-white/80 p-3 shadow-sm">
                  <div className="text-lg font-semibold text-stone-900">{value}</div>
                  <div className="text-xs text-stone-600" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-xl backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-sm font-semibold tracking-wide text-stone-800">Professional Snapshot</h2>
                <Newspaper className="h-5 w-5 text-amber-700" />
              </div>
              <div className="space-y-4 text-sm text-stone-700" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <div className="mb-1 font-medium text-stone-900">Current Role</div>
                  <div>Tech Reporter • TechCircle (Hindustan Times)</div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-stone-200 bg-white p-4">
                    <div className="mb-1 flex items-center gap-2 font-medium text-stone-900">
                      <PenSquare className="h-4 w-4 text-amber-700" /> Writing
                    </div>
                    <p className="text-xs leading-6 text-stone-600">Breaking news, enterprise AI coverage, interviews, features, event wraps, and explainers</p>
                  </div>
                  <div className="rounded-2xl border border-stone-200 bg-white p-4">
                    <div className="mb-1 flex items-center gap-2 font-medium text-stone-900">
                      <Briefcase className="h-4 w-4 text-amber-700" /> Editorial + Comms
                    </div>
                    <p className="text-xs leading-6 text-stone-600">SEO, messaging, media-facing narratives, copy review, and audience-focused content strategy</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 hidden justify-center md:flex">
          <a href="#about" className="group inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
            Scroll to explore
            <ChevronDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-3xl border-stone-200 bg-white/80 text-stone-900 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">About Me</p>
              <h2 className="mb-4 text-2xl font-semibold sm:text-3xl" style={{ fontFamily: '"Times New Roman", Georgia, serif' }}>Technology storytelling with editorial depth and communications value</h2>
              <div className="space-y-4 text-sm leading-7 text-stone-700 sm:text-base" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                <p>
                  I’m a tech journalist and content professional with experience across digital newsrooms including MyMobile, Times Internet, and Hindustan Times (TechCircle). Over the years, I’ve built a reporting style that combines speed, accuracy, and reader-first clarity.
                </p>
                <p>
                  My work focuses on turning complex developments into accessible stories — whether it’s a market trend, a product shift, or a broader industry narrative. I also bring editorial discipline in SEO, headline writing, copy review, and content presentation, helping stories perform as strongly as they read.
                </p>
                <p>
                  Beyond newsroom reporting, my skill set also translates well to corporate communications and media relations — especially where technology businesses need credible narratives, leadership visibility, and thought-leadership content grounded in real industry understanding.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-stone-200 bg-white/80 text-stone-900 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Education</p>
              <div className="space-y-4" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                {education.map((item) => (
                  <div key={item.degree} className="rounded-2xl border border-stone-200 bg-white p-4">
                    <h3 className="font-medium text-stone-900">{item.degree}</h3>
                    <p className="text-sm text-stone-700">{item.institute}</p>
                    <p className="mt-1 text-xs text-stone-600">{item.period}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="rounded-3xl border border-stone-200 bg-white/80 p-6 backdrop-blur sm:p-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Skills</p>
              <h2 className="text-2xl font-semibold sm:text-3xl" style={{ fontFamily: '"Times New Roman", Georgia, serif' }}>Editorial, strategic, and communications capabilities</h2>
            </div>
            <p className="max-w-xl text-sm text-stone-600" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
              A mix of newsroom reporting expertise and communication-focused strengths relevant to editorial teams, brands, and leadership visibility.
            </p>
          </div>

          <div className="flex flex-wrap gap-3" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
            {skills.map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Experience</p>
          <h2 className="text-2xl font-semibold sm:text-3xl" style={{ fontFamily: '"Times New Roman", Georgia, serif' }}>A 7-year journey in technology storytelling</h2>
        </div>

        <div className="relative space-y-5 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-stone-200 sm:before:left-5">
          {experiences.map((exp, idx) => (
            <motion.div key={`${exp.role}-${exp.company}`} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: idx * 0.05 }} className="relative pl-11">
              <span className="absolute left-[11px] top-5 h-3 w-3 rounded-full border-2 border-white bg-amber-700 sm:left-4" />
              <Card className="rounded-3xl border-stone-200 bg-white/80 text-stone-900 backdrop-blur transition hover:border-amber-300">
                <CardContent className="p-5 sm:p-6">
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-stone-900">{exp.role}</h3>
                      <p className="text-sm text-stone-700" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>{exp.company}</p>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wide text-stone-600" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>{exp.period}</span>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-stone-700" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Featured Work</p>
            <h2 className="text-2xl font-semibold sm:text-3xl" style={{ fontFamily: '"Times New Roman", Georgia, serif' }}>Selected interviews, features, and data-led stories</h2>
          </div>
          <a
            href="https://www.techcircle.in/author/pahi-mehra"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-800 shadow-sm transition hover:border-amber-300 hover:text-amber-800"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
          >
            More work / stories <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group block rounded-3xl border border-stone-200 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-amber-300 hover:bg-white"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs text-amber-900" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                  {project.tag}
                </span>
                <ExternalLink className="h-4 w-4 text-stone-500 transition group-hover:text-amber-700" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-stone-900">{project.title}</h3>
              <p className="text-sm leading-6 text-stone-700" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>{project.description}</p>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="rounded-3xl border-stone-200 bg-white/85 text-stone-900 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Contact</p>
              <h2 className="mb-3 text-2xl font-semibold sm:text-3xl" style={{ fontFamily: '"Times New Roman", Georgia, serif' }}>Let’s build impactful technology narratives</h2>
              <p className="mb-6 text-sm leading-7 text-stone-700 sm:text-base" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                I’m open to editorial opportunities, tech reporting assignments, interview-led features, and communication roles spanning corporate communications, media relations, and thought-leadership content.
              </p>

              <div className="space-y-3" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                <a href="tel:+919953663331" className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 transition hover:border-amber-300 hover:bg-amber-50/40">
                  <Phone className="h-4 w-4 text-amber-700" />
                  <div>
                    <div className="text-xs text-stone-600">Phone</div>
                    <div className="text-sm text-stone-900">+91 99536 63331</div>
                  </div>
                </a>
                <a href="mailto:pahimehra10@gmail.com" className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 transition hover:border-amber-300 hover:bg-amber-50/40">
                  <Mail className="h-4 w-4 text-amber-700" />
                  <div>
                    <div className="text-xs text-stone-600">Email</div>
                    <div className="text-sm text-stone-900">pahimehra10@gmail.com</div>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/pahi-mehra-450147157" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 transition hover:border-amber-300 hover:bg-amber-50/40">
                  <Linkedin className="h-4 w-4 text-amber-700" />
                  <div>
                    <div className="text-xs text-stone-600">LinkedIn</div>
                    <div className="text-sm text-stone-900">linkedin.com/in/pahi-mehra-450147157</div>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-stone-200 bg-white/80 text-stone-900 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Unique Value Proposition</p>
              <div className="space-y-4 text-sm leading-7 text-stone-700" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                <p>
                  <span className="font-medium text-stone-900">Why I stand out:</span> I bring seven years of experience shaping technology narratives across newsrooms — with strengths that extend into corporate communications, media relations, executive messaging, and thought-leadership storytelling.
                </p>
                <p>
                  My edge is combining editorial judgement with communications strategy: I can report, write, and package stories that are credible and nuanced, while also aligning messaging for brands, leaders, and media-facing communication goals.
                </p>
                <div className="grid gap-3">
                  {[
                    "Fast-moving tech coverage with editorial rigor",
                    "SEO-aware writing without sacrificing clarity",
                    "Interview-driven reporting and strong source development",
                    "Executive and brand narratives for media-facing communication",
                    "Multi-format storytelling across news, interviews, features, analysis, and thought leadership",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 rounded-xl border border-stone-200 bg-white p-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-700" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-4 text-center text-xs text-stone-500" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
        © {new Date().getFullYear()} Pahi Mehra • Technology Storytelling Portfolio
      </footer>
    </div>
  );
}
