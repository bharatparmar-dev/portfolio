import CornerTicks from "@/components/CornerTicks";

export default function PageHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="relative border-b border-line px-6 py-20">
      <CornerTicks />
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-widest text-brass">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">{title}</h1>
      </div>
    </div>
  );
}