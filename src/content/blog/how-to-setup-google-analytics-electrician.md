---
title: "How to Set Up Google Analytics for Your Electrician Website in 20 Minutes"
description: "39% of electrician websites have no analytics at all. Step-by-step GA4 setup: create a property, add the tag, verify data, and track form submissions and calls."
date: 2026-03-18
readTime: "10 min read"
cover: "/blog/cover-how-to-setup-google-analytics-electrician.webp"
---

You ran a $2,500 Google Ads campaign last month. Twelve calls came in — or maybe it was eight. You aren't sure because there's no tracking on your website. No data on who visited, which pages they saw, or what made them leave. You spent the money and got a feeling, not a number.

That's the reality for almost 4 in 10 electricians. **When we [audited 1,259 electrician websites](/blog/we-audited-1200-electrician-websites/) across 9 states, 39% had zero analytics installed** (Electrician Audit, 2026). Not misconfigured analytics. Not an old Universal Analytics tag that stopped collecting in July 2023. Nothing. These businesses have no way to measure whether their website works.

This post walks you through setting up Google Analytics 4 (GA4) from scratch. You'll create an account, install the tracking tag, verify it's collecting data, and set up key events — form submissions and phone number clicks. Twenty minutes, no developer needed.

> **TL;DR:** 39% of electrician websites run with zero analytics, meaning every dollar spent on ads or SEO is an unmeasured guess. This guide walks through GA4 setup in 20 minutes — creating a property, installing the tag, verifying data, and tracking the two events that matter most: form submissions and phone clicks (Electrician Audit, 2026).

[INTERNAL-LINK: "audited 1,259 electrician websites" -> /blog/we-audited-1200-electrician-websites/]

---

## 39% of electrician websites have no idea what's happening on their own site

Across 1,259 audited electrician websites, 39% — roughly 490 sites — had no analytics tracking of any kind (Electrician Audit, 2026). That's not a rounding error. Nearly two out of every five electricians are making marketing decisions with zero website data. They can't tell you their monthly traffic, their top-performing page, or whether last week's Facebook post sent anyone to their site.

What does that actually cost? Consider a typical scenario. An electrician in Denver spends $2,000/month on Google Ads. Without analytics, they can't see that 70% of ad traffic lands on the homepage and bounces — never reaching the contact form. They can't see that their [panel upgrade page](/blog/electrician-no-panel-upgrade-page/) gets organic traffic but has no phone number above the fold. They can't see anything.

**Electricians running Google Ads scored 64/100 on average in our audit, compared to 40/100 for those without ads** (Electrician Audit, 2026). But that gap disappears fast when ad spend isn't tracked. You're writing checks to Google without a receipt.

And here's what makes it worse: **24% of electrician websites running ads have no call tracking whatsoever** (Electrician Audit, 2026). They're paying for clicks and hoping the phone rings. Analytics is the first step toward ending that guesswork.

**Citation capsule:** 39% of electrician websites have zero analytics installed, making them unable to measure traffic, identify top pages, or track whether marketing spend produces any measurable return — a gap affecting roughly 490 of 1,259 audited sites across 9 states (Electrician Audit, 2026).

[INTERNAL-LINK: "Google Ads scored 64/100" -> /blog/electrician-google-ads-wasting-money/]

---

## Step 1: Create your GA4 property (5 minutes)

Google Analytics 4 replaced Universal Analytics in July 2023. If your site had the old tracking code, it stopped collecting data over two years ago (Google, 2023). Starting fresh takes five minutes — here's the exact sequence.

### Sign in and create an account

Go to analytics.google.com. Sign in with the Google account you want to own the data — ideally your business Gmail, not your personal one. If you already have a Google Analytics account from a previous setup, you'll see an admin panel. If not, you'll hit a welcome screen that walks you through creation.

Click **Admin** (gear icon, bottom-left). Click **Create** > **Account**. Name it your business name — "Sparks Electric" or whatever matches your brand. Accept the data sharing defaults and click **Next**.

