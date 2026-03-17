import type { DiagnosticType } from "./reports";

export interface PainPage {
  slug: string;
  diagnosticType: DiagnosticType;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  heroStat: string;
  heroStatLabel: string;
  sections: {
    whatWeFind: {
      heading: string;
      intro: string;
      findings: { stat: string; label: string; detail: string }[];
    };
    whyItHappens: {
      heading: string;
      reasons: { title: string; description: string }[];
    };
    whatToFix: {
      heading: string;
      intro: string;
      steps: { title: string; description: string; effort: string; impact: string }[];
    };
  };
}

export const painPages: PainPage[] = [
  {
    slug: "electrician-not-getting-calls",
    diagnosticType: "blind-spender",
    title: "Electrician Website Not Getting Calls? Here's Why | Electrician Audit",
    metaDescription:
      "We audited 1,200+ electrician websites. The average scores 41/100. If you're not getting calls, your website has problems you can't see. Free diagnostic report.",
    h1: "Your electrician website isn't getting calls.\nHere's what's actually wrong.",
    subtitle:
      "You built a website, maybe paid someone to set it up. But the phone isn't ringing. No form submissions. No booked jobs from online. You're wondering if digital even works for electrical businesses.",
    heroStat: "41",
    heroStatLabel: "avg electrician website score out of 100",
    sections: {
      whatWeFind: {
        heading: "What We Find When We Audit \"No Calls\" Electrician Websites",
        intro:
          "We've audited 1,200+ electrician websites. When a business says \"I'm not getting calls,\" the audit reveals a pattern every time.",
        findings: [
          {
            stat: "60%",
            label: "don't redirect HTTP to HTTPS",
            detail:
              "Chrome shows a \"Not Secure\" warning before visitors see anything else. For a business asking people to trust them inside their home to handle dangerous electrical work, that warning is a deal-killer.",
          },
          {
            stat: "84%",
            label: "have no online booking",
            detail:
              "When a homeowner's breaker trips at 9 PM, they search for help and expect to schedule instantly. No booking widget means they'll find the electrician who has one.",
          },
          {
            stat: "53%",
            label: "have no contact form",
            detail:
              "Over half the electrician sites we audit have no way for a visitor to reach the business other than finding a phone number. After 6 PM, that visitor is lost forever.",
          },
          {
            stat: "56%",
            label: "don't display a license number",
            detail:
              "Electrical work requires licensing in most states. Not showing yours makes you look less legitimate than every competitor who displays theirs — and homeowners notice.",
          },
        ],
      },
      whyItHappens: {
        heading: "Why This Happens to Electrical Businesses",
        reasons: [
          {
            title: "The website was built once and never touched",
            description:
              "Most electrician websites are set up by a local agency or a family member who knows WordPress. It worked fine in 2019. But Google's algorithm has changed, mobile usage has doubled, and your competitors have caught up.",
          },
          {
            title: "Nobody is measuring anything",
            description:
              "No Google Analytics, no call tracking, no form tracking. You have no idea how many people visit your site, where they come from, or why they leave. You're running a business blind.",
          },
          {
            title: "The site looks fine on your desktop",
            description:
              "You check your website on your office computer and it looks okay. But 60%+ of your customers are on mobile. On a phone, your site might load slowly, have tiny unclickable buttons, and no sticky call button.",
          },
        ],
      },
      whatToFix: {
        heading: "What to Fix First",
        intro:
          "You don't need a $10,000 website redesign. You need to fix the 3-4 things that are actually killing your leads.",
        steps: [
          {
            title: "Fix HTTPS redirect and speed",
            description:
              "Ensure HTTP redirects to HTTPS (free with most hosts) and compress your images. This alone can cut bounce rate by 30%.",
            effort: "1-2 days",
            impact: "Critical — stops Chrome warnings, cuts bounce rate",
          },
          {
            title: "Add a clickable phone number and contact form",
            description:
              "Every page needs a tap-to-call button on mobile and a simple contact form. Name, phone, \"What's the issue?\" — that's all you need.",
            effort: "1 day",
            impact: "High — captures leads who are ready to book",
          },
          {
            title: "Put a clear CTA above the fold",
            description:
              "\"Need an Electrician? Call Now\" with your phone number. Visible without scrolling. On every page.",
            effort: "2 hours",
            impact: "High — tells visitors exactly what to do",
          },
          {
            title: "Display your license number and reviews",
            description:
              "Show your license number on every page and embed your Google reviews. For electrical work — where trust is everything — these two signals convert browsers into callers.",
            effort: "1 day",
            impact: "Medium — builds instant trust",
          },
        ],
      },
    },
  },
  {
    slug: "electrician-website-not-converting",
    diagnosticType: "pretty-and-broken",
    title: "Electrician Website Not Converting? Hidden Issues Killing Your Leads | Electrician Audit",
    metaDescription:
      "Your electrician website looks great but isn't converting? We find the hidden gaps — no booking widget, slow speed, missing trust signals — that are quietly losing you leads.",
    h1: "Your electrician website looks great.\nIt's quietly losing you leads.",
    subtitle:
      "You spent money on a professional website. You're running ads. The traffic is there. But the leads aren't coming in like they should. The site looks fine — so what's wrong?",
    heroStat: "64%",
    heroStatLabel: "have no after-hours lead capture",
    sections: {
      whatWeFind: {
        heading: "The Hidden Gaps We Find in \"Good\" Electrician Websites",
        intro:
          "When a website scores above average but conversions are low, the problems are invisible to the naked eye. Here's what our audits reveal.",
        findings: [
          {
            stat: "64%",
            label: "no after-hours lead capture",
            detail:
              "Your site looks great at 2 PM. But at 11 PM when a homeowner's power goes out, there's no booking widget, no after-hours form, no way to capture that lead. They find your competitor who has online scheduling.",
          },
          {
            stat: "70%",
            label: "no service area pages",
            detail:
              "You serve 15 cities but only have one homepage. When someone searches \"electrician in [suburb],\" Google can't match you to that search. Your competitors with dedicated city pages are getting those calls.",
          },
          {
            stat: "0",
            label: "reviews displayed on site",
            detail:
              "You have 100+ five-star Google reviews. But your website shows zero of them. Visitors who land from an ad have no social proof. They see a clean site with no reason to trust you over the next result.",
          },
          {
            stat: "No",
            label: "call tracking installed",
            detail:
              "You're spending on Google Ads but have no call tracking. You don't know which ads generate calls, which keywords convert, or where your budget is being wasted.",
          },
        ],
      },
      whyItHappens: {
        heading: "Why Good-Looking Websites Still Fail",
        reasons: [
          {
            title: "Design ≠ conversion optimization",
            description:
              "Web designers build beautiful sites. But beauty doesn't capture leads. Conversion requires specific elements — sticky CTAs, booking widgets, trust signals, speed optimization — that most designers don't specialize in.",
          },
          {
            title: "Nobody tested the mobile experience",
            description:
              "The site was approved on a 27-inch monitor in a design review. Nobody tested it on an iPhone with a 4G connection at 11 PM when the power went out.",
          },
          {
            title: "The site was built for the owner, not the customer",
            description:
              "The homepage talks about the company's history, certifications, and values. But the customer searching \"emergency electrician\" needs a phone number, a price range, and a booking button — not a brand story.",
          },
        ],
      },
      whatToFix: {
        heading: "How to Turn Traffic Into Leads",
        intro:
          "Your foundation is solid. These fixes plug the leaks without rebuilding anything.",
        steps: [
          {
            title: "Add online scheduling",
            description:
              "ServiceTitan, Housecall Pro, or even Calendly. Let visitors book without calling. This single change captures every after-hours lead you're currently losing.",
            effort: "1-2 days",
            impact: "Critical — captures 11 PM emergency leads",
          },
          {
            title: "Add a review widget",
            description:
              "Embed your Google reviews on the homepage and service pages. Let your 5-star reputation do the selling.",
            effort: "1 day",
            impact: "High — builds trust from ad traffic",
          },
          {
            title: "Install call tracking",
            description:
              "CallRail or similar. Know which ads, keywords, and pages generate phone calls. Stop guessing where your ad budget should go.",
            effort: "2 hours",
            impact: "High — stops ad waste",
          },
          {
            title: "Build service area pages",
            description:
              "One page per city you serve: \"Electrician in [City].\" Each page targets a local search term. This is the highest-ROI SEO investment for electrical companies.",
            effort: "1-2 weeks",
            impact: "High — opens dozens of local search terms",
          },
        ],
      },
    },
  },
  {
    slug: "electrician-ads-not-working",
    diagnosticType: "half-built",
    title: "Electrician Ads Not Working? Your Website Is the Problem | Electrician Audit",
    metaDescription:
      "Running Google Ads for your electrical business but not getting leads? Your website is killing your ad spend. Free audit shows exactly what's broken.",
    h1: "Your electrician ads aren't broken.\nYour website is.",
    subtitle:
      "You're spending $2,000-$5,000/month on Google Ads or Facebook. The clicks are there. But the calls aren't. Every click that bounces is money wasted — and your website is the reason.",
    heroStat: "$3K+",
    heroStatLabel: "wasted per month on avg",
    sections: {
      whatWeFind: {
        heading: "What Happens When Ad Traffic Hits a Broken Electrician Website",
        intro:
          "We've audited electrical businesses spending thousands on ads. When their site scores below 50/100, here's what the data shows.",
        findings: [
          {
            stat: "60%",
            label: "show \"Not Secure\" warning",
            detail:
              "Google Ads sends visitors to your site. Chrome immediately shows \"Not Secure\" because HTTP doesn't redirect to HTTPS. The visitor — who was ready to book — hits the back button and clicks your competitor's ad instead. You still pay for the click.",
          },
          {
            stat: "84%",
            label: "no way to book online",
            detail:
              "Your ads run 24/7. But your site has no booking widget, no after-hours form. Every click after 6 PM is wasted because there's no way to convert. That's 50%+ of your ad spend with zero capture mechanism.",
          },
          {
            stat: "No",
            label: "landing page optimization",
            detail:
              "Your ads point to your homepage — a generic page that talks about everything. High-converting electrician ads point to dedicated landing pages: \"Emergency Electrician in [City]\" with a single CTA.",
          },
          {
            stat: "56%",
            label: "no license number visible",
            detail:
              "A customer clicks your ad for a panel upgrade — a $3,000-$5,000 job. They land on your site and see no license number, no insurance info, no trust signals. They're not going to call an unlicensed-looking electrician for that kind of money.",
          },
        ],
      },
      whyItHappens: {
        heading: "Why Your Ad Agency Can't Fix This",
        reasons: [
          {
            title: "They optimize ads, not websites",
            description:
              "Your ad agency optimizes bids, keywords, and ad copy. They don't fix your website's HTTPS redirect, speed, or conversion elements. They send great traffic to a broken destination.",
          },
          {
            title: "Quality Score tanks your cost per click",
            description:
              "Google's Quality Score depends on landing page experience. A slow, insecure site with poor mobile experience means you pay MORE per click than competitors with better websites. You're in a bidding war with a handicap.",
          },
          {
            title: "Nobody measures past the click",
            description:
              "Your ad dashboard shows clicks and impressions. But nobody tracks what happens AFTER the click — how many visitors actually call, fill out a form, or book. Without that data, you can't fix the leak.",
          },
        ],
      },
      whatToFix: {
        heading: "Fix Your Website Before Spending Another Dollar on Ads",
        intro:
          "Pause isn't the answer. But fixing these issues before your next ad dollar will 2-3x your return.",
        steps: [
          {
            title: "Fix HTTPS and page speed immediately",
            description:
              "Every second your site takes to load costs you 7% in conversions. HTTPS redirect costs nothing. Image compression takes an afternoon. These two fixes alone can cut your cost-per-lead in half.",
            effort: "1-2 days",
            impact: "Critical — stops bleeding ad spend",
          },
          {
            title: "Add dedicated landing pages",
            description:
              "Create one page per service: \"Emergency Electrician in [City].\" Big phone number, 3 trust badges, 2 review quotes, one booking button. Point your ads here instead of the homepage.",
            effort: "3-5 days",
            impact: "Critical — can 2-3x conversion rate",
          },
          {
            title: "Install call tracking and form tracking",
            description:
              "CallRail for calls, form tracking in GA4. Now you know exactly which ads generate leads and which are burning money.",
            effort: "2 hours",
            impact: "High — reveals where to cut and where to scale",
          },
          {
            title: "Add after-hours capture",
            description:
              "Your ads run at night. Add a booking widget or after-hours form so those 11 PM emergency searches convert instead of bouncing.",
            effort: "1 day",
            impact: "High — captures 50% of ad traffic that currently bounces",
          },
        ],
      },
    },
  },
  {
    slug: "electrician-website-no-leads",
    diagnosticType: "invisible",
    title: "Good Electrician Website But No Leads? You're Invisible | Electrician Audit",
    metaDescription:
      "Your electrician website is solid but you're not getting leads? The problem isn't your site — it's that nobody can find it. Free audit with visibility analysis.",
    h1: "Your electrician website is solid.\nThe problem is nobody sees it.",
    subtitle:
      "Your website scores above the 41-point industry average. It loads fast, has good content, looks professional. But the phone isn't ringing because your online presence has zero visibility.",
    heroStat: "0",
    heroStatLabel: "organic search visibility",
    sections: {
      whatWeFind: {
        heading: "What We Find When a Good Electrician Site Gets No Traffic",
        intro:
          "When the website itself is solid but leads are flat, the issue is always the same: nobody can find it.",
        findings: [
          {
            stat: "70%",
            label: "have no service area pages",
            detail:
              "When someone searches \"electrician in [your city],\" Google looks for a page about electrical services in that city. If you don't have one, you're invisible for that search. Your competitors with 20+ city pages are getting those calls.",
          },
          {
            stat: "No",
            label: "Google Business Profile optimization",
            detail:
              "Your GBP listing has your name and phone number. But no photos, no service descriptions, no regular posts, and the website link might not even match. Google rewards active, complete profiles.",
          },
          {
            stat: "60%",
            label: "have no blog or content hub",
            detail:
              "No blog means you're invisible for hundreds of electrical questions homeowners ask Google every month. \"How much does a panel upgrade cost?\" \"Why do my breakers keep tripping?\" Every answer is a free lead you're missing.",
          },
          {
            stat: "95%",
            label: "have no LocalBusiness schema",
            detail:
              "Your website doesn't tell Google what type of business you are, what areas you serve, or what services you offer. Without schema markup, you're relying on Google to guess — and it guesses wrong.",
          },
        ],
      },
      whyItHappens: {
        heading: "Why a Good Website Isn't Enough Anymore",
        reasons: [
          {
            title: "Build it and they'll come hasn't worked since 2015",
            description:
              "There are thousands of electrical companies competing online. Just having a website puts you in a pool of competitors. Without SEO, ads, or local marketing, you're a needle in a haystack with a nice paint job.",
          },
          {
            title: "Your competitors are investing in visibility",
            description:
              "The companies getting calls aren't necessarily better than you. They're spending $2,000-$5,000/month on Google Ads, posting weekly on GBP, and have 25+ service area pages. They're visible. You're not.",
          },
          {
            title: "Word of mouth doesn't scale online",
            description:
              "You get referrals because your work is excellent. But the 80% of homeowners who search Google first never find you. You're winning repeat business while losing all new business to competitors with worse service but better online presence.",
          },
        ],
      },
      whatToFix: {
        heading: "How to Get Your Good Website in Front of Customers",
        intro:
          "Your website is the foundation. Now you need to drive traffic to it.",
        steps: [
          {
            title: "Build 15-25 service area pages",
            description:
              "One page per city you serve: \"Electrician in [City, State].\" Each page targets a local search term. This is the highest-ROI SEO investment for electrical companies.",
            effort: "1-2 weeks",
            impact: "Critical — opens up dozens of local search terms",
          },
          {
            title: "Optimize your Google Business Profile",
            description:
              "Add photos weekly, write service descriptions, post updates. Respond to every review. An active GBP with a linked website ranks higher in the map pack.",
            effort: "Ongoing (30 min/week)",
            impact: "High — map pack drives 42% of local clicks",
          },
          {
            title: "Add LocalBusiness schema markup",
            description:
              "Tell Google exactly what you are, where you serve, and what you offer. JSON-LD markup takes 30 minutes to add and helps Google match you to local searches.",
            effort: "1 hour",
            impact: "Medium — helps Google understand your business",
          },
          {
            title: "Start with Google Local Services Ads",
            description:
              "LSAs show at the very top of search results with a \"Google Guaranteed\" badge. You only pay per lead, not per click. For electricians, this is the fastest path to phone calls.",
            effort: "1-2 days to set up",
            impact: "High — pay-per-lead, top placement, trust badge",
          },
        ],
      },
    },
  },
];
