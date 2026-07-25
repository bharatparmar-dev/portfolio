"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function RouteFocusReset() {
  const pathname = usePathname();
  const anchorRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    anchorRef.current?.focus();
  }, [pathname]);

  return <div ref={anchorRef} tabIndex={-1} className="sr-only" />;
}