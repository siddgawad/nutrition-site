export default function Badge({ label }: { label: string }) {
    return <span className="rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs">{label}</span>;
  }