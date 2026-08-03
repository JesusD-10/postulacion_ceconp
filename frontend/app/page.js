'use client';

import { useEffect, useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://tu-backend-publico.com/api';

const initialForm = {
  nombres: '',
  apellidos: '',
  correo: '',
  telefono: '',
  universidad: '',
  carrera: '',
  ciclo: '',
  linkedin: '',
  motivacion: '',
  experiencia: '',
  disponibilidad: ''
};

export default function Home() {
  const [form, setForm] = useState(initialForm);
  const [cvFile, setCvFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cvFile || !cvFile.name.toLowerCase().endsWith('.pdf')) {
      setMessage('Adjunta un archivo PDF válido para el CV.');
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('cv', cvFile);

    const res = await fetch(`${API_URL}/postulantes/upload`, {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      setMessage('Postulación registrada con éxito. Tu CV quedó guardado en la base de datos.');
      setForm(initialForm);
      setCvFile(null);
    } else {
      setMessage('No se pudo registrar la postulación.');
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="bg-gradient-to-r from-sky-950 via-blue-900 to-sky-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]">CECONP</span>
              <h1 className="mt-4 text-4xl font-bold leading-tight">Convenio de prácticas preprofesionales</h1>
              <p className="mt-3 max-w-3xl text-sky-100">
                Área de prácticas: Tecnología, Automatización y Soporte a Procesos Arbitrales.
                Acompañamos a estudiantes con interés en desarrollo de software, automatización documental, IA aplicada, innovación tecnológica y gestión de información.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-100">Puesto disponible</p>
              <p className="mt-2 text-2xl font-semibold">Practicante en Tecnología y Automatización</p>
              <p className="mt-3 text-sm text-sky-100">Lima, Perú • CECONP</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="grid gap-8">
          <section className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-sky-100">
            <div className="flex items-center justify-between border-b border-sky-100 pb-4">
              <div>
                <h2 className="text-2xl font-bold text-sky-900">Formulario de postulación</h2>
                <p className="mt-1 text-sm text-slate-600">Complete sus datos, responda las preguntas abiertas y adjunte su CV en formato PDF.</p>
              </div>
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">Proceso formal</span>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="flex flex-col text-sm">
                <span className="mb-1 font-medium text-slate-700">Nombres</span>
                <input name="nombres" value={form.nombres} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none focus:border-sky-600" required />
              </label>
              <label className="flex flex-col text-sm">
                <span className="mb-1 font-medium text-slate-700">Apellidos</span>
                <input name="apellidos" value={form.apellidos} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none focus:border-sky-600" required />
              </label>
              <label className="flex flex-col text-sm">
                <span className="mb-1 font-medium text-slate-700">Correo electrónico</span>
                <input type="email" name="correo" value={form.correo} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none focus:border-sky-600" required />
              </label>
              <label className="flex flex-col text-sm">
                <span className="mb-1 font-medium text-slate-700">Teléfono</span>
                <input name="telefono" value={form.telefono} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none focus:border-sky-600" />
              </label>
              <label className="flex flex-col text-sm">
                <span className="mb-1 font-medium text-slate-700">Universidad</span>
                <input name="universidad" value={form.universidad} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none focus:border-sky-600" required />
              </label>
              <label className="flex flex-col text-sm">
                <span className="mb-1 font-medium text-slate-700">Carrera</span>
                <input name="carrera" value={form.carrera} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none focus:border-sky-600" required />
              </label>
              <label className="flex flex-col text-sm">
                <span className="mb-1 font-medium text-slate-700">Ciclo / semestre</span>
                <input name="ciclo" value={form.ciclo} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none focus:border-sky-600" />
              </label>
              <label className="flex flex-col text-sm">
                <span className="mb-1 font-medium text-slate-700">LinkedIn</span>
                <input name="linkedin" value={form.linkedin} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none focus:border-sky-600" />
              </label>

              <label className="flex flex-col text-sm md:col-span-2">
                <span className="mb-1 font-medium text-slate-700">¿Por qué te interesa esta práctica preprofesional en CECONP?</span>
                <textarea name="motivacion" value={form.motivacion} onChange={handleChange} rows={4} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none focus:border-sky-600" required />
              </label>

              <label className="flex flex-col text-sm md:col-span-2">
                <span className="mb-1 font-medium text-slate-700">Describe una experiencia o proyecto donde hayas aplicado automatización, análisis de datos, desarrollo de software o herramientas tecnológicas.</span>
                <textarea name="experiencia" value={form.experiencia} onChange={handleChange} rows={4} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none focus:border-sky-600" required />
              </label>

              <label className="flex flex-col text-sm md:col-span-2">
                <span className="mb-1 font-medium text-slate-700">Indica tu disponibilidad y horario para la práctica preprofesional.</span>
                <textarea name="disponibilidad" value={form.disponibilidad} onChange={handleChange} rows={4} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none focus:border-sky-600" required />
              </label>

              <label className="flex flex-col text-sm md:col-span-2">
                <span className="mb-1 font-medium text-slate-700">CV (PDF)</span>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                  className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5"
                  required
                />
              </label>

              <button type="submit" className="md:col-span-2 rounded-xl bg-gradient-to-r from-sky-800 to-blue-700 px-4 py-3 font-semibold text-white shadow-md transition hover:from-sky-700 hover:to-blue-600">
                Enviar postulación
              </button>
            </form>

            {message && <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">{message}</p>}
          </section>

        </div>
      </div>
    </main>
  );
}
