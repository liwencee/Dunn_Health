import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  color: string;
  content: string[];
}> = {
  "why-nigerian-businesses-need-professional-website": {
    title: "7 Reasons Your Nigerian Business Needs a Professional Website in 2026",
    excerpt: "Over 70% of Nigerian consumers research businesses online before buying. A professional website isn't optional — it's your most powerful sales tool in Lagos and beyond.",
    category: "Business",
    date: "Apr 10, 2026",
    readTime: "5 min read",
    color: "bg-blue-600",
    content: [
      "In Nigeria today, more than 70% of consumers research a business online before making a purchase or visiting a physical location. If your business doesn't have a professional website, you're invisible to the majority of your potential customers in Lagos, Ikeja, Abuja, and across the country.",
      "1. Your Competitors Already Have One. In every industry — from real estate and healthcare to fashion and food — your competitors in Lagos are online. A professional website ensures you're not losing customers simply because you can't be found.",
      "2. Credibility and Trust. A well-designed website signals professionalism. Nigerian consumers are increasingly savvy and they judge businesses by their online presence. An outdated or non-existent website makes customers question your legitimacy.",
      "3. Available 24/7. Unlike a physical shop in Ikeja or Victoria Island, your website works around the clock. It answers enquiries, showcases your services, and even processes orders while you sleep.",
      "4. Reach Beyond Lagos. With a website, your business can attract clients from Abuja, Port Harcourt, Kano, and even international customers. Your physical location no longer limits your revenue potential.",
      "5. Google My Business Integration. A website amplifies your Google My Business listing. When someone searches for 'web design company in Lagos' or 'best restaurant in Ikeja', businesses with websites rank significantly higher in search results.",
      "6. E-Commerce Opportunities. Nigeria's e-commerce market is growing rapidly. A website with an integrated shop lets you sell products and services online and accept payment via Paystack, Flutterwave, or bank transfer — reaching customers nationwide.",
      "7. Cost-Effective Marketing. Compared to traditional advertising (radio, TV, billboards), a website is the most cost-effective marketing tool available. With SEO, a single page can attract thousands of potential customers every month at virtually zero ongoing cost.",
      "At Slatech Solutions, we've helped hundreds of Lagos and Nigerian businesses build websites that drive real results. Contact us today for a free consultation and let's grow your business online.",
    ],
  },
  "how-to-rank-on-google-nigeria-seo-guide": {
    title: "How to Rank on Google in Nigeria: SEO Guide for Lagos Businesses",
    excerpt: "Step-by-step SEO strategies tailored for Nigerian businesses. Learn how to appear on the first page of Google for keywords your Lagos customers are actually searching.",
    category: "SEO",
    date: "Apr 5, 2026",
    readTime: "7 min read",
    color: "bg-green-600",
    content: [
      "Ranking on Google in Nigeria requires a different approach from generic SEO advice you find online. Nigerian consumers search differently, local competition varies by city, and Google's local results heavily favour businesses with a strong local presence. Here's how to get your Lagos or Nigerian business to page one.",
      "Step 1: Claim and Optimise Your Google Business Profile. This is the single most impactful thing you can do for local SEO. Go to google.com/business, claim your listing, add your address (e.g. Ikeja, Lagos), phone number, opening hours, and photos. Businesses with complete profiles appear in Google Maps results and the local 3-pack — the three businesses shown at the top of local searches.",
      "Step 2: Target Nigeria-Specific Keywords. Think like your customer. They're not searching for 'web design company' — they're searching for 'web design company in Lagos', 'affordable web designer Ikeja', or 'ecommerce website Nigeria'. Use these geo-specific terms in your page titles, headings, and content.",
      "Step 3: Get Listed in Nigerian Business Directories. Backlinks from Nigerian directories improve your local authority. Submit your business to VConnect, BusinessList Nigeria, Naijabizdirectory, and NGContacts. Ensure your business name, address, and phone number (NAP) are consistent everywhere.",
      "Step 4: Create Nigeria-Focused Content. Write blog posts and pages that address Nigerian business problems. Topics like 'How to set up Paystack on your website', 'Best web hosting in Nigeria', or 'How to do business online in Lagos' attract highly relevant local traffic.",
      "Step 5: Optimise Your Website Speed. Nigerian internet speeds can vary. A website that loads in under 3 seconds on mobile networks is critical for SEO and user experience. Compress images, use a CDN, and choose a hosting provider with servers close to Nigeria.",
      "Step 6: Collect Google Reviews. Ask your happy customers to leave Google reviews. Reviews are a major local SEO ranking factor. A business in Lagos with 50+ positive reviews will almost always outrank a competitor with none.",
      "Step 7: Build Local Backlinks. Partner with Nigerian bloggers, news sites, and businesses for mentions and links. A feature on Pulse.ng, TechCabal, or a popular Lagos lifestyle blog carries significant SEO weight.",
      "Slatech Solutions has helped businesses across Lagos and Nigeria achieve first-page rankings. Our SEO service includes keyword research, on-page optimisation, Google Business Profile management, and monthly reporting. Get in touch for a free SEO audit.",
    ],
  },
  "ecommerce-in-nigeria-how-to-start-selling-online": {
    title: "E-Commerce in Nigeria: How to Start Selling Online from Lagos",
    excerpt: "Nigeria's e-commerce market is booming. Discover how Slatech helps Lagos entrepreneurs launch profitable online stores that accept Paystack, bank transfers, and more.",
    category: "E-Commerce",
    date: "Mar 28, 2026",
    readTime: "6 min read",
    color: "bg-purple-600",
    content: [
      "Nigeria's e-commerce market is one of the fastest-growing in Africa, with millions of Nigerians shopping online every day. Whether you sell clothing, electronics, food, or services, launching an online store in Lagos has never been more accessible or profitable.",
      "Step 1: Choose the Right E-Commerce Platform. For Nigerian businesses, WooCommerce (WordPress) and custom Next.js stores are the most popular choices. They offer full control, seamless integration with Nigerian payment gateways, and the flexibility to grow. At Slatech, we recommend avoiding platforms that charge per-transaction fees or restrict Nigerian sellers.",
      "Step 2: Integrate Nigerian Payment Gateways. This is non-negotiable. Your store must accept how Nigerians pay: Paystack (debit cards, USSD, bank transfer), Flutterwave (multi-currency), and Opay are the top choices. Ensure you also display bank transfer details for customers who prefer direct transfers — this alone can increase conversions by 30%.",
      "Step 3: Handle Delivery and Logistics. Partner with reliable Nigerian logistics companies: GIG Logistics, DHL Nigeria, Kwik, or Sendbox. Display clear delivery timelines (same-day for Lagos, 2–3 days nationwide) and pricing on your product pages. Abandoned carts in Nigeria are often caused by unclear shipping costs.",
      "Step 4: Optimise for Mobile. Over 80% of Nigerian internet users browse on mobile phones. Your online store must load fast on mobile networks, have large tap-friendly buttons, and a simplified checkout process. A complex checkout is the number one conversion killer for Nigerian e-commerce stores.",
      "Step 5: Build Trust Signals. Nigerian online shoppers are cautious about scams. Display your physical address (even if just an office in Ikeja), a Nigerian phone number, customer reviews, return policy, and security badges prominently. WhatsApp integration for customer support dramatically increases trust and sales.",
      "Step 6: Drive Traffic with Social Media. Instagram and WhatsApp are the most powerful sales channels in Nigeria. Post daily product content, use Instagram Shopping, and create a WhatsApp Business catalogue. Combine with targeted Facebook Ads set to Lagos, Abuja, or other target cities for rapid growth.",
      "Slatech Solutions builds custom e-commerce websites for Nigerian businesses, complete with Paystack integration, inventory management, WhatsApp support, and mobile-first design. We've helped Lagos entrepreneurs generate millions in online revenue. Contact us for a free consultation.",
    ],
  },
  "web-design-trends-2026": {
    title: "10 Web Design Trends to Watch in 2026",
    excerpt: "Discover the latest web design trends that are shaping the digital landscape this year.",
    category: "Design",
    date: "Apr 10, 2026",
    readTime: "5 min read",
    color: "bg-blue-500",
    content: [
      "The web design landscape is constantly evolving, and 2026 is no exception. From AI-driven layouts to immersive 3D experiences, this year brings exciting innovations that are reshaping how we think about digital design.",
      "AI-Powered Design is leading the charge. Tools that automatically generate layouts, color schemes, and even content based on user behavior are becoming mainstream. Designers are now focusing more on strategy and creativity while AI handles the heavy lifting of responsive layouts.",
      "Immersive 3D Elements are becoming more accessible thanks to WebGL and Three.js improvements. Websites now feature interactive 3D product showcases, animated backgrounds, and spatial navigation that create memorable user experiences.",
      "Micro-interactions continue to gain importance. Subtle animations on hover, scroll, and click provide visual feedback that makes websites feel alive and responsive. These small details significantly improve user engagement and satisfaction.",
      "Dark mode is no longer optional. With most operating systems and browsers supporting dark themes, websites must offer seamless dark mode experiences. This includes careful color selection for readability and accessibility in both modes.",
      "Minimalist navigation with mega menus and command palettes are replacing traditional navigation bars. Users expect quick access to content through search-first interfaces inspired by apps like Spotlight and VS Code.",
      "Variable fonts are revolutionizing typography on the web. A single font file can now contain multiple weights and styles, reducing load times while providing designers with unprecedented typographic flexibility.",
      "Sustainability in web design is gaining traction. Optimized images, efficient code, green hosting, and reduced data transfer are becoming standard practices as the industry acknowledges its environmental impact.",
      "Accessibility-first design is no longer an afterthought. WCAG 2.2 compliance is becoming a baseline requirement, with designers building inclusive experiences from the ground up rather than retrofitting them later.",
      "These trends collectively point toward a future where websites are faster, more accessible, more sustainable, and more engaging than ever before. Staying ahead of these trends will give your business a competitive edge in the digital landscape.",
    ],
  },
  "boost-seo-rankings": {
    title: "How to Boost Your Website's SEO Rankings",
    excerpt: "Learn proven strategies to improve your search engine rankings and drive more organic traffic.",
    category: "SEO",
    date: "Apr 5, 2026",
    readTime: "7 min read",
    color: "bg-green-500",
    content: [
      "Search Engine Optimization remains one of the most effective ways to drive organic traffic to your website. In 2026, the SEO landscape has evolved significantly, but the fundamentals remain crucial.",
      "Start with thorough keyword research. Use tools like Google Keyword Planner, Ahrefs, or SEMrush to identify keywords your target audience is searching for. Focus on long-tail keywords with lower competition but high intent.",
      "On-page SEO is your foundation. Ensure every page has a unique title tag (under 60 characters), a compelling meta description (under 155 characters), and properly structured headings (H1, H2, H3) that include your target keywords naturally.",
      "Content quality is king. Google's algorithms increasingly prioritize helpful, original content that demonstrates expertise and authority. Write comprehensive articles that thoroughly answer user queries and provide genuine value.",
      "Technical SEO cannot be overlooked. Ensure your site loads in under 3 seconds, is mobile-friendly, has a proper XML sitemap, uses HTTPS, and has clean URL structures. Core Web Vitals are now a significant ranking factor.",
      "Build high-quality backlinks through guest posting, creating shareable content, and building relationships with industry peers. One link from a high-authority domain is worth more than hundreds of low-quality links.",
      "Local SEO is essential for businesses serving specific areas. Claim your Google Business Profile, ensure NAP (Name, Address, Phone) consistency across directories, and actively collect customer reviews.",
    ],
  },
  "mobile-friendly-website": {
    title: "Why Every Business Needs a Mobile-Friendly Website",
    excerpt: "Mobile traffic accounts for over 60% of web visits. Here's why responsive design is critical.",
    category: "Business",
    date: "Mar 28, 2026",
    readTime: "4 min read",
    color: "bg-purple-500",
    content: [
      "In 2026, mobile devices account for over 65% of global web traffic. If your website isn't optimized for mobile, you're losing more than half your potential customers.",
      "Google uses mobile-first indexing, meaning it primarily uses the mobile version of your website for ranking and indexing. A poor mobile experience directly impacts your search engine rankings.",
      "Mobile users have high expectations. They expect pages to load in under 3 seconds, navigation to be thumb-friendly, and content to be easily readable without zooming. Failing to meet these expectations results in high bounce rates.",
      "Responsive design is the solution. Rather than building separate mobile and desktop sites, responsive design adapts your website's layout to fit any screen size. This approach is more maintainable and provides a consistent brand experience.",
      "Key responsive design principles include flexible grid layouts, scalable images, touch-friendly buttons (minimum 44x44 pixels), readable font sizes (minimum 16px), and simplified navigation for smaller screens.",
      "The business impact is clear: companies with mobile-friendly websites see 74% higher mobile conversion rates, 67% more likely that visitors will make a purchase, and significantly lower bounce rates compared to non-optimized competitors.",
    ],
  },
  "ecommerce-conversion-tips": {
    title: "5 E-Commerce Conversion Optimization Tips",
    excerpt: "Increase your online store's conversion rate with these proven strategies.",
    category: "E-Commerce",
    date: "Mar 20, 2026",
    readTime: "6 min read",
    color: "bg-pink-500",
    content: [
      "E-commerce conversion optimization is the art and science of turning website visitors into paying customers. Even small improvements in conversion rate can significantly impact your revenue.",
      "Tip 1: Simplify your checkout process. The average cart abandonment rate is 70%. Reduce the number of form fields, offer guest checkout, support multiple payment methods, and show a clear progress indicator during checkout.",
      "Tip 2: Use high-quality product images and videos. Products with multiple images from different angles convert 58% better. Add zoom functionality, 360-degree views, and short product videos to help customers make confident purchase decisions.",
      "Tip 3: Build trust with social proof. Display customer reviews, ratings, testimonials, and trust badges prominently. Products with reviews convert 270% better than those without. Showcase real customer photos and user-generated content.",
      "Tip 4: Optimize page speed. Every second of delay in page load reduces conversions by 7%. Compress images, minimize code, use a CDN, and implement lazy loading to ensure your store loads lightning fast on all devices.",
      "Tip 5: Implement smart product recommendations. Personalized product suggestions based on browsing history and purchase patterns can increase revenue by 10-30%. Use 'Customers also bought' and 'You may also like' sections strategically.",
    ],
  },
  "website-security-guide": {
    title: "The Ultimate Website Security Guide for 2026",
    excerpt: "Protect your website from cyber threats with our comprehensive security guide.",
    category: "Security",
    date: "Mar 15, 2026",
    readTime: "8 min read",
    color: "bg-red-500",
    content: [
      "Website security is no longer optional — it's a necessity. With cyberattacks increasing by 38% year-over-year, every website owner must take proactive steps to protect their site and user data.",
      "Start with SSL/TLS encryption. An SSL certificate encrypts data transmitted between your website and visitors, protecting sensitive information. Google also uses HTTPS as a ranking signal, making it essential for SEO.",
      "Keep all software updated. Outdated CMS platforms, plugins, and themes are the primary attack vectors. Enable automatic updates where possible, and regularly audit your software stack for known vulnerabilities.",
      "Implement strong authentication. Use multi-factor authentication (MFA) for admin accounts, enforce strong password policies, and limit login attempts to prevent brute-force attacks. Consider passwordless authentication for enhanced security.",
      "Regular backups are your safety net. Automate daily backups stored in multiple locations (on-site and off-site). Test your backup restoration process regularly to ensure you can recover quickly from any incident.",
      "Web Application Firewalls (WAF) provide an essential layer of protection. A WAF filters and monitors HTTP traffic, blocking common attacks like SQL injection, cross-site scripting (XSS), and DDoS attacks before they reach your server.",
      "Security headers add another layer of protection. Implement Content Security Policy (CSP), X-Frame-Options, X-Content-Type-Options, and Strict-Transport-Security headers to prevent various attack vectors.",
      "Regular security audits and penetration testing help identify vulnerabilities before attackers do. Schedule quarterly security reviews and consider bug bounty programs for continuous security monitoring.",
    ],
  },
  "choosing-web-hosting": {
    title: "How to Choose the Right Web Hosting Provider",
    excerpt: "A complete guide to selecting the best hosting solution for your website.",
    category: "Hosting",
    date: "Mar 10, 2026",
    readTime: "5 min read",
    color: "bg-yellow-500",
    content: [
      "Choosing the right web hosting provider is one of the most important decisions for your online presence. Your host affects your website's speed, security, uptime, and ultimately, your business success.",
      "Shared hosting is the most affordable option, suitable for small websites and blogs with moderate traffic. However, you share server resources with other websites, which can impact performance during traffic spikes.",
      "VPS (Virtual Private Server) hosting offers dedicated resources within a shared environment. It's ideal for growing businesses that need more control and performance than shared hosting but aren't ready for a dedicated server.",
      "Dedicated hosting provides an entire server exclusively for your website. This is the best option for high-traffic sites, e-commerce stores, and applications requiring maximum performance, security, and customization.",
      "Cloud hosting distributes your website across multiple servers, providing excellent scalability and reliability. If one server fails, others take over seamlessly. This is ideal for businesses with fluctuating traffic.",
      "Key factors to evaluate: uptime guarantee (aim for 99.9%+), server speed and location, storage and bandwidth limits, SSL certificate inclusion, backup frequency, customer support availability, and scalability options.",
      "At Slatech Solutions, we provide managed hosting with 99.9% uptime, free SSL, daily backups, and 24/7 support. Contact us to find the perfect hosting solution for your needs.",
    ],
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-300 hover:text-primary transition-colors text-sm mb-6"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-400" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className={`${post.color} h-64 sm:h-80 relative`}>
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share & CTA */}
          <div className="border-t border-border mt-12 pt-8">
            <div className="bg-accent rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Need Help With Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Our team of experts is ready to help you build a website that
                drives results. Get a free consultation today.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all hover:scale-105 active:scale-95"
              >
                Get in Touch
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
