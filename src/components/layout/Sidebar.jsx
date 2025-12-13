import { NavLink } from 'react-router-dom'
import { getRole } from '../../store/authStore'
import logo from '../../assets/fesc-logo.png'

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

  if (role === 'admin') {
    items.push({ label: 'Usuarios', to: '/admin/users' })
  }

  return (
    <aside
      className="flex w-64 flex-col text-white"
      style={{ background: 'var(--fesc-primary)' }}
    >
      <div className="flex h-44 items-center justify-center border-b border-white/20 px-2 py-3">
        <img
          src={logo}
          alt="FESC Peticiones"
          className="max-h-32 w-full max-w-full object-contain"
        />
      </div>

      <nav className="flex-1 space-y-2 p-3">
        {items.map((it) => (
          <NavLink key={it.to} to={it.to} className="block">
            {({ isActive }) => (
              <span
                className={
                  'block w-full rounded px-4 py-2 text-left transform transition-transform duration-150 ' +
                  (isActive
                    ? 'font-semibold'
                    : 'hover:scale-[1.05] hover:bg-black/10')
                }
                style={{ transformOrigin: 'center left' }}
              >
                {it.label}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 text-sm opacity-90">© FESC Cúcuta</div>
    </aside>
  )
}
