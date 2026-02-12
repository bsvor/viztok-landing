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
            <a href="#creators" className="hover:text-cyan transition-colors">
              For Creators
            </a>
            <a href="#viewers" className="hover:text-cyan transition-colors">
              For Viewers
            </a>
            <a href="#pricing" className="hover:text-cyan transition-colors">
              Pricing
            </a>
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
            shows and movies. A Netflix-style experience powered by creators
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
            { title: "Void Walker", genre: "Horror", rating: "9.0" },
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
                  "Use your favorite AI tools to produce 10-30 minute narrative episodes. Upload directly to Viztok.",
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
                  "Viewers subscribe for unlimited access. Creators earn revenue share based on views and ratings.",
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

      {/* For Creators */}
      <section
        id="creators"
        className="py-24 px-6 bg-gradient-to-b from-navy to-navy/95"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Built for{" "}
              <span className="text-cyan">Creators</span>
            </h2>
            <p className="text-light/60 text-lg mb-8 leading-relaxed">
              Turn your AI-generated stories into revenue. Viztok gives creators
              the tools and audience to monetize their content.
            </p>
            <ul className="space-y-4">
              {[
                "Upload 10-30 minute AI-generated episodes",
                "Revenue sharing from subscriber fees",
                "AI quality scoring to boost discoverability",
                "Creator analytics dashboard",
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
                title: "Netflix-Style UI",
                desc: "Browse by genre, trending, or top rated",
                icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
              },
              {
                title: "Short-Form Series",
                desc: "10-30 min episodes, perfect for any schedule",
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

      {/* Pricing */}
      <section
        id="pricing"
        className="py-24 px-6 bg-gradient-to-b from-navy to-navy/95"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Simple <span className="text-cyan">Pricing</span>
          </h2>
          <p className="text-light/60 text-lg mb-16">
            One subscription. Unlimited AI-generated entertainment.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
              <div className="text-sm text-light/50 uppercase tracking-wider mb-2">
                Viewer
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-heading font-bold">$9.99</span>
                <span className="text-light/50">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited streaming",
                  "AI-personalized recommendations",
                  "All genres and categories",
                  "Watch on any device",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-light/70">
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
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full border border-cyan text-cyan font-semibold py-3 rounded-lg hover:bg-cyan hover:text-navy transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-cyan/5 border-2 border-cyan rounded-2xl p-8 text-left relative">
              <div className="absolute -top-3 right-6 bg-cyan text-navy text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <div className="text-sm text-cyan uppercase tracking-wider mb-2">
                Creator
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-heading font-bold">$14.99</span>
                <span className="text-light/50">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Viewer",
                  "Upload AI-generated content",
                  "Revenue sharing from views",
                  "Creator analytics dashboard",
                  "Priority AI review queue",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-light/70">
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
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-cyan text-navy font-semibold py-3 rounded-lg hover:bg-cyan/90 transition-colors">
                Start Creating
              </button>
            </div>
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
