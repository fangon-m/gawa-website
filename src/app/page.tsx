import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck,
  Check,
  Hammer,
  HardHat,
  MapPin,
  MessageCircle,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";
import DownloadDialog from "@/components/download-dialog";
import PhoneTime from "@/components/phone-time";

const features = [
  {
    number: "01",
    icon: Search,
    title: "Find the right people",
    description:
      "Explore skilled talent and contractors, then narrow your search by trade, rating, and distance.",
    tags: ["Browse talent", "Find contractors", "Skill filters"],
    className: "feature-card--people",
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    title: "Find work that fits",
    description:
      "Discover nearby opportunities, send proposals, and keep up with your jobs from application to completion.",
    tags: ["Nearby jobs", "Proposals", "Job tracking"],
    className: "feature-card--work",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Get the gear you need",
    description:
      "Browse equipment listings, send rental requests, and coordinate with equipment owners.",
    tags: ["Equipment listings", "Rental requests", "Owner tools"],
    className: "feature-card--gear",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Keep everything moving",
    description:
      "Message directly, follow activity, review project progress, and manage your GAWA Points in one place.",
    tags: ["Direct chat", "Activity updates", "GAWA Points"],
    className: "feature-card--connect",
  },
];

const steps = [
  {
    icon: UsersRound,
    title: "Choose your role",
    description: "Join as talent, a contractor, a client, or an equipment owner.",
  },
  {
    icon: Search,
    title: "Find your next move",
    description: "Browse people, jobs, and equipment that match what you need.",
  },
  {
    icon: CalendarCheck,
    title: "Get it done",
    description: "Chat, coordinate the details, and keep track as work gets done.",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="GAWA home">
          <span className="brand-mark">
            <Image src="/gawa-logo.png" width={34} height={36} alt="" priority />
          </span>
          <span className="brand-word">GAWA</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#features">What you can do</a>
          <a href="#how-it-works">How it works</a>
        </nav>

        <div className="header-action">
          <DownloadDialog
            trigger={
              <>
                Get the app <ArrowDown size={15} strokeWidth={2.4} />
              </>
            }
          />
        </div>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-glow hero-glow--one" aria-hidden="true" />
          <div className="hero-glow hero-glow--two" aria-hidden="true" />

          <div className="hero-inner">
            <div className="hero-copy">
              <a className="eyebrow" href="#features">
                <span className="eyebrow-dot" />
                Work, tools, and people — together
                <ArrowUpRight size={14} />
              </a>

              <h1 id="hero-title">
                Good work
                <br />
                starts with <span>GAWA.</span>
              </h1>
              <p className="hero-description">
                Find your next opportunity, connect with the right people, and
                get the equipment you need to make it happen.
              </p>

              <div className="hero-actions">
                <DownloadDialog
                  variant="primary"
                  trigger={
                    <>
                      Download the app <ArrowRight size={17} />
                    </>
                  }
                />
                <a className="button button--quiet" href="#features">
                  Explore GAWA <ArrowDown size={16} />
                </a>
              </div>

              <div className="hero-proof">
                <div className="proof-avatars" aria-hidden="true">
                  <span>J</span>
                  <span>M</span>
                  <span>A</span>
                  <span>
                    <UsersRound size={15} />
                  </span>
                </div>
                <p>
                  <strong>One place to get things done.</strong>
                  <span>For the people who make it happen.</span>
                </p>
              </div>
            </div>

            <div className="hero-visual" aria-label="A preview of the GAWA app">
              <div className="visual-orbit visual-orbit--outer" />
              <div className="visual-orbit visual-orbit--inner" />
              <div className="visual-sparkle visual-sparkle--one">✳</div>
              <div className="visual-sparkle visual-sparkle--two">✦</div>

              <article className="phone">
                <div className="phone-top">
                  <PhoneTime />
                  <span className="phone-camera" />
                  <span className="phone-status">● ● ▰</span>
                </div>
                <div className="phone-content">
                  <Image
                    className="phone-logo"
                    src="/gawa-logo.png"
                    width={140}
                    height={140}
                    alt="GAWA"
                    priority
                  />
                </div>
              </article>

              <div className="float-card float-card--verified">
                <span className="float-icon float-icon--verified">
                  <BadgeCheck size={20} />
                </span>
                <span>
                  <strong>People you can count on</strong>
                  <small>Find verified professionals</small>
                </span>
              </div>
              <div className="float-card float-card--rating">
                <span className="rating-stars">
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                </span>
                <strong>Work worth recommending.</strong>
              </div>
            </div>
          </div>

          <div className="hero-bottom container">
            <span>Hanap.</span>
            <span className="hero-bottom-line" />
            <span>Gawa.</span>
            <span className="hero-bottom-line" />
            <span>Tapos.</span>
            <span className="hero-bottom-note">
              A better way to get the job done.
            </span>
          </div>
        </section>

        <section className="features section-pad" id="features">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">
                  <Sparkles size={14} /> MEET YOUR NEW WORKFLOW
                </span>
                <h2>
                  One app. <span>More possibilities.</span>
                </h2>
              </div>
              <p>
                Whether you&apos;re building your home, looking for work, or
                searching for the right crew and equipment — you&apos;re in the
                right place.
              </p>
            </div>

            <div className="feature-grid">
              {features.map(
                ({
                  number,
                  icon: Icon,
                  title,
                  description,
                  tags,
                  className,
                }) => (
                  <article className={`feature-card ${className}`} key={number}>
                    <div className="feature-card-top">
                      <span className="feature-icon">
                        <Icon size={21} strokeWidth={1.9} />
                      </span>
                      <span className="feature-number">{number}</span>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="feature-tags">
                      {tags.map((tag) => (
                        <span key={tag}>
                          <Check size={12} /> {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="how-it-works section-pad" id="how-it-works">
          <div className="container how-layout">
            <div className="how-copy">
              <span className="section-kicker">
                <ShieldCheck size={14} /> SIMPLE FROM THE START
              </span>
              <h2>
                From looking
                <br />
                to <span>let&apos;s go.</span>
              </h2>
              <p>
                Less back-and-forth. More good work. GAWA brings the next step
                closer, wherever you&apos;re starting from.
              </p>
              <DownloadDialog
                variant="dark"
                trigger={
                  <>
                    Get started with GAWA <ArrowRight size={17} />
                  </>
                }
              />
            </div>
            <div className="steps">
              {steps.map(({ icon: Icon, title, description }, index) => (
                <article className="step" key={title}>
                  <div className="step-marker">
                    <span className="step-icon">
                      <Icon size={19} />
                    </span>
                    {index < steps.length - 1 && (
                      <span className="step-line" aria-hidden="true" />
                    )}
                  </div>
                  <div className="step-copy">
                    <span className="step-number">
                      THE FIRST STEP · 0{index + 1}
                    </span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <div className="cta-mark">
              <Image src="/gawa-logo.png" width={47} height={50} alt="" />
            </div>
            <span className="section-kicker">READY WHEN YOU ARE</span>
            <h2>
              Your next project
              <br />
              starts with <span>GAWA.</span>
            </h2>
            <p>Download the Android app and make your next move.</p>
            <DownloadDialog
              variant="primary"
              trigger={
                <>
                  Download the app <ArrowRight size={17} />
                </>
              }
            />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home" aria-label="GAWA home">
          <span className="brand-mark">
            <Image src="/gawa-logo.png" width={30} height={31} alt="" />
          </span>
          <span className="brand-word">GAWA 1.0.0</span>
        </a>
        <span>Hanap. Gawa. Tapos.</span>
        <span>Made for the people who make it happen.</span>
      </footer>
    </>
  );
}
