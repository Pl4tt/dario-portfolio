export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-xl border border-outline/40 bg-white/5 p-4">
      {children}
    </div>
  );
}
