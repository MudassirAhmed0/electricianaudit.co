export interface GapNarrative {
  heading: string;
  whyItMatters: string;
  whatTopSitesDo: string;
  costLine: string;
}

/** Interpolate {market}, {pct}, {count} into narrative templates */
export function interpolate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`));
}

export const gapNarratives: Record<string, GapNarrative> = {
  "no-schema-markup": {
    heading: "{pct}% of electrician sites in {market} have no LocalBusiness schema",
    whyItMatters:
      "Schema markup tells Google exactly what your business is, where you operate, and what services you offer. Without it, you're relying on Google to guess — and it often guesses wrong. Electrical companies with LocalBusiness schema appear in more local pack results and get richer search listings with ratings, hours, and service areas displayed directly in results.",
    whatTopSitesDo:
      "Top-performing electrician sites in {market} embed JSON-LD LocalBusiness schema on every page. They include service type, area served, price range, aggregate ratings, and opening hours. This gives Google structured data it can use to surface the business in local searches, map results, and knowledge panels.",
    costLine:
      "{count} electrician sites in {market} are invisible to Google's rich results because they lack basic schema markup.",
  },

  "no-commercial-page": {
    heading: "{pct}% of electrical companies in {market} have no commercial services page",
    whyItMatters:
      "Commercial electrical work is one of the highest-value revenue streams for electrical companies. Business owners and property managers search specifically for \"commercial electrician\" and \"office electrical contractor.\" Without a dedicated page, you're invisible to this entire segment — even if you already do the work.",
    whatTopSitesDo:
      "Leading electrical companies in {market} have dedicated commercial electrical pages with specific service offerings, commercial project galleries, and business client testimonials. They rank for \"commercial electrician {market}\" and capture property managers who need reliable ongoing service.",
    costLine:
      "{count} electrical companies in {market} are missing out on the commercial market — one of the highest-margin segments in the electrical industry.",
  },

  "no-online-scheduling": {
    heading: "{pct}% of electrician websites in {market} have no online scheduling",
    whyItMatters:
      "Homeowners expect to book electrical work the same way they order food — online, instantly. When a potential customer visits your site at 9 PM and can't schedule a service call, they don't call back tomorrow. They find someone who lets them book right now. Every hour without online scheduling is an hour you're losing to competitors who have it.",
    whatTopSitesDo:
      "The best electrician sites in {market} offer instant online scheduling or quote forms that take under 60 seconds. They show available time slots, transparent pricing, and confirmation within minutes. Some integrate with scheduling tools that auto-fill the calendar and send reminders — reducing no-shows and admin time.",
    costLine:
      "{count} electrical businesses in {market} are forcing customers to call or email to book — and losing the ones who won't.",
  },

  "no-contact-form": {
    heading: "{pct}% of electrician sites in {market} have no contact form",
    whyItMatters:
      "Not everyone wants to call. Many homeowners prefer to send a message, especially outside business hours. A contact form is the minimum viable way to capture leads — without one, you're turning away every visitor who doesn't want to pick up the phone. That's a significant portion of younger homeowners and busy professionals.",
    whatTopSitesDo:
      "Top electrical companies in {market} have contact forms on every page — not just the contact page. They keep forms short (name, email, phone, zip, service type) and respond within minutes during business hours. The best ones use auto-responders so leads get instant confirmation.",
    costLine:
      "{count} electrician sites in {market} have no contact form at all — the easiest lead capture tool to add and the most costly to be missing.",
  },

  "no-pricing-page": {
    heading: "{pct}% of electrician websites in {market} hide their pricing",
    whyItMatters:
      "Homeowners comparison-shop electrical services. If they can't find a ballpark price on your site, they leave and check the competitor who shows one. Hiding pricing doesn't create mystery — it creates friction. The electrical companies that show transparent pricing convert more because they attract pre-qualified leads who already know the range.",
    whatTopSitesDo:
      "High-converting electrician sites in {market} publish starting prices or price ranges for common services like outlet installs, panel upgrades, and whole-home rewires. They frame pricing by project scope (e.g., \"Outlet installation starting at $150\") and include an instant quote calculator. This filters out low-budget leads and attracts customers ready to book.",
    costLine:
      "{count} electrical companies in {market} are losing comparison shoppers because they don't show pricing — the #1 thing homeowners search for.",
  },

  "no-recurring-plan": {
    heading: "{pct}% of electrician sites in {market} don't frame recurring plans",
    whyItMatters:
      "Recurring maintenance clients are 5-10x more valuable than one-time service calls. A commercial client on a quarterly maintenance plan at $500/visit is worth $2,000/year — but most electrician websites treat every service as a one-off. Without framing maintenance plans with clear pricing and savings, you're leaving your most profitable revenue stream on the table.",
    whatTopSitesDo:
      "The best electrical companies in {market} dedicate a section or page to maintenance plans. They show annual inspection, quarterly check-up, and on-call priority options with per-visit savings (e.g., \"Save 15% with an annual plan\"). They emphasize safety, code compliance, and the benefit of a dedicated electrician who knows your system.",
    costLine:
      "{count} electrician sites in {market} don't promote recurring plans — missing the highest lifetime-value customers in the industry.",
  },

  "no-satisfaction-guarantee": {
    heading: "{pct}% of electrical companies in {market} show no satisfaction guarantee",
    whyItMatters:
      "Letting strangers into your home requires trust. A satisfaction guarantee is the single fastest way to reduce that anxiety. It tells the customer: \"If we miss something, we'll come back and fix it — free.\" Without one, you're asking customers to take all the risk. Most won't.",
    whatTopSitesDo:
      "Top-rated electrical companies in {market} display their satisfaction guarantee prominently — on the homepage, service pages, and booking flow. The strongest ones offer a \"100% satisfaction guarantee\" with specific language about what's covered. This converts fence-sitters into first-time bookings.",
    costLine:
      "{count} electrical companies in {market} have no visible satisfaction guarantee — the most effective trust signal for getting first-time customers to book.",
  },

  "no-https-redirect": {
    heading: "{pct}% of electrician sites in {market} don't redirect HTTP to HTTPS",
    whyItMatters:
      "When someone types your URL or clicks an old link, they may land on the HTTP version of your site. Without a redirect, Chrome displays a \"Not Secure\" warning in the address bar. For an electrical company — a business built on trust and entering people's homes — that warning is devastating. Visitors leave immediately.",
    whatTopSitesDo:
      "Every well-maintained electrician site in {market} uses a 301 redirect from HTTP to HTTPS. This ensures all visitors see a secure site regardless of how they arrive. It also consolidates SEO authority on a single URL version, preventing duplicate content issues.",
    costLine:
      "{count} electrician sites in {market} show a \"Not Secure\" warning to visitors arriving via HTTP — killing trust before the homepage even loads.",
  },

  "missing-meta-description": {
    heading: "{pct}% of electrician sites in {market} have missing or weak meta descriptions",
    whyItMatters:
      "The meta description is your 160-character sales pitch in Google results. Without one, Google auto-generates a snippet — usually pulling random text from your page that reads poorly. A strong meta description with your city name, services, and a call to action can double your click-through rate from search results.",
    whatTopSitesDo:
      "Leading electrical companies in {market} write unique meta descriptions for every page. Each one includes the city name, primary service, a differentiator (e.g., \"bonded & insured\"), and a CTA like \"Book online today.\" They treat meta descriptions as ads — because in search results, that's exactly what they are.",
    costLine:
      "{count} electrician sites in {market} are letting Google write their search result descriptions for them — and Google rarely does a good job.",
  },

  "phone-not-clickable": {
    heading: "{pct}% of electrician sites in {market} have non-clickable phone numbers",
    whyItMatters:
      "Over 60% of electrical service searches happen on mobile. When someone finds your site on their phone and wants to call, they expect to tap the number. If your phone number is plain text instead of a tel: link, they have to memorize it, switch apps, and type it in. Most won't bother — they'll tap the back button and call the next result.",
    whatTopSitesDo:
      "The best electrician sites in {market} use clickable tel: links for every phone number on every page. Many add a sticky call button on mobile that follows the user as they scroll. This single change — making the number tappable — can increase phone leads by 30-40%.",
    costLine:
      "{count} electrician websites in {market} are losing mobile callers because their phone number isn't tap-to-call.",
  },

  "no-cta-above-fold": {
    heading: "{pct}% of electrician sites in {market} have no CTA above the fold",
    whyItMatters:
      "You have 3-5 seconds to tell a visitor what to do next. If the first screen they see has no \"Book Now,\" \"Get a Quote,\" or \"Call Us\" button, they scroll aimlessly — or leave. A clear call-to-action above the fold is the difference between a lead and a bounce. It's the single highest-impact element on your homepage.",
    whatTopSitesDo:
      "Top electrical companies in {market} place a prominent CTA button in the hero section — visible without scrolling on both desktop and mobile. The best ones use action-oriented text like \"Get an Instant Quote\" or \"Book an Electrician\" with a contrasting color that stands out from the rest of the page.",
    costLine:
      "{count} electrician sites in {market} have no call-to-action visible on the first screen — the most important real estate on any website.",
  },

  "no-panel-upgrade-page": {
    heading: "{pct}% of electrical companies in {market} have no panel upgrade page",
    whyItMatters:
      "Panel upgrades are typically $2,000-$5,000+ and one of the highest-value services an electrician offers. Homeowners search specifically for \"panel upgrade\" and \"electrical panel replacement\" — if you don't have a dedicated page, you don't rank for these terms and you lose high-value jobs.",
    whatTopSitesDo:
      "Successful electrical companies in {market} have a dedicated panel upgrade page with a clear scope of work (100A to 200A upgrades, meter base replacement, breaker panel swaps), pricing ranges, before/after photos, and a scheduling CTA. This page captures search traffic and pre-qualifies leads.",
    costLine:
      "{count} electrical companies in {market} are missing a panel upgrade page — one of the highest-converting service pages in the industry.",
  },

  "no-blog": {
    heading: "{pct}% of electrician sites in {market} have no blog or content hub",
    whyItMatters:
      "A blog isn't about writing for fun — it's about ranking for the hundreds of electrical questions homeowners ask Google every month. \"How much does a panel upgrade cost?\" \"When should I rewire my house?\" \"Why do my breakers keep tripping?\" Every answer is a chance to appear in search results and convert a reader into a customer.",
    whatTopSitesDo:
      "The best electrical companies in {market} publish 2-4 blog posts per month answering common customer questions. They target local keywords (\"electrical safety tips {market}\"), link to their service pages, and include booking CTAs in every post. This builds organic traffic that compounds over time.",
    costLine:
      "{count} electrical companies in {market} have no blog — missing hundreds of long-tail search queries that could bring in free organic leads every month.",
  },

  "no-emergency-services-page": {
    heading: "{pct}% of electrician sites in {market} have no emergency services page",
    whyItMatters:
      "Electrical emergencies are high-urgency, high-value jobs. Homeowners with a power outage or sparking outlet need help immediately and are willing to pay premium prices. They search \"emergency electrician {market}\" and call the first company with a clear offering. Without a dedicated page, you don't rank for these searches and you lose these time-sensitive, high-margin jobs.",
    whatTopSitesDo:
      "Leading electrical companies in {market} have a dedicated 24/7 emergency services page with clear response time guarantees, emergency pricing, and a prominent click-to-call button. Many highlight their after-hours availability and same-day service.",
    costLine:
      "{count} electrical companies in {market} don't have an emergency services page — missing one of the most time-sensitive and profitable service categories.",
  },

  "no-service-area-pages": {
    heading: "{pct}% of electrician sites in {market} have no service area pages",
    whyItMatters:
      "When someone searches \"electrician in [neighborhood]\" or \"electrical contractor near [suburb],\" Google looks for pages that specifically mention those locations. Without service area pages, you're relying on your homepage alone to rank for every city, town, and neighborhood you serve. It won't.",
    whatTopSitesDo:
      "Top electrical companies in {market} create individual pages for each city, suburb, and major neighborhood they serve. Each page includes unique content about that area, local testimonials, and specific service details. This is one of the highest-ROI SEO strategies for local service businesses.",
    costLine:
      "{count} electrical companies in {market} have no service area pages — invisible in local searches beyond their immediate city.",
  },

  "no-bonded-insured-messaging": {
    heading: "{pct}% of electrician sites in {market} don't mention bonded, insured, or background checks",
    whyItMatters:
      "You're asking homeowners to give strangers keys to their home. The #1 concern is safety and accountability. If your website doesn't prominently state that your team is bonded, insured, and background-checked, customers assume the worst — or they just book with the company that does mention it.",
    whatTopSitesDo:
      "The most trusted electrical companies in {market} display bonded, insured, and background-checked badges on every page. They describe their screening process, carry visible insurance documentation, and some even link to their bond certificate. This converts more cautious homeowners who are comparison-shopping on trust.",
    costLine:
      "{count} electrical companies in {market} don't address the #1 customer concern — whether their team can be trusted inside a home.",
  },

  "no-first-time-offer": {
    heading: "{pct}% of electrician sites in {market} have no first-time customer offer",
    whyItMatters:
      "The hardest conversion in electrical services is the first booking. Once someone tries your service and likes it, they often become a recurring client worth thousands per year. A first-time discount ($25-$50 off) or a free add-on (free electrical safety inspection) dramatically lowers the barrier to that first service call — and the lifetime value far exceeds the discount.",
    whatTopSitesDo:
      "High-growth electrical companies in {market} promote a first-time offer prominently — in the hero section, as a banner, or as a pop-up. They frame it as limited (\"$50 off your first service call this month\") and tie it to booking online. This creates urgency and captures leads who are on the fence.",
    costLine:
      "{count} electrical companies in {market} offer no incentive for first-time customers — the single most effective tool for converting browsers into booked clients.",
  },

  "no-before-after-gallery": {
    heading: "{pct}% of electrician sites in {market} have no before/after gallery",
    whyItMatters:
      "Electrical work is a visual service — the transformation is the product. Before/after photos are more persuasive than any written testimonial because they show the actual quality of your work. Without them, customers have to take your word for it. With them, they can see the difference you make.",
    whatTopSitesDo:
      "The best electrical companies in {market} maintain a gallery of before/after photos organized by service type (panel upgrades, rewires, lighting installs). They take consistent, well-lit photos and update the gallery regularly. Some embed them on service pages for maximum impact.",
    costLine:
      "{count} electrician sites in {market} have no visual proof of their work — missing the most persuasive content format for a visual service.",
  },

  "no-analytics": {
    heading: "{pct}% of electrician sites in {market} have no analytics tracking",
    whyItMatters:
      "Without analytics, you have no idea how many people visit your site, where they come from, what pages they view, or where they drop off. You can't measure what you can't track. Every marketing dollar you spend — ads, SEO, social media — is a guess without data showing what's actually working.",
    whatTopSitesDo:
      "Well-run electrical companies in {market} install Google Analytics and track key events: form submissions, phone clicks, scheduling completions. They review traffic sources monthly to know which marketing channels drive real leads — and stop spending on channels that don't.",
    costLine:
      "{count} electrical companies in {market} are flying blind — spending money on marketing with no way to measure if it's working.",
  },

  "phone-mismatch": {
    heading: "{pct}% of electrician sites in {market} have a phone mismatch with Google",
    whyItMatters:
      "When your website shows a different phone number than your Google Business Profile, it creates two problems. First, customers get confused and lose trust. Second, Google uses phone number consistency as a local ranking signal — a mismatch hurts your position in local search and map results.",
    whatTopSitesDo:
      "Consistent electrical businesses in {market} use the same primary phone number across their website, Google Business Profile, Yelp, Facebook, and all directories. They audit their NAP (Name, Address, Phone) quarterly and immediately update any listing that falls out of sync.",
    costLine:
      "{count} electrical companies in {market} have a phone number on their website that doesn't match Google — confusing customers and hurting local rankings.",
  },
};