### Set up the property

Name the property after your website: "sparkselectric.com" works fine. Set your time zone and currency. These affect how your reports display dates and revenue — pick your local time zone so the data matches your actual business hours.

Click **Next**. Select your business size and objectives. For electricians, choose "Small business" and check "Generate leads" as your primary objective. These selections customize your default reports — lead generation gives you a conversion-focused dashboard out of the box.

### Create a data stream

After creating the property, GA4 asks you to set up a data stream. Choose **Web**. Enter your full website URL (with `https://`) and a stream name like "Website." Click **Create stream**.

You'll land on a screen showing your **Measurement ID** — it looks like `G-XXXXXXXXXX`. Copy this. You'll need it in the next step.

That's it for the GA4 side. Property created, stream configured, measurement ID in hand.

[ORIGINAL DATA] In our audit of 1,259 electrician websites, we found that many sites still carried dead Universal Analytics tags (the old `UA-` prefix) that stopped collecting data in July 2023. These sites show up as "has analytics" in a surface-level scan but have actually been flying blind for over two years. If your tracking code starts with `UA-`, it's collecting nothing.

---

## Step 2: Install the GA4 tag on your website (5 minutes)

The measurement ID does nothing until it's on your site. You need to add a small snippet of JavaScript to every page. The method depends on your platform — here's how to do it on each.

### For WordPress websites

Install the **Site Kit by Google** plugin. It's Google's official WordPress plugin and connects GA4 without editing code. Go to Plugins > Add New, search "Site Kit by Google," install, and activate it.

Site Kit walks you through an authorization flow — sign into the same Google account where you created your GA4 property. It auto-detects the property and installs the tracking tag. The whole process takes about three minutes.

Alternative: if you already use Rank Math or Yoast, both support adding your GA4 measurement ID directly. In Rank Math, go to General Settings > Analytics and paste the `G-XXXXXXXXXX` code. Same idea, different plugin.

### For Wix websites

Go to your Wix dashboard. Click **Marketing & SEO** > **Marketing Integrations**. Find Google Analytics and click **Connect**. Paste your measurement ID. Save. Done.

Wix also has a native analytics dashboard, but it doesn't replace GA4. Google's data is more detailed, more customizable, and what you'll need if you ever run Google Ads.

### For Squarespace websites

Go to Settings > Advanced > External API Keys. Paste your measurement ID in the Google Analytics field. Squarespace handles the tag injection automatically.

### For custom HTML websites

If your site is hand-coded or built by a developer, paste this snippet inside the `<head>` tag on every page:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace both instances of `G-XXXXXXXXXX` with your actual measurement ID. If your site has a shared header file or template, add it once there and it covers every page.

**48% of electrician websites score below 40/100** (Electrician Audit, 2026). A big chunk of that group has no analytics, no [schema](/blog/how-to-add-schema-electrician-website/), and no way to diagnose why leads aren't coming in. The tag you just installed changes that.

---

## Step 3: Verify data is flowing (2 minutes)

Don't skip this. Installing the tag and assuming it works is how electricians end up with months of empty data.

### Use the Realtime report

Open your website in a browser tab. Then go to your GA4 property and click **Reports** > **Realtime**. You should see at least one active user (you). If the realtime report shows zero users, something went wrong with the tag installation.

Common reasons for no data:

- **Wrong measurement ID.** Double-check the `G-XXXXXXXXXX` code matches what's in your GA4 property settings.
- **Tag not on the page you're visiting.** If you added the code manually, confirm it's in the `<head>` of the exact page you have open.
- **Caching.** Some hosting platforms cache pages aggressively. Clear your site cache, then reload and check realtime again.
- **Ad blockers.** Your browser's ad blocker might block GA4. Try an incognito window with extensions disabled.

### Use the DebugView

