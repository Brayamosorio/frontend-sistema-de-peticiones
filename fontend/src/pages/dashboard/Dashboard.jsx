import AppShell from '../../components/layout/AppShell'

function StatCard({ label, value }) {
  return (
    <div
      className="rounded-xl border bg-white p-5"
      style={{ borderColor: 'var(--fesc-border)' }}
    >
      <p className="text-sm" style={{ color: 'var(--fesc-muted)' }}>
        {label}
      </p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  )
}

export default function Dashboard() {
  return (
    <AppShell>
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatCard label="Solicitudes recibidas" value="12" />
        <StatCard label="Pendientes" value="5" />
        <StatCard label="Respondidas" value="7" />
      </div>
    </AppShell>
  )
}
