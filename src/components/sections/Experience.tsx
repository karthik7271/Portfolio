import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data/experience";

export function Experience() {
  return (
    <section id="work" className="scroll-mt-24 pt-10 pb-10 sm:pt-12 sm:pb-12">
      <Container>
        <SectionHeading
          eyebrow="02 — Work"
          title="Selected Work"
          accent="magenta"
          description="Three production systems built at Glance (InMobi), two personal agents, and two national-level hackathon wins — both with full case studies."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {experience.map((entry, i) => (
            <ProjectCard key={entry.slug} entry={entry} featured={i === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
