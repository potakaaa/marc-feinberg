export const site = {
  url: "https://marcfeinberg.com",
  name: "Marc Feinberg",
  title: "Marc Feinberg | Christian High-Performance Coach",
  description:
    "Marc Feinberg is a Christian high-performance coach, author, speaker, and advisor helping athletes, entrepreneurs, and leaders achieve purpose-driven results.",
  calendly: "https://calendly.com/marcfeinberg",
  email: "marc@marcfeinberg.com",
  phoneDisplay: "561-309-1334",
  phoneHref: "tel:+15613091334",
  address: "2007 Cove Lane, North Palm Beach, FL 33408",
  addressLocality: "North Palm Beach",
  addressRegion: "FL",
  postalCode: "33408",
  addressCountry: "US",
  assets: "/assets/marc",
  analytics: {
    provider: "plausible",
    domain: "marcfeinberg.com",
    script: "https://plausible.io/js/script.js",
  },
}

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Books", href: "/books" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
]

export const trustItems = [
  "Christian Life & Business Coach",
  "High-Performance Advisor",
  "Author & Speaker",
  "Mastermind Facilitator",
  "Certified Biblical Counselor",
]

export const services = [
  {
    title: "Accountability & Performance Coaching",
    shortTitle: "High-Performance Coaching",
    description:
      "Weekly accountability, mindset work, and execution strategy for athletes, entrepreneurs, and leaders who are ready to operate at a higher level.",
    outcomes: ["Clearer targets", "Stronger discipline", "Consistent execution"],
  },
  {
    title: "Christian Life & Business Coaching",
    shortTitle: "Christian Life & Business Coaching",
    description:
      "Faith-aligned coaching for leaders who want wisdom, purpose, and practical direction across life, business, relationships, and legacy.",
    outcomes: ["Purpose alignment", "Biblical wisdom", "Confident decisions"],
  },
  {
    title: "Mastermind Facilitation & Growth Groups",
    shortTitle: "Mastermind Facilitation",
    description:
      "Guided mastermind sessions for teams, retreats, and leadership circles that need meaningful conversation, breakthrough, and momentum.",
    outcomes: ["Aligned teams", "Focused dialogue", "Faster momentum"],
  },
  {
    title: "Sales Training & Keynote Speaking",
    shortTitle: "Speaking & Strategy Sessions",
    description:
      "Transformational speaking and sales strategy for organizations that want practical inspiration, stronger leadership, and measurable action.",
    outcomes: ["Memorable keynotes", "Sales clarity", "Actionable frameworks"],
  },
  {
    title: "Power Lunch Strategy Session",
    shortTitle: "Power Lunch",
    description:
      "A focused strategy session for leaders who need immediate clarity on a business, performance, leadership, or personal breakthrough decision.",
    outcomes: ["Fast diagnosis", "Focused next steps", "Direct accountability"],
  },
  {
    title: "30-Day Personal Coaching Program",
    shortTitle: "30-Day Coaching",
    description:
      "An intensive month of coaching designed to create clarity, remove friction, and build a practical plan for your next level of performance.",
    outcomes: ["Deep focus", "Personal roadmap", "Measurable progress"],
  },
]

export const whyCards = [
  {
    title: "Elite Clientele",
    image: `${site.assets}/nick-vujicic.jpg`,
    alt: "Marc Feinberg collaborating with Nick Vujicic",
    caption: "Collaborating with Nick Vujicic, Founder, Life Without Limbs",
    description:
      "Marc has coached and advised world champions, Olympic gold medalists, professional athletes, entrepreneurs, and global thought leaders.",
  },
  {
    title: "Performance-Driven Coaching",
    image: `${site.assets}/robert-karlsson.webp`,
    alt: "Marc Feinberg on tour with golf legend Robert Karlsson",
    caption: "On tour with golf legend Robert Karlsson",
    description:
      "His work blends elite mindset mastery with practical performance strategy so clients can execute under pressure and win at a higher level.",
  },
  {
    title: "The Principle That Changes Everything",
    image: `${site.assets}/evander-holyfield.jpg`,
    alt: "Marc Feinberg coaching Evander Holyfield",
    caption: "Coaching Evander Holyfield beyond the ring",
    description:
      "Marc’s core philosophy, Forgiveness Equals Freedom, helps clients release what holds them back and step into purpose, focus, and power.",
  },
]

