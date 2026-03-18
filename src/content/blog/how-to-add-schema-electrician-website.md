---
title: "How to Add LocalBusiness Schema to Your Electrician Website (Copy-Paste Code)"
description: "95% of electrician websites have zero schema markup. Here's the exact JSON-LD code to copy, customize in 10 minutes, and paste — no developer needed."
date: 2026-03-18
readTime: "9 min read"
cover: "/blog/cover-how-to-add-schema-electrician-website.webp"
---

A homeowner in Mesa searches "licensed electrician near me" on her phone. Google returns five results. Three have star ratings, hours, and phone numbers displayed right in the listing. Two show a plain blue link with a vague snippet. She calls the first one with hours showing — doesn't even scroll past it.

The difference between those listings? A block of code called schema markup. It tells Google exactly what your business is, where you operate, and when you're open. Without it, Google guesses. **When we [audited 1,200+ electrician websites](/blog/we-audited-1200-electrician-websites/) across 9 states, 95% had zero schema markup** (Electrician Audit, 2026). Not partial markup. Not outdated markup. Nothing.

This post gives you the actual code. Copy it. Replace the placeholder values with your business information. Paste it into your website. That's the whole process.

> **TL;DR:** 95% of electrician websites have no schema markup, so Google guesses their trade, location, and hours. This post includes ready-to-paste JSON-LD code for LocalBusiness schema. Copy it, fill in your details, validate it, and you're in the top 5% — a fix that takes under 30 minutes and costs nothing (Electrician Audit, 2026).

[INTERNAL-LINK: "audited 1,200+ electrician websites" -> /blog/we-audited-1200-electrician-websites/]

---

## Schema markup is the fastest fix in the entire dataset

Out of every feature gap we found across 1,259 electrician websites, schema had the widest miss rate at 95% — yet it's the only fix that costs zero dollars and takes under an hour (Electrician Audit, 2026). Every other common gap — [service area pages](/blog/electrician-service-area-pages-18-point-gap/), booking systems, after-hours capture — requires content creation or third-party tools. Schema requires one block of code, added once.

Why does it matter? Schema is how search engines categorize your business. It's a snippet of JSON-LD (a structured data format) that sits invisibly in your website's HTML. Visitors never see it. Google reads it on every crawl. The code tells Google: this is an electrician, not a supplier or a training school. The business serves these specific cities. The phone number is this. The hours are that.

Without schema, Google has to read your page content, interpret it, and guess at every one of those facts. And Google's guesses aren't always right — especially when [95% of electrician sites also have weak or missing meta descriptions](/blog/electrician-no-schema-markup/) that leave even less to work with.

**Citation capsule:** Schema markup is the widest gap and the easiest fix across 1,259 audited electrician websites — 95% have none, yet adding it costs nothing and takes under 30 minutes, making it the highest effort-to-impact improvement available to any electrician website (Electrician Audit, 2026).

---

## Step 1: Copy the full LocalBusiness JSON-LD template

Here's the complete schema code for an electrician business. Every field below serves a specific purpose — don't skip any of them. Copy the entire block, then move to Step 2 to customize it.

```json
{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "YOUR BUSINESS NAME",
  "image": "https://yourdomain.com/logo.png",
  "url": "https://yourdomain.com",
  "telephone": "+1-555-123-4567",
  "email": "info@yourdomain.com",
  "description": "Licensed residential and commercial electrician serving the Greater Houston area. Panel upgrades, EV charger installation, rewiring, and 24/7 emergency service.",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "postalCode": "77001",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.7604,
    "longitude": -95.3698
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Houston"
    },
    {
      "@type": "City",
      "name": "Katy"
    },
    {
      "@type": "City",
      "name": "Sugar Land"
    },
    {
      "@type": "City",
      "name": "Pearland"
    },
    {
      "@type": "City",
      "name": "The Woodlands"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Electrical Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Panel Upgrades"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "EV Charger Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Generator Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Whole-Home Rewiring"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Electrical Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Surge Protection"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/yourpage",
    "https://www.google.com/maps/place/your+listing"
  ]
}
```

That's the entire template. Looks long, but most of it is repetitive — lists of cities, lists of services, lists of days. The structure itself is simple.

### Why `@type: Electrician` matters more than `LocalBusiness`

Schema.org has a specific type called `Electrician` that sits under `LocalBusiness > HomeAndConstructionBusiness`. Using it instead of the generic `LocalBusiness` tells Google your exact trade. **Sites scoring above 60/100 in our dataset are 4x more likely to have schema than sites below 40** (Electrician Audit, 2026). The ones that do have it almost always use the wrong type — `LocalBusiness` or even `Organization` — leaving specificity on the table.

