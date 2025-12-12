export default function Sidebar() {
  return (
    <aside
      className="flex w-64 flex-col text-white"
      style={{ background: 'var(--fesc-primary)' }}
    >
      <div className="flex h-16 items-center justify-center border-b border-white/20 text-lg font-bold">
        FESC • Peticiones
      </div>

      <nav className="flex-1 space-y-2 p-3">
        {[
          'Dashboard',
          'Nueva solicitud',
          'Recibidas',
          'Enviadas',
          'Historial',
          'Gráficas',
        ].map((t) => (
          <button
            key={t}
            className="w-full rounded px-4 py-2 text-left hover:bg-black/15"
          >
            {t}
          </button>
        ))}
      </nav>

      <div className="p-4 text-sm opacity-90">
        © FESC Cúcuta
      </div>
    </aside>
  )
}