export const testimonials = [
  {
    name: "Evander Holyfield",
    role: "5X Heavyweight Champion",
    image: `${site.assets}/testimonial-evander.jpg`,
    url: "https://www.youtube.com/watch?v=Jw3kQg8Q3sg&t=6s",
  },
  {
    name: "Shannon Briggs",
    role: "2X Heavyweight Champion",
    image: `${site.assets}/testimonial-shannon.jpg`,
    url: "https://www.youtube.com/watch?v=z8yDajqhrBU&t=32s",
  },
  {
    name: "Henry Tillman",
    role: "Olympic Heavyweight Gold Medalist",
    image: `${site.assets}/testimonial-henry.jpg`,
    url: "https://www.youtube.com/watch?v=N39saWdaBr0",
  },
  {
    name: "Pastor Kevin Jackson",
    role: "Best Selling Author",
    image: `${site.assets}/testimonial-kevin.jpg`,
    url: "https://www.youtube.com/watch?v=_Lp_VW6zr88",
  },
  {
    name: "Natalia Maldonado",
    role: "Lifestyle Entrepreneur",
    image: `${site.assets}/testimonial-natalia.jpg`,
    url: "https://www.youtube.com/watch?v=i_cLPK9u-U8",
  },
  {
    name: "Debra Kagan",
    role: "Womens Mojo Specialist",
    image: `${site.assets}/testimonial-debra.jpg`,
    url: "https://www.youtube.com/watch?v=WZgi9mxViho",
  },
]

const bookAssetVersion = "2026-06-15-2"
const bookAsset = (filename: string) => `${site.assets}/${filename}?v=${bookAssetVersion}`

export const books = [
  {
    title: "31 WISE",
    subtitle: "31 Proverbs. 31 Days. The W.I.S.E. Method.",
    image: bookAsset("book-31-wise.webp"),
    description:
      "A daily Proverbs journal for unlocking God’s wisdom across faith, family, fitness, finance, and personal growth.",
    url: "https://www.amazon.com/31-WISE-Marc-Feinberg/dp/B09PHBV1RH",
  },
  {
    title: "The Dream Teen",
    subtitle: "3 life-changing steps for parents to empower teens.",
    image: bookAsset("book-full-power.jpg"),
    description:
      "A parent-focused framework for helping teens become connected, confident, committed, and resilient.",
    url: "https://www.amazon.com/Dream-Teen-CONNECTED-CONFIDENT-Extraordinary/dp/B0DNW5T35H",
  },
  {
    title: "The Wisdom Journal for Small Groups",
    subtitle: "Bible study meets breakthrough mastermind.",
    image: bookAsset("book-a-myth.webp"),
    description:
      "A guided journal for small groups that turns Proverbs into practical discussion, reflection, and application.",
    url: "https://www.amazon.com/Wisdom-Journal-Small-Groups-Proverbs/dp/B09CRQDCDZ",
  },
  {
    title: "The Secret Money Pill",
    subtitle: "Prescriptions for designing a debt-free company.",
    image: bookAsset("book-debt-settlement.jpg"),
    description:
      "Biblical principles and practical business strategy for resolving debt, improving cash flow, and building with purpose.",
    url: "https://www.amazon.com/Secret-Money-Pill-Prescriptions-Designing/dp/1507687141",
  },
  {
    title: "The A-Myth",
    subtitle: "3 simple steps to break free from addiction.",
    image: bookAsset("book-secret-money-pill.jpg"),
    description:
      "A direct, decision-centered guide to breaking destructive patterns and stepping into lasting freedom.",
    url: "https://www.amazon.com/MYTH-Simple-Break-Free-Addiction-Return/dp/1979175101",
  },
  {
    title: "Full Power",
    subtitle: "Healing trauma. Restoring purpose. Living free.",
    image: bookAsset("book-dream-teen.jpg"),
    description:
      "A story-driven guide for transforming pain, resentment, betrayal, and loss into purpose and freedom.",
    url: "https://www.amazon.com/Full-Power-Unforgiveness-Steals-Simple/dp/1978215282",
  },
  {
    title: "Debt Settlement's Dirty Little Secrets",
    subtitle: "Exposing the truth. Protecting your wallet.",
    image: bookAsset("book-wisdom-journal.png"),
    description:
      "A consumer protection guide that reveals costly debt settlement traps and points toward better options.",
    url: "https://www.amazon.com/Debt-Settlements-Dirty-Little-Secrets/dp/B0FLXSV3XD",
  },
]

