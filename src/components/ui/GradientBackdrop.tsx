export function GradientBackdrop() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="animate-blob-a absolute -top-1/3 -left-1/4 h-[60vmax] w-[60vmax] rounded-full bg-lime/15 blur-[120px]" />
      <div className="animate-blob-b absolute top-1/4 -right-1/3 h-[55vmax] w-[55vmax] rounded-full bg-magenta/15 blur-[120px]" />
      <div className="animate-blob-c absolute bottom-[-25%] left-1/4 h-[50vmax] w-[50vmax] rounded-full bg-cyan/10 blur-[120px]" />
    </div>
  );
}
