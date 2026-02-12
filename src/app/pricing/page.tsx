"use client";

import { useState } from "react";
import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Get started with AI-generated entertainment",
    features: [
      "1 video per week",
      "720p streaming quality",
      "AI recommendations",
      "Ad-supported viewing",
      "1 device at a time",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$9.99",
    period: "/mo",
    description: "Unlimited access to the full Viztok library",
    features: [
      "Unlimited episodes",
      "1080p HD streaming",
      "AI-personalized recommendations",
      "Ad-free viewing",
      "Watch on 2 devices",
      "Download for offline",
    ],
    cta: "Start Standard",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$19.99",
    period: "/mo",
    description: "The ultimate viewing experience with exclusive perks",
    features: [
      "Unlimited episodes",
      "4K Ultra HD streaming",
      "Early access to new shows",
      "AI-personalized recommendations",
      "Ad-free viewing",
      "Watch on 4 devices",
      "Download for offline",
      "Behind-the-scenes director content",
    ],
    cta: "Go Premium",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Can I switch between plans at any time?",
    answer:
      "Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and you'll receive a prorated credit for any unused time on your current plan.",
  },
  {
    question: "How does the Free tier work?",
    answer:
      "The Free tier gives you access to 1 video per week at 720p quality with ad-supported viewing. It's a great way to explore the platform before committing to a paid plan.",
  },
  {
    question: "How do directors earn money on Viztok?",
    answer:
      "Directors earn their share of ticket sales through our revenue sharing model. Every time a subscriber watches your content, you earn a portion of the revenue. The more viewers your films and series attract, the more you earn. There's no upfront cost to upload — you get paid based on performance.",
  },
  {
    question: "What does early access include on the Premium plan?",
    answer:
      "Premium subscribers get access to new shows and episodes 48 hours before they're available to Standard and Free viewers. You'll also see upcoming releases and can set reminders for new drops.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. There are no contracts or cancellation fees. You can cancel at any time and you'll continue to have access until the end of your current billing period. You can also restart your subscription whenever you want.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-navy text-light">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-navy/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-heading font-bold tracking-tight"
          >
            <span className="text-cyan">Viz</span>
            <span className="text-light">tok</span>
          </Link>
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

      {/* Pricing Header */}
      <section className="pt-32 pb-8 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
          Choose Your <span className="text-cyan">Plan</span>
        </h1>
        <p className="text-light/60 text-lg max-w-2xl mx-auto">
          From free to premium — pick the plan that fits how you watch.
        </p>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 text-left relative flex flex-col ${
                tier.highlighted
                  ? "bg-cyan/5 border-2 border-cyan"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 right-6 bg-cyan text-navy text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
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
                <span className="text-5xl font-heading font-bold">
                  {tier.price}
                </span>
                <span className="text-light/50">{tier.period}</span>
              </div>
              <p className="text-sm text-light/50 mb-8">{tier.description}</p>
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

        {/* Director callout */}
        <div className="max-w-3xl mx-auto mt-16 rounded-2xl bg-cyan/5 border border-cyan/20 p-8 text-center">
          <div className="w-14 h-14 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-7 h-7 text-cyan"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-heading font-bold mb-2">
            Are You a <span className="text-cyan">Director</span>?
          </h3>
          <p className="text-lg text-light/70 mb-1">
            Earn your share of ticket sales.
          </p>
          <p className="text-sm text-light/50 max-w-lg mx-auto mb-6">
            Upload your AI-generated films and series to Viztok. Every time a subscriber watches your content, you earn a share of the revenue. The more viewers, the more you earn.
          </p>
          <a
            href="https://app.viztok.com/signup"
            className="inline-flex items-center gap-2 bg-cyan text-navy font-semibold px-6 py-3 rounded-lg hover:bg-cyan/90 transition-colors"
          >
            Start Creating
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Frequently Asked <span className="text-cyan">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-cyan shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-sm text-light/60 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="text-xl font-heading font-bold"
          >
            <span className="text-cyan">Viz</span>
            <span className="text-light">tok</span>
          </Link>
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
