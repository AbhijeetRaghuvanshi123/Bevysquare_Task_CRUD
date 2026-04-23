export default function Loading() {
  return (
    <div className="max-w-xl mx-auto mt-12 px-4 animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <div className="h-5 w-24 bg-black/10 rounded" />
        <div className="h-8 w-28 bg-black/10 rounded" />
      </div>

      <ul className="divide-y divide-black/10">
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={i} className="flex items-center justify-between py-3">
            <div className="space-y-2">
              <div className="h-4 w-32 bg-black/10 rounded" />
              <div className="h-3 w-48 bg-black/10 rounded" />
            </div>
            <div className="h-8 w-16 bg-black/10 rounded" />
          </li>
        ))}
      </ul>
    </div>
  );
}