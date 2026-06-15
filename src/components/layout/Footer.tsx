import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/lib/data/profile";

const links = [
  { label: "GitHub", href: profile.social.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.social.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="overflow-hidden border-b border-border py-6">
        <div className="animate-marquee flex w-max gap-12 font-mono text-2xl font-black tracking-tight whitespace-nowrap text-surface-2 sm:text-4xl">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="text-gradient">
              LET&apos;S BUILD SOMETHING ·
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-muted">{profile.title} · {profile.location}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-bold tracking-widest uppercase text-muted transition hover:border-lime hover:text-lime"
            >
              <Icon size={14} />
              {label}
              <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-8 text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, React Three Fiber &amp; Motion — deployed on Vercel.
      </div>
    </footer>
  );
}
