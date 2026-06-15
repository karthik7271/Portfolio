"use client";

import { useEffect, useState } from "react";
import NodeGraphCanvas from "./NodeGraphCanvas";

export function HeroCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-full w-full animate-pulse rounded-3xl border border-border bg-surface/40" />;
  }

  return (
    <div className="h-full w-full overflow-hidden rounded-3xl border border-border">
      <NodeGraphCanvas />
    </div>
  );
}
