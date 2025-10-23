import { Header } from "@/components/mvpblocks/Header";
import { Hero } from "@/components/mvpblocks/Hero";
import { Bento } from "@/components/mvpblocks/Bento";
import { Pricing } from "@/components/mvpblocks/Pricing";
import { FAQ }  from "@/components/mvpblocks/FAQ";
import { Code2, Sparkles, Zap, Shield, Users, Rocket } from "lucide-react";
import { Trust } from "@/components/mvpblocks/Trust";
import { Waitlist } from "@/components/mvpblocks/Waitlist";
import { Footer } from "@/components/mvpblocks/Footer";

const bentoItems = [
  {
    title: 'One-Click Setup',
    meta: 'No Configuration',
    description:
      'Connect your camera, mic, and scene in seconds. Nephos Studio handles all the technical complexity so you can focus on creating amazing content during your IRL event.',
    icon: <Zap className="text-primary h-4 w-4" />,
    status: 'Featured',
    tags: ['Quick', 'Easy', 'Ready'],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: 'Multi-Platform Broadcasting',
    meta: 'Everywhere',
    description:
      'Stream to YouTube, Twitch, TikTok, and Instagram simultaneously. Reach your audience wherever they are with a single broadcast.',
    icon: <Rocket className="text-primary h-4 w-4" />,
    status: 'Popular',
    tags: ['YouTube', 'Twitch', 'Multi'],
  },
  {
    title: 'Real-Time Chat & Engagement',
    description:
      'Engage with your viewers across all platforms in one unified dashboard. Read comments, replies, and interact with your audience seamlessly.',
    icon: <Users className="text-primary h-4 w-4" />,
    status: 'Essential',
  },
  {
    title: 'Professional Overlays & Layouts',
    description:
      'Customizable templates and overlays designed for IRL creators. Add donation alerts, chat, webcam, and more with drag-and-drop ease.',
    icon: <Sparkles className="text-primary h-4 w-4" />,
    meta: 'Designer Ready',
    tags: ['Overlays', 'Design'],
  },
  {
    title: 'Portable & Cloud-Based',
    description:
      'Stream from anywhere using any device. Cloud-based infrastructure means no heavy software to install or powerful hardware needed.',
    icon: <Code2 className="text-primary h-4 w-4" />,
    meta: 'Anywhere',
    tags: ['Cloud', 'Mobile'],
  },
  {
    title: 'Built-in Monetization Tools',
    meta: 'Earn While Streaming',
    description:
      'Integrated tipping, donations, and subscription management. Keep your audience engaged and support your content creation directly.',
    icon: <Shield className="text-primary h-4 w-4" />,
    status: 'New',
    tags: ['Revenue', 'Tips'],
    colSpan: 2,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-950">
      <div className="absolute top-0 z-0 h-full w-full bg-neutral-900/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Trust />
          <Bento items={bentoItems} />
          <Pricing />
          <FAQ />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </div>
  );
}