GA4 has a built-in debug mode. Install the **Google Analytics Debugger** Chrome extension, enable it, and visit your site. Back in GA4, go to Admin > DebugView. You'll see every event firing in real time — page views, scrolls, clicks. This confirms not just that the tag is present, but that it's working correctly.

Once you see data flowing in Realtime or DebugView, the foundation is set. GA4 will now collect traffic data 24/7 without any further action from you.

---

## Step 4: Set up the two events that actually matter for electricians

GA4 tracks page views automatically. But page views alone don't tell you who became a lead. You need to track two specific actions: **form submissions** and **phone number clicks**. These are the events that represent actual business — someone reaching out for a quote, scheduling a job, or calling your number.

### Track form submissions

**84% of electrician websites with a contact form don't track whether anyone submits it** (Electrician Audit, 2026). They know the form exists. They don't know how often it gets used, which pages drive submissions, or what traffic source produces the most form fills.

The easiest way to track form submissions in GA4 is with the built-in Enhanced Measurement feature — but it doesn't catch every form. Here's a more reliable method.

**Option A: Thank-you page trigger.** If your form redirects to a thank-you page (like `/thank-you/`), set up a GA4 event based on the page view. In GA4, go to Admin > Events > Create Event. Name it `form_submission`. Set the condition to: `page_location` contains `/thank-you`. Every time someone lands on that page, GA4 records it as a form submission.

**Option B: Google Tag Manager.** If your form doesn't redirect (it shows an inline "thanks" message), you'll need Google Tag Manager. Create a trigger that fires on form submission, then create a GA4 event tag that sends a `form_submission` event. This takes about ten extra minutes but catches every submit, regardless of form behavior.

After setting up either method, mark it as a **Key Event** in GA4. Go to Admin > Key Events > mark `form_submission`. This tells GA4 to treat it as a conversion, not just a regular event. Now your reports will show how many leads your website generates — by day, by source, by landing page.

### Track phone number clicks

For electricians, phone calls are often worth more than form submissions. **A single phone lead for a panel upgrade or EV charger install can be worth $1,500-$4,000 in revenue.** You need to know when someone taps your phone number.