export const blogPosts = [
  {
    slug: "navigational-intelligence-blueprint-for-success",
    title: "Navigational Intelligence: Why Creating a Blueprint for Success is Necessary for Achievement",
    category: "Performance",
    date: "June 12, 2025",
    isoDate: "2025-06-12",
    image: `${site.assets}/mastermind.gif`,
    imagePosition: "50% 38%",
    excerpt:
      "Success is not accidental. Leaders need a clear blueprint, disciplined direction, and the right accountability to move toward what matters.",
    content: [
      "Achievement becomes more consistent when a leader can see the route ahead. Navigational intelligence is the ability to define the destination, identify the obstacles, and build a practical blueprint for daily execution.",
      "For high performers, the problem is rarely a lack of ambition. The real friction is usually unclear priorities, scattered effort, or a missing accountability structure. A strong blueprint turns purpose into action.",
      "Marc helps leaders move from intention to implementation by clarifying what matters now, creating disciplined next steps, and building the accountability required to stay aligned under pressure.",
    ],
  },
  {
    slug: "emotional-intelligence-deciding-what-i-want",
    title: "Emotional Intelligence: Why Deciding What I Want is the Key to Accomplishment in Life",
    category: "Mindset",
    date: "June 12, 2025",
    isoDate: "2025-06-12",
    image: `${site.assets}/marc-portrait.jpeg`,
    imagePosition: "50% 10%",
    excerpt:
      "Clarity begins when you define what you truly want, then build the courage and discipline to make aligned decisions.",
    content: [
      "Emotional intelligence starts with honest clarity. When leaders know what they actually want, they can make cleaner decisions, communicate with more conviction, and stop spending energy on goals that do not fit their purpose.",
      "Deciding what you want is not selfish when it is grounded in wisdom, responsibility, and service. It gives your effort a target and your discipline a reason.",
      "Marc's coaching helps clients name the real desire beneath the pressure, test it against faith and purpose, and build an execution path that supports meaningful accomplishment.",
    ],
  },
  {
    slug: "identity-intelligence-foundation-of-success",
    title: "Identity Intelligence: Why Defining Who I Am is the Foundation of a Successful Life",
    category: "Leadership",
    date: "June 12, 2025",
    isoDate: "2025-06-12",
    image: `${site.assets}/evander-holyfield-2.jpg`,
    imagePosition: "50% 42%",
    excerpt:
      "Performance rises when identity is clear. Who you believe you are shapes what you tolerate, pursue, and build.",
    content: [
      "Identity intelligence is the discipline of understanding who you are before you decide what you will build. A leader's identity shapes standards, habits, relationships, and resilience.",
      "When identity is unclear, achievement can become reactive. People chase approval, compare constantly, or tolerate patterns that do not match their calling.",
      "Marc works with high achievers to align identity, faith, and execution so their performance grows from conviction rather than pressure alone.",
    ],
  },
  {
    slug: "becoming-mission-minded",
    title: "Becoming Mission Minded: How Living with Purpose Transforms Your Life and Impact",
    category: "Faith",
    date: "June 12, 2025",
    isoDate: "2025-06-12",
    image: `${site.assets}/nick-vujicic.jpg`,
    imagePosition: "50% 45%",
    excerpt:
      "A mission-minded life brings focus to daily choices and creates a stronger foundation for leadership, family, and legacy.",
    content: [
      "A mission-minded life gives every decision a stronger filter. Instead of drifting from demand to demand, purpose-driven leaders evaluate opportunities by whether they strengthen their assignment, relationships, and legacy.",
      "Mission creates focus. It helps leaders say yes with conviction, say no without guilt, and bring more consistency to their work, family, and faith.",
      "Marc helps clients connect purpose to practical action so mission becomes more than inspiration. It becomes the organizing force behind daily leadership.",
    ],
  },
  {
    slug: "finding-my-purpose-purpose-driven-life",
    title: "Finding My Purpose: Embracing a Purpose-Driven Life",
    category: "Faith",
    date: "June 12, 2025",
    isoDate: "2025-06-12",
    image: `${site.assets}/robert-karlsson.webp`,
    imagePosition: "50% 28%",
    excerpt:
      "Purpose is not vague inspiration. It is the organizing force that helps leaders make better decisions and move with conviction.",
    content: [
      "Purpose is not a slogan. It is a practical compass for decisions, habits, relationships, and leadership. When purpose is clear, leaders can move with less confusion and more conviction.",
      "A purpose-driven life requires both reflection and execution. You need the wisdom to identify what matters and the discipline to build your life around it.",
      "Marc's coaching brings faith, accountability, and performance strategy together so clients can clarify purpose and act on it with measurable consistency.",
    ],
  },
  {
    slug: "unlocking-your-potential-life-coach",
    title: "Unlocking Your Potential: The Transformative Power of a Life Coach",
    category: "Coaching",
    date: "June 7, 2025",
    isoDate: "2025-06-07",
    image: `${site.assets}/testimonial-lisa.jpg`,
    imagePosition: "50% 50%",
    excerpt:
      "The right outside perspective can help you see the patterns, beliefs, and decisions that are limiting your next level.",
    content: [
      "A strong coach helps you see what is difficult to see from inside your own patterns. The right outside perspective can expose limiting beliefs, sharpen priorities, and turn potential into a practical plan.",
      "For high achievers, coaching is not about needing motivation. It is about having a trusted voice that brings clarity, accountability, and honest feedback when the stakes are high.",
      "Marc helps clients unlock potential through faith-grounded wisdom, direct conversation, and weekly execution rhythms that support lasting growth.",
    ],
  },
]

export const faqs = [
  {
    question: "Who does Marc work with?",
    answer:
      "Marc works with professional athletes, entrepreneurs, executives, faith-driven leaders, teams, and high achievers who want clarity, accountability, and stronger execution.",
  },
  {
    question: "What happens on the free call?",
    answer:
      "The call is a focused conversation about where you are, what you want to change, what may be blocking progress, and whether Marc’s coaching is the right fit.",
  },
  {
    question: "Is the coaching faith-based?",
    answer:
      "Marc’s work is grounded in Christian principles and biblical wisdom, while staying practical, direct, and focused on real-life performance and leadership outcomes.",
  },
  {
    question: "Do you work with teams or organizations?",
    answer:
      "Yes. Marc offers mastermind facilitation, keynote speaking, sales training, leadership sessions, and team-oriented growth experiences.",
  },
  {
    question: "Do you offer speaking?",
    answer:
      "Yes. Marc speaks for leadership groups, business events, retreats, sales teams, and faith-driven organizations.",
  },
]
