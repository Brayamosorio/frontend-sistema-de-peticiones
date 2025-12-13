import AppShell from '../../components/layout/AppShell'
import ModuleCard from '../../components/dashboard/ModuleCard'

export default function Dashboard() {
  return (
    <AppShell>
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ModuleCard
          title="Solicitudes recibidas"
          value="12"
          description="Total de solicitudes entrantes"
        />

        <ModuleCard
          title="Pendientes"
          value="5"
          description="Solicitudes sin respuesta"
        />

        <ModuleCard
          title="Respondidas"
          value="7"
          description="Solicitudes finalizadas"
        />
      </div>
    </AppShell>
  )
}
