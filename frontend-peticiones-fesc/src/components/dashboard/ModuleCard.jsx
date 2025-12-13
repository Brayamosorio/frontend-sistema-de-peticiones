export default function ModuleCard({ title, value, description }) {
  return (
    <div
      className="w-full rounded-xl border bg-white p-6 transition duration-150 ease-out hover:scale-[1.02] hover:shadow-lg"
      style={{ borderColor: 'var(--fesc-border)', transformOrigin: 'center' }}
    >
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="mt-2 text-3xl font-bold">{value}</p>
      <p className="mt-2 text-xs text-gray-400">{description}</p>
    </div>
  )
}
