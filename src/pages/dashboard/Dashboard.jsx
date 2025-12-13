import AppShell from '../../components/layout/AppShell'

function StatCard({ label, value, description }) {
  return (
    <div
      className="transform rounded-xl border bg-white p-6 shadow-sm transition duration-200 ease-out hover:scale-[1.03] hover:shadow-lg"
      style={{ borderColor: '#a11216', transformOrigin: 'center' }}
    >
      <p className="text-sm font-medium text-slate-600">{label}</p>
      <p className="mt-2 text-3xl font-bold text-slate-800">{value}</p>
      <p className="mt-2 text-xs text-slate-500">{description}</p>
    </div>
  )
}

export default function Dashboard() {
  return (
    <AppShell>
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatCard
          label="Solicitudes recibidas"
          value="12"
          description="Total de solicitudes entrantes"
        />
        <StatCard
          label="Pendientes"
          value="5"
          description="Solicitudes sin respuesta"
        />
        <StatCard
          label="Respondidas"
          value="7"
          description="Solicitudes finalizadas"
        />
      </div>
    </AppShell>
  )
}
