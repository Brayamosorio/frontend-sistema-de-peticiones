import { useState } from 'react'
import AppShell from '../../components/layout/AppShell'

export default function Users() {
  const [form, setForm] = useState({
    nombre: '',
    cedula: '',
    email: '',
    rol: '',
    dependencia: '',
    cargo: '',
    sexo: '',
  })

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    // Validación simple
    if (Object.values(form).some((v) => v === '')) {
      alert('Por favor complete todos los campos')
      return
    }

    // Mock: luego se conecta al backend
    console.log('Usuario creado:', form)
    alert('Usuario creado correctamente')

    setForm({
      nombre: '',
      cedula: '',
      email: '',
      rol: '',
      dependencia: '',
      cargo: '',
      sexo: '',
    })
  }

  return (
    <AppShell>
      <h1 className="mb-6 text-2xl font-bold">Crear usuarios</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl rounded-xl border bg-white p-6"
        style={{ borderColor: 'var(--fesc-border)' }}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">
              Nombre completo
            </label>
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2"
              style={{ borderColor: 'var(--fesc-border)' }}
              placeholder="Ej: Juan Pérez"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Cédula</label>
            <input
              name="cedula"
              value={form.cedula}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2"
              style={{ borderColor: 'var(--fesc-border)' }}
              placeholder="Ej: 1090123456"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2"
              style={{ borderColor: 'var(--fesc-border)' }}
              placeholder="correo@fesc.edu.co"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Rol</label>
            <select
              name="rol"
              value={form.rol}
              onChange={handleChange}
              className="w-full rounded-lg border bg-white px-3 py-2"
              style={{ borderColor: 'var(--fesc-border)' }}
            >
              <option value="">Seleccione</option>
              <option value="admin">Administrador</option>
              <option value="user">Usuario</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Dependencia</label>
            <input
              name="dependencia"
              value={form.dependencia}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2"
              style={{ borderColor: 'var(--fesc-border)' }}
              placeholder="Ej: Secretaría Académica"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Cargo</label>
            <input
              name="cargo"
              value={form.cargo}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2"
              style={{ borderColor: 'var(--fesc-border)' }}
              placeholder="Ej: Coordinador"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Sexo</label>
            <select
              name="sexo"
              value={form.sexo}
              onChange={handleChange}
              className="w-full rounded-lg border bg-white px-3 py-2"
              style={{ borderColor: 'var(--fesc-border)' }}
            >
              <option value="">Seleccione</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="O">Otro</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="rounded-lg px-6 py-2 font-medium text-white"
            style={{ background: 'var(--fesc-primary)' }}
          >
            Crear usuario
          </button>
        </div>
      </form>
    </AppShell>
  )
}