If your phone number is a clickable `tel:` link (and it should be — [80% of electrician websites have phone numbers that aren't clickable on mobile](/blog/electrician-phone-not-clickable-20-point-gap/)), GA4's Enhanced Measurement might catch outbound clicks automatically. But `tel:` links are tricky — they don't always register as clicks.

The reliable method: create a custom event. In Google Tag Manager, set up a trigger for clicks on any link where the URL contains `tel:`. Create a GA4 event tag named `phone_click`. Mark it as a Key Event in GA4, same as form submissions.

Now you have both lead actions tracked. Your GA4 dashboard shows form submissions and phone clicks — the two numbers that actually tell you whether your website is generating business.

**Citation capsule:** 84% of electrician websites with a contact form don't track submissions, and the majority of phone numbers aren't tracked as click events — meaning most electricians have no data on how many leads their website actually produces, even when analytics is installed (Electrician Audit, 2026).

[INTERNAL-LINK: "phone numbers that aren't clickable on mobile" -> /blog/electrician-phone-not-clickable-20-point-gap/]

---

## What to look at first once data starts flowing

GA4 collects data immediately, but give it at least 48 hours before drawing conclusions. After that, three reports will tell you more about your website's performance than anything else.

### Traffic acquisition report

Go to Reports > Acquisition > Traffic Acquisition. This shows where your visitors come from: organic search, paid ads, social media, direct traffic, or referrals. **Electricians spending on [Google Ads without analytics](/blog/electrician-google-ads-wasting-money/) can't see which campaigns drive traffic and which burn money** (Electrician Audit, 2026). This report ends that blind spot.

Sort by the "Key Events" column once your form and phone tracking is active. You'll see which traffic sources produce leads, not just visits. Organic search might send 500 visitors but only 3 form fills. Google Ads might send 100 visitors but 12 calls. That distinction changes how you spend your budget.

### Landing page report

Go to Reports > Engagement > Landing Pages. This shows which page visitors see first when they arrive. Your homepage probably dominates — but watch for service pages pulling organic traffic. If your [panel upgrade page](/blog/electrician-no-panel-upgrade-page/) gets 80 visits a month but zero conversions, the page needs work. If your EV charger page gets 5 visits and 3 calls, you know what to promote.

### Key events report

Go to Reports > Engagement > Key Events. This is your conversion dashboard. It shows total form submissions and phone clicks by day, by source, and by page. This single report answers the question every electrician asks: "Is my website actually working?"

[PERSONAL EXPERIENCE] We've reviewed analytics setups on hundreds of electrician and contractor websites. The most common mistake isn't failing to install GA4 — it's installing GA4 but never setting up event tracking. These businesses see traffic numbers and think that's enough. It's not. Traffic without conversion data is a vanity metric. The form submission and phone click events in this guide are what turn analytics from a dashboard you ignore into a tool that drives decisions.

---

## The cost of waiting another month without data

Every day without analytics is a day of lost insight. But let's make the math specific.

Say you spend $2,000/month on Google Ads and your website gets 1,500 monthly visitors. Without analytics, you can't answer basic questions. Which of those 1,500 visitors came from ads? How many filled out your contact form? Did anyone click your phone number from the EV charger page? What's your cost per lead?

**Sites with SSL, a contact form, and a CTA score 55/100 on average — 12 points above those without these basics** (Electrician Audit, 2026). Analytics is the diagnostic layer that tells you which of those basics are working and which need fixing. Without it, you're guessing at every improvement.

Here's a real scenario we see constantly: an electrician runs ads to their homepage, which has no call-to-action above the fold. Traffic bounces at 85%. They think the ads don't work. They cancel the campaign. The actual problem was the landing page — but without analytics, they couldn't see the bounce rate, couldn't see the scroll depth, couldn't diagnose anything. They killed a viable campaign because they had no data.

**The average electrician website scores 41/100** (Electrician Audit, 2026). The path from 41 to 60 isn't about redesigning your site. It's about knowing what to fix first. Analytics gives you that answer. Without it, every improvement is a coin flip.

[UNIQUE INSIGHT] Analytics isn't just a tracking tool — it's a prioritization tool. Electricians with limited time and budget can't fix everything at once. Analytics tells you whether to focus on your [service area pages](/blog/electrician-service-area-pages-18-point-gap/), your contact form placement, or your mobile experience. Without data, you'll fix whatever feels most urgent. With data, you'll fix whatever actually moves the needle.

[INTERNAL-LINK: "check your site score" -> /reports/]

---

## You just gave yourself an advantage over 39% of your competitors

That's the setup. GA4 property, tracking tag installed, data verified, form and phone events configured. Twenty minutes — maybe thirty if you detoured into Google Tag Manager for event tracking.

Here's what changed. Yesterday, your website was a black box. Today, you know how many people visit, where they come from, what pages they view, and whether they pick up the phone or fill out a form. You went from guessing to measuring.

**Only 1.9% of electrician websites score above 80/100** (Electrician Audit, 2026). The ones that do aren't necessarily prettier or more expensive. They're measured, diagnosed, and improved based on real data. Analytics is the foundation every other fix builds on — from [fixing your ads ROI](/blog/electrician-google-ads-wasting-money/) to knowing which [service pages](/blog/electrician-missing-ev-charger-generator-pages/) actually convert.

Check your [site score](/reports/) and find out what else needs fixing. Then fix the thing with the biggest gap first. You've got the data now. Use it.

## Keep reading

- [39% of Electrician Websites Have No Analytics — They're Marketing Blind](/blog/electrician-no-analytics/)
- [Electricians Spending on Google Ads Score 64/100. Everyone Else: 40.](/blog/electrician-google-ads-wasting-money/)
- [The Electrician Website Audit Checklist: 11 Things We Check (And Most Sites Fail)](/blog/electrician-website-audit-checklist/)
