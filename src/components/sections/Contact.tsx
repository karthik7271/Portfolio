import { Mail } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/lib/data/profile";

const directLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", value: "View profile", href: profile.social.github, icon: GithubIcon },
  { label: "LinkedIn", value: "Connect", href: profile.social.linkedin, icon: LinkedinIcon },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="05 — Contact"
          title="Let's build something."
          accent="magenta"
          description="Open to SDE and AI/ML internships — or just want to talk about multi-agent systems? Reach out."
        />

        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <div className="space-y-4 lg:col-span-5">
            {directLinks.map((link, i) => {
              const Icon = link.icon;
              const external = link.href.startsWith("http");
              return (
                <Reveal key={link.label} delay={i * 0.05}>
                  <a
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-magenta"
                  >
                    <Icon size={20} className="shrink-0 text-magenta" />
                    <span>
                      <span className="block font-mono text-xs font-bold tracking-[0.2em] text-muted uppercase">
                        {link.label}
                      </span>
                      <span className="block text-sm">{link.value}</span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
