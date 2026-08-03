'use client';

import { useEffect, useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081/api';

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
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#e0f2fe,_#f8fbff_45%,_#eef6ff_100%)] text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-950 via-blue-900 to-sky-600 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-sky-100">
                CECONP
              </span>
              <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Convenio de prácticas preprofesionales
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-sky-100 sm:text-lg">
                Área de prácticas: Tecnología, Automatización y Soporte a Procesos Arbitrales.
                Acompañamos a estudiantes con interés en desarrollo de software, automatización documental, IA aplicada, innovación tecnológica y gestión de información.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15">Lima, Perú</span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15">Tecnología y automatización</span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15">Proceso formal</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-100">Puesto disponible</p>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Practicante en Tecnología y Automatización</h2>
              <div className="mt-6 space-y-3 text-sm text-sky-50">
                <div className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
                  Requiere interés en automatización, desarrollo y análisis de procesos institucionales.
                </div>
                <div className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
                  Participación activa en proyectos reales con enfoque tecnológico y documental.
                </div>
                <div className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
                  Formación y experiencia para aportar en soluciones de soporte y mejora continua.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">Perfil</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">Estudiantes con vocación tecnológica</p>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">Enfoque</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">Automatización, innovación y análisis</p>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">Modalidad</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">Prácticas preprofesionales</p>
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border border-sky-100 bg-white p-6 shadow-[0_18px_60px_-20px_rgba(14,116,144,0.35)] ring-1 ring-sky-50 sm:p-8">
          <div className="flex flex-col gap-3 border-b border-sky-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-sky-900 sm:text-3xl">Formulario de postulación</h2>
              <p className="mt-1 text-sm text-slate-600">Complete sus datos, responda las preguntas abiertas y adjunte su CV en formato PDF.</p>
            </div>
            <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">Proceso formal</span>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="flex flex-col text-sm">
              <span className="mb-1 font-medium text-slate-700">Nombres</span>
              <input name="nombres" value={form.nombres} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none transition focus:border-sky-600 focus:bg-white" required />
            </label>
            <label className="flex flex-col text-sm">
              <span className="mb-1 font-medium text-slate-700">Apellidos</span>
              <input name="apellidos" value={form.apellidos} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none transition focus:border-sky-600 focus:bg-white" required />
            </label>
            <label className="flex flex-col text-sm">
              <span className="mb-1 font-medium text-slate-700">Correo electrónico</span>
              <input type="email" name="correo" value={form.correo} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none transition focus:border-sky-600 focus:bg-white" required />
            </label>
            <label className="flex flex-col text-sm">
              <span className="mb-1 font-medium text-slate-700">Teléfono</span>
              <input name="telefono" value={form.telefono} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none transition focus:border-sky-600 focus:bg-white" />
            </label>
            <label className="flex flex-col text-sm">
              <span className="mb-1 font-medium text-slate-700">Universidad</span>
              <input name="universidad" value={form.universidad} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none transition focus:border-sky-600 focus:bg-white" required />
            </label>
            <label className="flex flex-col text-sm">
              <span className="mb-1 font-medium text-slate-700">Carrera</span>
              <input name="carrera" value={form.carrera} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none transition focus:border-sky-600 focus:bg-white" required />
            </label>
            <label className="flex flex-col text-sm">
              <span className="mb-1 font-medium text-slate-700">Ciclo / semestre</span>
              <input name="ciclo" value={form.ciclo} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none transition focus:border-sky-600 focus:bg-white" />
            </label>
            <label className="flex flex-col text-sm">
              <span className="mb-1 font-medium text-slate-700">LinkedIn</span>
              <input name="linkedin" value={form.linkedin} onChange={handleChange} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none transition focus:border-sky-600 focus:bg-white" />
            </label>

            <label className="flex flex-col text-sm md:col-span-2">
              <span className="mb-1 font-medium text-slate-700">¿Por qué te interesa esta práctica preprofesional en CECONP?</span>
              <textarea name="motivacion" value={form.motivacion} onChange={handleChange} rows={4} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none transition focus:border-sky-600 focus:bg-white" required />
            </label>

            <label className="flex flex-col text-sm md:col-span-2">
              <span className="mb-1 font-medium text-slate-700">Describe una experiencia o proyecto donde hayas aplicado automatización, análisis de datos, desarrollo de software o herramientas tecnológicas.</span>
              <textarea name="experiencia" value={form.experiencia} onChange={handleChange} rows={4} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none transition focus:border-sky-600 focus:bg-white" required />
            </label>

            <label className="flex flex-col text-sm md:col-span-2">
              <span className="mb-1 font-medium text-slate-700">Indica tu disponibilidad y horario para la práctica preprofesional.</span>
              <textarea name="disponibilidad" value={form.disponibilidad} onChange={handleChange} rows={4} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none transition focus:border-sky-600 focus:bg-white" required />
            </label>

            <label className="flex flex-col text-sm md:col-span-2">
              <span className="mb-1 font-medium text-slate-700">CV (PDF)</span>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 outline-none transition focus:border-sky-600 focus:bg-white"
                required
              />
            </label>

            <button type="submit" className="md:col-span-2 rounded-2xl bg-gradient-to-r from-sky-900 via-blue-700 to-sky-600 px-4 py-3.5 font-semibold text-white shadow-lg shadow-sky-900/20 transition hover:scale-[1.01] hover:from-sky-800 hover:to-blue-600">
              Enviar postulación
            </button>
          </form>

          {message && <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800 ring-1 ring-emerald-200">{message}</p>}
        </section>
      </div>
    </main>
  );
}
