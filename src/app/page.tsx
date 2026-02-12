import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy text-light">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-navy/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-heading font-bold tracking-tight">
            <span className="text-cyan">Viz</span>
            <span className="text-light">tok</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#how-it-works" className="hover:text-cyan transition-colors">
              How It Works
            </a>
            <a href="#directors" className="hover:text-cyan transition-colors">
              For Directors
            </a>
            <a href="#viewers" className="hover:text-cyan transition-colors">
              For Viewers
            </a>
            <Link href="/pricing" className="hover:text-cyan transition-colors">
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm hover:text-cyan transition-colors">
              Sign In
            </button>
            <button className="bg-cyan text-navy font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-cyan/90 transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-sm">
            The Future of AI Entertainment
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
            Watch. Create.{" "}
            <span className="text-cyan">Earn.</span>
          </h1>
          <p className="text-lg md:text-xl text-light/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Viztok is the streaming platform for AI-generated short-form TV
            shows and movies. A Hollywood-quality experience powered by directors
            like you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan text-navy font-semibold px-8 py-4 rounded-lg text-lg hover:bg-cyan/90 transition-colors">
              Join the Waitlist
            </button>
            <button className="border border-light/20 text-light px-8 py-4 rounded-lg text-lg hover:border-cyan hover:text-cyan transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Mock Video Grid Preview */}
        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { title: "Neon Drift", genre: "Sci-Fi", rating: "9.2" },
            { title: "The Last Signal", genre: "Thriller", rating: "8.7" },
            { title: "Pixel Hearts", genre: "Romance", rating: "8.9" },
            { title: "Void Walker", genre: "Mystery", rating: "9.0" },
          ].map((show) => (
            <div
              key={show.title}
              className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-teal/20 to-navy border border-white/10 aspect-[2/3] flex flex-col justify-end p-4 hover:border-cyan/50 transition-colors cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
              <div className="relative">
                <span className="text-xs text-cyan font-semibold uppercase tracking-wider">
                  {show.genre}
                </span>
                <h3 className="font-heading text-lg font-bold mt-1">
                  {show.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-sm text-light/60">
                  <span className="text-cyan font-semibold">{show.rating}</span>
                  <span>AI Rated</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              How <span className="text-cyan">Viztok</span> Works
            </h2>
            <p className="text-light/60 text-lg max-w-2xl mx-auto">
              From creation to curation, powered by AI at every step.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create with AI",
                description:
                  "Use your favorite AI tools to produce 10-60 minute narrative episodes or feature-length films. Upload directly to Viztok.",
                icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
              },
              {
                step: "02",
                title: "AI Rates & Curates",
                description:
                  "Our AI watches every upload, scores quality, and recommends the best shows to viewers.",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              },
              {
                step: "03",
                title: "Watch & Earn",
                description:
                  "Viewers subscribe for unlimited access. Directors earn revenue share based on views and ratings.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-cyan"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                  </svg>
                </div>
                <div className="text-cyan text-sm font-semibold mb-2">
                  Step {item.step}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-light/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Directors */}
      <section
        id="directors"
        className="py-24 px-6 bg-gradient-to-b from-navy to-navy/95"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Built for{" "}
              <span className="text-cyan">Directors</span>
            </h2>
            <p className="text-light/60 text-lg mb-8 leading-relaxed">
              Turn your AI-generated stories into revenue. Viztok gives directors
              the tools and audience to monetize their content.
            </p>
            <ul className="space-y-4">
              {[
                "Upload 10-60 min episodes or feature films",
                "Revenue sharing from subscriber fees",
                "AI quality scoring to boost discoverability",
                "Director analytics dashboard",
                "Build a following with series and seasons",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-cyan mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-light/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan font-bold text-sm">
                AI
              </div>
              <div>
                <div className="font-semibold">AI Quality Score</div>
                <div className="text-sm text-light/50">
                  Analyzed in real-time
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Story", score: 92 },
                { label: "Visuals", score: 88 },
                { label: "Audio", score: 95 },
                { label: "Engagement", score: 90 },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-light/70">{metric.label}</span>
                    <span className="text-cyan font-semibold">
                      {metric.score}/100
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal to-cyan rounded-full"
                      style={{ width: `${metric.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <div className="text-3xl font-heading font-bold text-cyan">
                91.3
              </div>
              <div className="text-sm text-light/50 mt-1">
                Overall AI Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Directors Choose Viztok */}
      <section className="py-24 px-6 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/[0.02] to-transparent" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Your Vision. <span className="text-cyan">Your Rules.</span>
            </h2>
            <p className="text-light/60 text-lg max-w-2xl mx-auto">
              No studio notes. No focus groups. No algorithms deciding what
              stories deserve to be told. Just pure storytelling.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Full Creative Control",
                description:
                  "You own your vision from start to finish. No executives rewriting your ending, no committees watering down your voice. Your story ships exactly the way you made it.",
                icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
              },
              {
                title: "No Corporate Narratives",
                description:
                  "Traditional platforms push what sells ad space. Viztok pushes what moves people. There are no brand-safe content guidelines limiting what you can explore.",
                icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
              },
              {
                title: "Pure Storytelling",
                description:
                  "Tell the stories that keep you up at night. The weird ones, the bold ones, the ones no studio would greenlight. On Viztok, the audience decides what matters — not a boardroom.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-cyan"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-light/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Every Genre Welcome",
                description:
                  "Sci-fi epics, intimate dramas, animated shorts, documentary series — if you can imagine it and create it, it has a home here.",
                icon: "M7 4V20M17 4V20M3 8H7M17 8H21M3 12H21M3 16H7M17 16H21M4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20Z",
              },
              {
                title: "Merit Over Marketing",
                description:
                  "AI rates every show on story, visuals, audio, and engagement — not budget or connections. A first-time director has the same shot as a seasoned pro.",
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan/30 transition-colors flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-cyan"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-light/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Viewers */}
      <section id="viewers" className="py-24 px-6 bg-navy">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            A New Way to{" "}
            <span className="text-cyan">Watch</span>
          </h2>
          <p className="text-light/60 text-lg max-w-2xl mx-auto mb-16">
            Discover AI-generated shows curated by AI. Binge-worthy content that
            keeps getting better.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "AI Recommendations",
                desc: "Personalized picks based on what you love",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                title: "Hollywood-Style UI",
                desc: "Browse by genre, trending, or top rated",
                icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
              },
              {
                title: "Short-Form Series",
                desc: "10-60 min episodes and feature-length films",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Rate & Review",
                desc: "Help shape what content rises to the top",
                icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:border-cyan/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-cyan"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-light/50">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature-Length Films */}
      <section className="py-24 px-6 bg-gradient-to-b from-navy to-navy/95">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-sm">
                Now Streaming
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Feature-Length{" "}
                <span className="text-cyan">Films</span>
              </h2>
              <p className="text-light/60 text-lg mb-8 leading-relaxed">
                Go beyond episodes. Viztok is home to full-length AI-generated
                movies — 60 minutes and beyond. The same creative freedom,
                the same revenue sharing, on a cinematic scale.
              </p>
              <ul className="space-y-4">
                {[
                  "Upload films of any length",
                  "AI rates story, visuals, and production quality",
                  "Featured in dedicated movie categories",
                  "Premiere events for new releases",
                  "Same revenue share as episodic content",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-cyan mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-light/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "The Algorithm", genre: "Sci-Fi", length: "1h 42m", rating: "9.4" },
                { title: "Echoes of Tomorrow", genre: "Drama", length: "1h 28m", rating: "9.1" },
                { title: "Signal Lost", genre: "Thriller", length: "1h 55m", rating: "8.8" },
                { title: "The Dreaming City", genre: "Fantasy", length: "2h 10m", rating: "9.3" },
              ].map((film) => (
                <div
                  key={film.title}
                  className="relative rounded-xl overflow-hidden bg-gradient-to-br from-teal/20 to-navy border border-white/10 aspect-[3/4] flex flex-col justify-end p-4 hover:border-cyan/50 transition-colors cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                  <div className="relative">
                    <span className="text-xs text-cyan font-semibold uppercase tracking-wider">
                      {film.genre}
                    </span>
                    <h3 className="font-heading text-base font-bold mt-1">
                      {film.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-2 text-xs text-light/60">
                      <span className="text-cyan font-semibold">{film.rating}</span>
                      <span>{film.length}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-24 px-6 bg-navy"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Simple <span className="text-cyan">Pricing</span>
          </h2>
          <p className="text-light/60 text-lg mb-12">
            Free to watch. Upgrade for more. Directors always upload free.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Director",
                price: "$0",
                period: "/forever",
                description: "Upload and earn — always free for directors",
                features: [
                  "Upload AI-generated content",
                  "Revenue sharing from subs",
                  "AI quality scoring",
                  "Director analytics",
                  "Build series & seasons",
                ],
                cta: "Start Creating",
                highlighted: true,
                badge: "FREE",
              },
              {
                name: "Free",
                price: "$0",
                period: "/mo",
                description: "Get started with AI entertainment",
                features: [
                  "5 episodes per week",
                  "720p streaming",
                  "AI recommendations",
                  "Ad-supported",
                ],
                cta: "Get Started Free",
                highlighted: false,
                badge: null,
              },
              {
                name: "Standard",
                price: "$9.99",
                period: "/mo",
                description: "Unlimited access to the full library",
                features: [
                  "Unlimited episodes",
                  "1080p HD streaming",
                  "AI-personalized picks",
                  "Ad-free viewing",
                  "2 devices",
                ],
                cta: "Start Standard",
                highlighted: false,
                badge: "POPULAR",
              },
              {
                name: "Premium",
                price: "$19.99",
                period: "/mo",
                description: "The ultimate experience with perks",
                features: [
                  "Unlimited episodes",
                  "4K Ultra HD",
                  "Early access to shows",
                  "Ad-free viewing",
                  "4 devices",
                ],
                cta: "Go Premium",
                highlighted: false,
                badge: null,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 text-left relative flex flex-col ${
                  tier.highlighted
                    ? "bg-cyan/5 border-2 border-cyan"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 right-6 bg-cyan text-navy text-xs font-bold px-3 py-1 rounded-full">
                    {tier.badge}
                  </div>
                )}
                <div
                  className={`text-sm uppercase tracking-wider mb-2 ${
                    tier.highlighted ? "text-cyan" : "text-light/50"
                  }`}
                >
                  {tier.name}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-heading font-bold">
                    {tier.price}
                  </span>
                  <span className="text-light/50">{tier.period}</span>
                </div>
                <p className="text-sm text-light/50 mb-6">
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-light/70"
                    >
                      <svg
                        className="w-4 h-4 text-cyan shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full font-semibold py-3 rounded-lg transition-colors ${
                    tier.highlighted
                      ? "bg-cyan text-navy hover:bg-cyan/90"
                      : "border border-cyan text-cyan hover:bg-cyan hover:text-navy"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/pricing"
              className="text-cyan text-sm hover:underline"
            >
              View full plan details & FAQ &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-teal/5 to-cyan/5" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Join the{" "}
            <span className="text-cyan">Revolution?</span>
          </h2>
          <p className="text-light/60 text-lg mb-10">
            Be among the first to experience AI-generated entertainment. Sign up
            for early access today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-light placeholder:text-light/30 focus:outline-none focus:border-cyan transition-colors"
            />
            <button className="bg-cyan text-navy font-semibold px-8 py-4 rounded-lg hover:bg-cyan/90 transition-colors whitespace-nowrap">
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-heading font-bold">
            <span className="text-cyan">Viz</span>
            <span className="text-light">tok</span>
          </div>
          <div className="flex gap-8 text-sm text-light/50">
            <a href="#" className="hover:text-cyan transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-cyan transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-cyan transition-colors">
              Contact
            </a>
          </div>
          <div className="text-sm text-light/30">
            &copy; 2026 Viztok. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
