export default function CornerTicks() {
  return (
    <>
      <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l border-t border-brass/60" />
      <span className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-brass/60" />
      <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-brass/60" />
      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-brass/60" />
    </>
  );
}