Google doesn't just want to know you're a business. It wants to know you're an electrician. The `@type` field is the single most important line in the entire block. Get it right.

---

## Step 2: Replace every placeholder with your actual details

Open the code you copied. Work through it field by field. Here's what to change and where to find the information.

### Business identity fields

Replace these five fields first — they're the foundation:

- **`name`**: Your exact legal business name, matching your Google Business Profile
- **`image`**: Full URL to your logo file (not a relative path — use `https://yourdomain.com/logo.png`)
- **`url`**: Your homepage URL with `https://`
- **`telephone`**: Format as `+1-XXX-XXX-XXXX` (international format with country code)
- **`email`**: Your primary business email

Consistency matters here. Google cross-references your schema data against your Google Business Profile. **Name, address, and phone must match exactly** — the same abbreviations, the same formatting. "St" vs "Street" can cause a mismatch.

### Address and coordinates

Your `address` block needs your physical business address. If you're a service-area business without a storefront, use your registered business address — the same one on your Google Business Profile.

For `geo` coordinates, Google your address and grab the latitude and longitude. Google Maps shows them in the URL when you click on a location. Or search "lat long finder" and enter your address. These coordinates help Google place your business on the map accurately.

### Service area cities

The `areaServed` array is where you list every city you serve. Don't hold back. **70% of electrician websites have no service area pages** (Electrician Audit, 2026), and most also fail to declare service cities in schema. Add every city, suburb, and community where you take jobs.

Copy this block for each additional city:

```json
{
  "@type": "City",
  "name": "YOUR CITY NAME"
}
```

If you serve 15 cities, list all 15. Schema has no practical limit here. More cities means more geographic signals for Google to match against local searches.

### Hours of operation

Set your `openingHoursSpecification` to match your actual business hours. If you offer 24/7 emergency service, add a separate entry:

```json
{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": [
    "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday", "Sunday"
  ],
  "opens": "00:00",
  "closes": "23:59"
}
```

Hours feed directly into knowledge panels and voice search. When someone asks Google "is there an electrician open right now," your hours determine whether you appear. **64% of electrician websites have no after-hours capture mechanism** (Electrician Audit, 2026). Schema hours won't fix that entirely, but they'll at least tell Google you're available.

[INTERNAL-LINK: "after-hours capture" -> /blog/electrician-website-goes-dark-after-6pm/]

### Services offered

Update the `hasOfferCatalog` section with your actual services. Common services for electricians include:

- Panel upgrades (100A to 200A)
- EV charger installation (Level 2)
- Generator installation and transfer switches
- Whole-home rewiring
- Lighting installation and recessed lighting
- Surge protection (whole-home)
- Emergency electrical service
- Outlet and switch installation
- Ceiling fan installation
- Smoke detector and CO detector wiring
- Landscape and outdoor lighting

Add or remove services to match what you actually offer. **62% of electrician sites lack an EV charger page and 94% have no surge protection page** (Electrician Audit, 2026). Even if your website doesn't have dedicated pages for these services yet, listing them in schema tells Google you offer them.

### Social profiles

The `sameAs` array links your website to your social profiles and directory listings. Include your Facebook page, Google Maps listing, Yelp profile, Instagram, or any other verified profile. These help Google confirm your identity across the web.

**Citation capsule:** Replacing schema placeholder values takes 10-15 minutes for a typical electrician business. The three most-missed customizations are the `@type` field (should be `Electrician`, not generic `LocalBusiness`), the `areaServed` cities (70% of sites fail to declare these anywhere), and the `hasOfferCatalog` services (Electrician Audit, 2026).

[ORIGINAL DATA] Across 1,259 audited sites, the rare few with schema almost always had plugin-generated markup using `LocalBusiness` instead of the more specific `Electrician` type — and most left the service area and hours fields empty. Half-completed schema is better than nothing, but it leaves the most valuable fields blank.

---

## Step 3: Paste the code into your website

You've copied the template and replaced the placeholders. Now it goes into your site. The code belongs inside a `<script>` tag in the `<head>` section of your homepage.

### For HTML websites

Open your homepage file (usually `index.html`). Find the `<head>` tag. Paste this right before the closing `</head>`:

```html
<script type="application/ld+json">
{
  ... your customized schema code here ...
}
</script>
```

That's it. Save the file. Upload it to your server or push the change through your hosting platform.

