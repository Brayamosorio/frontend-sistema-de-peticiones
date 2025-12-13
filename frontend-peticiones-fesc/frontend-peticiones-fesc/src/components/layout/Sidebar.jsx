import { NavLink } from 'react-router-dom'
import { getRole } from '../../store/authStore'

export default function Sidebar() {
  const role = getRole()
  const items = [
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Nueva solicitud', to: '/requests/new' },
    { label: 'Recibidas', to: '/requests/inbox' },
    { label: 'Enviadas', to: '/requests/sent' },
    { label: 'Historial', to: '/requests/history' },
    { label: 'Gráficas', to: '/analytics/charts' },
  ]

  // Solo admin
  if (role === 'admin') {
    items.push({ label: 'Usuarios', to: '/admin/users' })
  }

  return (
    <aside
      className="flex w-64 flex-col text-white"
      style={{ background: 'var(--fesc-primary)' }}
    >
      <div className="flex h-16 items-center justify-center border-b border-white/20 text-lg font-bold">
        FESC • Peticiones
      </div>

      <nav className="flex-1 space-y-2 p-3">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            className={({ isActive }) =>
              'block w-full rounded px-4 py-2 text-left ' +
              (isActive ? 'bg-black/20 font-semibold' : 'hover:bg-black/15')
            }
          >
            {it.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 text-sm opacity-90">© FESC Cúcuta</div>
    </aside>
  )
}
