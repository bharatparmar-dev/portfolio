import CornerTicks from "@/components/CornerTicks";
import { about } from "@/content/site";

const steps = about.journey;

export default function JourneyDiagram() {
  return (
    <div className="relative rounded-sm border border-line bg-surface">
      <CornerTicks />
      <div className="overflow-x-auto px-8 py-10">
        <div className="relative flex min-w-[720px] items-start justify-between">
          {/* One continuous line, sitting behind all the dots */}
          <div className="absolute left-0 right-0 top-[26px] border-t border-line" />
          {steps.map((step, i) => (
            <div key={step.label} className="relative z-10 flex flex-1 flex-col items-center px-2 text-center">
              <span className="font-mono text-[10px] text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-2 h-2 w-2 rounded-full border border-brass bg-ink" />
              <span className="mt-3 font-display text-sm font-semibold">{step.label}</span>
              <span className="mt-1 max-w-[120px] font-mono text-[11px] leading-snug text-muted">
                {step.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}