### For WordPress websites

You have two options. The first is faster. The second gives you more control.

**Option A: Use a plugin.** Install Rank Math or Yoast SEO. Both generate LocalBusiness schema through their settings panels. Go to the Local SEO settings, fill in every field — business name, address, phone, hours, service type. The plugin handles the code. Ten minutes.

**Option B: Manual insertion.** Install the "Insert Headers and Footers" plugin (or use your theme's header code injection field). Paste the full `<script type="application/ld+json">` block into the header section. This gives you exact control over every field.

We've found that Option B produces cleaner, more complete markup. Plugin-generated schema often leaves fields like `areaServed` and `hasOfferCatalog` empty because the plugin interface doesn't prompt for them. If you go the plugin route, check the output with the validation tool in Step 4.

### For Wix, Squarespace, and other builders

Most website builders have a "custom code" or "header code injection" section in their settings. Wix calls it "Custom Code" under Settings > Advanced. Squarespace puts it under Settings > Advanced > Code Injection. Paste the full `<script>` block there.

If your builder doesn't allow header code injection, that's a problem bigger than schema — it limits your ability to add analytics, tracking, and any structured data. It may be time for a platform conversation.

[PERSONAL EXPERIENCE] We've reviewed electrician sites across every major platform — WordPress, Wix, Squarespace, GoDaddy, custom builds. WordPress sites with Rank Math or Yoast have the highest schema adoption rate, but the output is usually incomplete. The most thorough implementations we've seen are manual JSON-LD blocks where someone deliberately filled in every field. Plugins get you 60% of the way. Manual gets you 100%.

---

## Step 4: Validate with Google's Rich Results Test

Adding schema without validating it is like wiring a panel without testing the circuits. You need to confirm it works.

Go to Google's Rich Results Test (search "Google Rich Results Test" — it's the first result). Paste your homepage URL. Click "Test URL." Google will crawl your page, find your schema, and report any errors or warnings.

**Green check = valid.** Your schema is properly formatted and Google can read it.

**Yellow warning = partially valid.** Usually means recommended fields are missing. Not critical, but worth fixing. Common warnings include missing `priceRange`, `image`, or `aggregateRating`.

**Red error = broken.** Something in the JSON structure is wrong — a missing comma, an extra bracket, a field in the wrong format. The tool tells you exactly which line has the problem.

### Common validation errors and fixes

Most schema errors come from three sources:

1. **Missing commas** between fields. JSON requires a comma after every value except the last one in a block. Miss one and the whole thing breaks.
2. **Curly braces or square brackets** that don't match. Every `{` needs a `}`. Every `[` needs a `]`. One extra or one missing and it's invalid.
3. **Wrong URL format** in the `image` or `url` fields. Use full URLs starting with `https://`, not relative paths like `/logo.png`.

If validation fails and you can't spot the error, paste your JSON-LD code into a JSON validator (search "JSON validator online"). It highlights syntax errors line by line.

**Sites with proper schema averaged 11 points higher in our audit than sites without any structured data** (Electrician Audit, 2026). That gap starts the moment your validated schema goes live and Google's next crawl picks it up.

**Citation capsule:** Validated LocalBusiness schema contributes to an 11-point average score advantage across 1,259 electrician websites. Google's Rich Results Test confirms whether schema is properly formatted — green means valid, yellow means incomplete, red means broken JSON that search engines will ignore entirely (Electrician Audit, 2026).

---

## What schema gets you that plain HTML can't

Schema doesn't change how your website looks. It changes how your website appears in search results — and how machines understand your business across every platform.

