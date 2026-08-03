# CECONP - Portal de Postulación

Portal web de postulación para prácticas preprofesionales en CECONP, desarrollado con Spring Boot y Next.js.

## Descripción

Este proyecto permite a los postulantes completar un formulario formal, responder preguntas abiertas y adjuntar su CV en formato PDF. La información se guarda en PostgreSQL y queda lista para revisión institucional.

## Stack tecnológico

- Backend: Java 21 + Spring Boot 3.4 + Spring Data JPA + PostgreSQL
- Frontend: Next.js 14 + React 18 + Tailwind CSS
- Seguridad: Spring Security
- Documentación: Springdoc OpenAPI

## Requisitos

- Java 21
- Maven
- Node.js 18+
- PostgreSQL local

## Base de datos

La aplicación está configurada para usar PostgreSQL con estas credenciales:

- Base de datos: `p_ceconp`
- Usuario: `postgres`
- Contraseña: `Jesus1020`

## Ejecutar backend

```bash
cd backend
mvn spring-boot:run
```

## Ejecutar frontend

```bash
cd frontend
npm install
npm run dev
```

## URLs de ejecución

- Frontend: `http://localhost:3001`
- Backend: `http://localhost:8081`

## Repositorio

- GitHub: https://github.com/JesusD-10/postulacion_ceconp

## Estado

Aplicación funcional con formulario de postulación, almacenamiento en PostgreSQL y flujo de recepción del CV en PDF.
