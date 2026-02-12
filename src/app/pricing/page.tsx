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
    question: "Is uploading content as a director really free?",
    answer:
      "Absolutely. Directors can upload AI-generated content at no cost. You earn revenue through our subscriber revenue sharing model — the more viewers watch your content, the more you earn.",
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
          Directors always upload for free.
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
        <div className="max-w-6xl mx-auto mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cyan/5 border border-cyan/20">
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
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <span className="text-sm text-light/70">
              Want to upload content?{" "}
              <span className="text-cyan font-semibold">
                Creating is always free
              </span>{" "}
              — earn revenue from viewer subscriptions.
            </span>
          </div>
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