<figure>
<svg viewBox="0 0 560 400" style="max-width: 100%; height: auto; font-family: 'Geist', system-ui, sans-serif" role="img" aria-label="Comparison chart showing what electrician websites get with schema versus without schema across five categories: rich results, knowledge panels, voice search, AI answers, and score impact">
  <title>What Schema Gets You: With vs Without</title>
  <desc>Comparison showing five search visibility categories. With schema: eligible for rich results with stars and hours, knowledge panel data, voice search answers, AI Overview citations, and an 11-point average score boost. Without schema: plain blue link listing, no knowledge panel from website data, invisible to voice queries, excluded from AI answers, and no structured data score contribution.</desc>
  <text x="280" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">Search Visibility: Schema vs No Schema</text>
  <text x="280" y="48" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.5">How structured data changes what Google can do with your site</text>
  <!-- Column headers -->
  <rect x="200" y="65" width="150" height="28" rx="3" fill="#22c55e" opacity="0.15"/>
  <text x="275" y="84" text-anchor="middle" font-size="12" font-weight="bold" fill="#22c55e">With Schema</text>
  <rect x="370" y="65" width="150" height="28" rx="3" fill="#ef4444" opacity="0.15"/>
  <text x="445" y="84" text-anchor="middle" font-size="12" font-weight="bold" fill="#ef4444">Without Schema</text>
  <!-- Row 1: Rich Results -->
  <line x1="40" y1="110" x2="530" y2="110" stroke="currentColor" opacity="0.06"/>
  <text x="110" y="130" text-anchor="middle" font-size="11" fill="currentColor" font-weight="bold">Rich Results</text>
  <text x="275" y="128" text-anchor="middle" font-size="10" fill="#22c55e">Stars, hours, phone</text>
  <text x="275" y="142" text-anchor="middle" font-size="10" fill="#22c55e">in search listing</text>
  <text x="445" y="128" text-anchor="middle" font-size="10" fill="#ef4444">Plain blue link</text>
  <text x="445" y="142" text-anchor="middle" font-size="10" fill="#ef4444">+ generic snippet</text>
  <!-- Row 2: Knowledge Panel -->
  <line x1="40" y1="160" x2="530" y2="160" stroke="currentColor" opacity="0.06"/>
  <text x="110" y="180" text-anchor="middle" font-size="11" fill="currentColor" font-weight="bold">Knowledge Panel</text>
  <text x="275" y="178" text-anchor="middle" font-size="10" fill="#22c55e">Website confirms</text>
  <text x="275" y="192" text-anchor="middle" font-size="10" fill="#22c55e">GBP data</text>
  <text x="445" y="178" text-anchor="middle" font-size="10" fill="#ef4444">Relies on GBP alone</text>
  <text x="445" y="192" text-anchor="middle" font-size="10" fill="#ef4444">— no second source</text>
  <!-- Row 3: Voice Search -->
  <line x1="40" y1="210" x2="530" y2="210" stroke="currentColor" opacity="0.06"/>
  <text x="110" y="230" text-anchor="middle" font-size="11" fill="currentColor" font-weight="bold">Voice Search</text>
  <text x="275" y="228" text-anchor="middle" font-size="10" fill="#22c55e">Eligible for spoken</text>
  <text x="275" y="242" text-anchor="middle" font-size="10" fill="#22c55e">results and answers</text>
  <text x="445" y="228" text-anchor="middle" font-size="10" fill="#ef4444">Invisible to voice</text>
  <text x="445" y="242" text-anchor="middle" font-size="10" fill="#ef4444">assistants</text>
  <!-- Row 4: AI Search -->
  <line x1="40" y1="260" x2="530" y2="260" stroke="currentColor" opacity="0.06"/>
  <text x="110" y="280" text-anchor="middle" font-size="11" fill="currentColor" font-weight="bold">AI Overviews</text>
  <text x="275" y="278" text-anchor="middle" font-size="10" fill="#22c55e">Citable, structured</text>
  <text x="275" y="292" text-anchor="middle" font-size="10" fill="#22c55e">facts for AI answers</text>
  <text x="445" y="278" text-anchor="middle" font-size="10" fill="#ef4444">No structured data</text>
  <text x="445" y="292" text-anchor="middle" font-size="10" fill="#ef4444">for AI to cite</text>
  <!-- Row 5: Score Impact -->
  <line x1="40" y1="310" x2="530" y2="310" stroke="currentColor" opacity="0.06"/>
  <text x="110" y="330" text-anchor="middle" font-size="11" fill="currentColor" font-weight="bold">Avg Site Score</text>
  <text x="275" y="330" text-anchor="middle" font-size="16" font-weight="bold" fill="#22c55e">+11 pts</text>
  <text x="445" y="330" text-anchor="middle" font-size="16" font-weight="bold" fill="#ef4444">baseline</text>
  <!-- Footer -->
  <line x1="40" y1="355" x2="530" y2="355" stroke="currentColor" opacity="0.06"/>
  <text x="280" y="385" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.35">Source: electricianaudit.co — 1,259 sites audited (2025-2026)</text>
</svg>
</figure>

**Google's AI Overviews now appear in roughly 25-30% of search results** (SE Ranking, 2025). Voice search pulls from structured data first. Knowledge panels draw from schema and Google Business Profile together. Every one of these systems favors structured data over raw HTML — and the trend is accelerating, not slowing.

