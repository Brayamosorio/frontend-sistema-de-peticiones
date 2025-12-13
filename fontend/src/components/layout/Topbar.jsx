import { useNavigate } from 'react-router-dom'
import { clearAuth, getAuth } from '../../store/authStore'

export default function Topbar() {
  const nav = useNavigate()
  const auth = getAuth()

  function logout() {
    clearAuth()
    nav('/login', { replace: true })
  }

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div>
        <p className="font-semibold">Sistema de Peticiones</p>
        <p className="text-xs" style={{ color: 'var(--fesc-muted)' }}>
          Fundación de Estudios Superiores Comfanorte
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm" style={{ color: 'var(--fesc-muted)' }}>
          {auth?.name || 'Usuario'}
        </span>
        <button
          onClick={logout}
          className="rounded px-3 py-1 text-white"
          style={{ background: 'var(--fesc-primary)' }}
        >
          Salir
        </button>
      </div>
    </header>
  )
}
