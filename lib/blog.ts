export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  canonical: string;
  body: string;
}

export const posts: BlogPost[] = [
  {
    slug: "how-much-does-a-travel-planner-cost",
    title: "How Much Does a Travel Planner Cost? (2026 Guide)",
    description:
      "What a travel planner costs in 2026, the common pricing models, and how to know whether hiring one is worth it for your trip.",
    date: "2026-06-11",
    category: "Travel planning guide",
    canonical: "https://voyelle.com/blog/how-much-does-a-travel-planner-cost/",
    body: `<p class="blog-lead">Short answer: most independent travel planners charge somewhere between a flat <strong>$100–$300 planning fee</strong> for light help and <strong>$1,000–$2,500+</strong> for a fully managed trip, with per-day rates (often <strong>$50–$100/day</strong>) common for custom itineraries. What you pay depends on the model, the trip's complexity, and how much of the work you want handled.</p>

<h2>The four pricing models you'll see</h2>
<p>Almost every planner uses one of these — or a blend:</p>
<ul>
<li><strong>Flat fee per trip.</strong> One price for the whole engagement. Simplest to understand; common for concierge-style, done-for-you service.</li>
<li><strong>Per-day rate.</strong> Priced by the length of the trip (e.g. $75/day). Scales naturally with how much itinerary there is to design.</li>
<li><strong>Percentage of trip cost.</strong> Typically 10–15% of the total trip budget. More common with luxury and high-touch travel.</li>
<li><strong>Hybrid / commission.</strong> A planning fee plus commissions earned from hotels and operators. Sometimes the planning fee is waived if you book everything through them.</li>
</ul>

<h2>What the fee does — and doesn't — cover</h2>
<p>This trips people up: <strong>the planning fee pays for the planner's time and expertise, not the trip itself.</strong> Flights, hotels, tours, meals, and taxes are separate and paid to the suppliers. So a $75/day itinerary fee for a 6-night trip (~$450) is the cost of the <em>plan</em>, on top of your actual travel spend.</p>

<h2>A quick benchmark</h2>
<table>
<thead><tr><th>Level of help</th><th>Typical cost</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Consult + recommendations</td><td>~$100–$300 flat</td><td>Confident DIY travelers who want direction</td></tr>
<tr><td>Full custom itinerary (you book)</td><td>~$50–$100 / day</td><td>People who want a complete plan but will book it</td></tr>
<tr><td>Fully managed (planner books it)</td><td>~$1,000–$2,500+ / trip</td><td>Busy travelers who want everything handled</td></tr>
</tbody>
</table>
<p>For reference, our own pricing follows this exactly: <a href="/#packages">Trip Spark is $150 flat, the Signature Itinerary is $75/day, and Voyelle Concierge is $1,500/trip</a>.</p>

<h2>Is a travel planner worth it?</h2>
<p>It usually comes down to two things: <strong>the value of your time</strong> and <strong>the stakes of the trip.</strong> A well-planned trip can take 15–40 hours to research properly — comparing neighborhoods, vetting hotels, sequencing days, catching the timed-entry tickets that sell out. If your time is worth more than the fee, or the trip is a once-in-a-lifetime occasion you can't afford to get wrong, a planner pays for itself.</p>
<p>It's <em>less</em> worth it for a simple, flexible trip you enjoy planning yourself, or a quick weekend where there's little to optimize.</p>

<h2>How to get the most for your money</h2>
<ul>
<li>Be specific up front about budget, dates, and deal-breakers — it cuts revisions.</li>
<li>Ask exactly what's included (revisions, bookings, on-trip support) before you commit.</li>
<li>Match the package to the trip: don't pay for full concierge on a trip you'd happily book yourself.</li>
</ul>`,
  },
  {
    slug: "travel-advisor-vs-travel-agent",
    title: "Travel Advisor vs. Travel Agent vs. Doing It Yourself",
    description:
      "The real difference between a travel advisor, a travel agent, and booking it yourself — and how to choose the right one for your trip.",
    date: "2026-06-11",
    category: "Travel planning guide",
    canonical: "https://voyelle.com/blog/travel-advisor-vs-travel-agent/",
    body: `<p class="blog-lead">The terms get used interchangeably, but they describe different things. Here's the honest breakdown so you can pick what actually fits your trip.</p>

<h2>The quick definitions</h2>
<ul>
<li><strong>Doing it yourself.</strong> You research and book everything through search engines and booking sites. Maximum control, zero fees — but all the time and risk are on you.</li>
<li><strong>Travel agent (traditional).</strong> Historically focused on <em>booking</em> — finding and reserving flights, hotels, and packages, often earning commission from suppliers. Great for transactions; lighter on bespoke, day-by-day design.</li>
<li><strong>Travel advisor / planner.</strong> Focused on <em>designing the trip</em> — researching destinations, building a personalized day-by-day itinerary, pacing it, and (optionally) handling the bookings. You're paying for expertise and a finished plan, not just a reservation.</li>
</ul>

<h2>Side by side</h2>
<table>
<thead><tr><th></th><th>Do it yourself</th><th>Travel agent</th><th>Travel advisor</th></tr></thead>
<tbody>
<tr><td>Custom day-by-day plan</td><td>You build it</td><td>Sometimes</td><td>Yes</td></tr>
<tr><td>Books for you</td><td>No</td><td>Yes</td><td>Optional</td></tr>
<tr><td>Personalized to your style</td><td>Depends on you</td><td>Varies</td><td>Core of the service</td></tr>
<tr><td>Time you spend</td><td>High</td><td>Low–medium</td><td>Low</td></tr>
<tr><td>Cost</td><td>Free (your time)</td><td>Often commission</td><td>Planning fee</td></tr>
</tbody>
</table>

<h2>Which should you choose?</h2>
<p><strong>Do it yourself</strong> if you genuinely enjoy planning, the trip is simple, and your schedule has room for the research.</p>
<p><strong>A travel agent</strong> if you mostly need someone to find and book flights, a hotel, or a packaged trip, and you're not after a heavily customized day-by-day plan.</p>
<p><strong>A travel advisor</strong> if you want a trip <em>designed around you</em> — researched, paced, and organized — without losing your evenings to it. That's exactly what we do: you share your vision, and we deliver a complete, organized itinerary you can travel with (and we'll book it too, if you choose). See <a href="/#how">how it works</a>.</p>`,
  },
  {
    slug: "how-to-plan-a-trip-itinerary",
    title: "How to Plan a Trip Itinerary: A Step-by-Step Guide",
    description:
      "A practical, step-by-step way to plan a trip itinerary that's realistic and well-paced — the same process professional planners use.",
    date: "2026-06-11",
    category: "Travel planning guide",
    canonical: "https://voyelle.com/blog/how-to-plan-a-trip-itinerary/",
    body: `<p class="blog-lead">A great itinerary isn't a packed checklist — it's a well-paced plan that leaves room to actually enjoy the place. Here's the step-by-step process we use, so you can build one yourself (or hand it off).</p>

<h2>1. Start with the frame, not the activities</h2>
<p>Before any sightseeing, lock the basics: travel dates and number of nights, who's going, your total budget, and your non-negotiables (accessibility, dietary needs, deal-breakers). These shape every later decision.</p>

<h2>2. Research the destination — especially for your actual dates</h2>
<p>Look up the best areas to stay, how to get around, and the <strong>weather and seasonality for the specific dates</strong> you're traveling. A city in shoulder season behaves very differently from peak summer. Note anything that sells out or needs timed entry.</p>

<h2>3. Choose where you'll stay (and base yourself well)</h2>
<p>Pick lodging by neighborhood first, price second. A well-located base cuts transit time more than almost anything else and makes the whole trip feel easier.</p>

<h2>4. Pick one or two anchors per day</h2>
<p>This is the secret to good pacing. Each day gets <strong>one or two main experiences</strong>, grouped by neighborhood to minimize back-and-forth — not five things crammed end to end. Build in meals, downtime, and realistic travel buffers between stops.</p>

<h2>5. Handle arrival and departure deliberately</h2>
<p>Your first day is really a half day (transfer, check-in, an easy evening), and your last is shaped by checkout and your flight. Plan them as such instead of overbooking them.</p>

<h2>6. Sequence the bookings — and flag what sells out</h2>
<p>Reserve the time-sensitive things first: timed-entry attractions, popular restaurants, permits, peak-season hotels and flights. Keep a simple list of what's booked, what's still to book, and what's walk-up.</p>

<h2>7. Reconcile against your budget</h2>
<p>Tally estimated costs as you go — lodging, activities, transport, dining, a buffer — and make sure the total lines up with what you planned to spend. Adjust before you book, not after.</p>

<h2>A sample day, well-paced</h2>
<ul>
<li><strong>Morning:</strong> one anchor activity (a tour, a museum, a hike).</li>
<li><strong>Midday:</strong> lunch nearby, then a slow wander or downtime.</li>
<li><strong>Late afternoon:</strong> a lighter second sight, or rest before dinner.</li>
<li><strong>Evening:</strong> a reserved dinner (book ahead if it's popular).</li>
</ul>
<p>That's the whole method. It's not complicated — it's just time-consuming to do well for every day of a trip. If you'd rather skip the hours of research and get a finished, organized plan, that's exactly what we're here for.</p>`,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