Here's the thing most electricians don't realize: schema doesn't just help Google. It helps every system that tries to understand your business. Bing, Apple Maps, Siri, Alexa, AI chatbots — they all read schema. Adding it once makes your business legible to the entire ecosystem, not just one search engine.

And what about the competition? **Only 5% of electrician sites have any schema at all.** The bar is on the ground. Adding validated schema today puts you ahead of 95% of electricians in your market — not because you did something extraordinary, but because almost nobody has done the minimum.

[INTERNAL-LINK: "AI Overviews" -> /blog/electrician-no-schema-markup/]

---

## The fields most electricians miss (even with plugins)

If you used a WordPress plugin to generate schema, check your output. Most plugins generate a basic `LocalBusiness` block and call it done. They miss the fields that actually differentiate you.

**Three commonly empty fields:**

1. **`areaServed`** — Plugins rarely prompt for service cities. Your schema says you exist but doesn't say where you work. Google still has to guess your service area.
2. **`hasOfferCatalog`** — Your services aren't listed in the schema. Google knows you're an electrician but not whether you do panel upgrades or EV chargers.
3. **`openingHoursSpecification`** — Hours left blank. Voice search can't answer "is this electrician open now?"

Half-built schema is better than nothing. But complete schema is what gets you into knowledge panels, voice results, and AI answers. Take ten minutes to review your plugin's output using the Rich Results Test, and manually add any fields the plugin left empty.

**48% of electrician websites score below 40/100** (Electrician Audit, 2026). Many of those sites have plugins installed but never configured. A half-configured Yoast installation generates thin, incomplete schema that barely registers. The tools are there — the follow-through isn't.

[UNIQUE INSIGHT] There's a pattern across every niche we audit: the gap between "has the tool" and "configured the tool" is where most businesses fall. Schema plugins are installed on thousands of electrician sites. But installed isn't configured, and configured isn't complete. The 5% who benefit from schema didn't just install something — they filled in every field.

---

## The 30-minute checklist — every step, nothing skipped

Don't overcomplicate this. Here's the exact order of operations, start to finish:

1. **Copy** the JSON-LD template from this post (2 minutes)
2. **Replace** business name, address, phone, email, URL, logo URL (5 minutes)
3. **Add** your latitude and longitude from Google Maps (2 minutes)
4. **List** every city you serve in the `areaServed` array (5 minutes)
5. **Set** your actual business hours in `openingHoursSpecification` (3 minutes)
6. **Add** your services to `hasOfferCatalog` (5 minutes)
7. **Add** social profile URLs to `sameAs` (2 minutes)
8. **Paste** the complete `<script>` block into your website's `<head>` (3 minutes)
9. **Validate** with Google's Rich Results Test (3 minutes)
10. **Fix** any errors the validator flags (0-5 minutes)

Total: 30 minutes. Maybe 45 if it's your first time working with HTML.

After you validate, there's nothing else to do. The schema persists until you change it. Update it when you add new services, change hours, or expand your service area. Otherwise, it's set-and-forget.

**Sites with SSL, a contact form, and a CTA score 55/100 on average — 12 points above those without** (Electrician Audit, 2026). Add schema to that foundation and you've built a site that Google can fully understand, confidently categorize, and prominently display. Stack the basics. Schema is the layer that makes everything else legible to machines.

[INTERNAL-LINK: "a free audit report" -> /reports/]

---

## Your competitors haven't done this yet

This is the bottom line. **95% of electrician websites have no schema.** Not low schema, not broken schema — zero. Every day you wait, the 5% who've already added it pull further ahead in rich results, knowledge panels, voice search, and AI-generated answers.

The code is above. The checklist is above. The validation tool is free. There's no budget required, no developer required, no monthly cost. One afternoon and you're in a different category — the small group of electrician websites that Google doesn't have to guess about.

Do this today. Then move on to the next fix: [build service area pages](/blog/electrician-service-area-pages-18-point-gap/) for the cities you just listed in your schema. Then check your [site score](/reports/) and find out what else is holding you back.

The window where 95% of your competitors have no schema won't last forever. Walk through it while it's open.

## Keep reading

- [95% of Electrician Websites Have No Schema Markup — Google Can't Even Categorize Them](/blog/electrician-no-schema-markup/)
- [How to Build Electrician Service Area Pages That Actually Rank](/blog/how-to-build-electrician-service-area-pages/)
- [Your Electrician Website Shows a "Not Secure" Warning — Here's What It's Costing You](/blog/electrician-website-not-secure-warning/)
