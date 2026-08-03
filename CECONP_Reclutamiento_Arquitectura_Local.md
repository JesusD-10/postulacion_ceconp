# Sistema de Reclutamiento CECONP

## Objetivo

Desarrollar un portal de reclutamiento profesional similar al de
Interbank para gestionar convocatorias de practicantes.

## Tecnologías

-   Backend: Spring Boot 3, Java 21, Spring Security, JPA, JWT
-   Frontend: Next.js (React) + Tailwind CSS
-   Base de datos: PostgreSQL (`p_ceconp`)
-   ORM: Hibernate
-   Documentación API: Swagger/OpenAPI

## Arquitectura

Frontend (Next.js) \<-\> API REST (Spring Boot) \<-\> PostgreSQL

## Funcionalidades

-   Landing page corporativa.
-   Registro de postulantes.
-   Carga de CV (PDF).
-   Panel de RRHH.
-   Gestión de estados de postulaciones.
-   Envío de correos automáticos.
-   Autenticación JWT.

## Base de datos

### postulante

-   id
-   nombres
-   apellidos
-   correo
-   telefono
-   universidad
-   carrera
-   ciclo
-   linkedin
-   github
-   cv_url
-   estado
-   fecha_postulacion

### usuario

-   id
-   nombre
-   correo
-   password
-   rol

## Desarrollo local

### Requisitos

-   Java 21
-   Maven
-   Node.js LTS
-   PostgreSQL
-   VS Code

### Backend

1.  Crear proyecto Spring Boot.
2.  Configurar `application.properties`.
3.  Crear entidades, repositorios, servicios y controladores.
4.  Probar API con Swagger.

### Frontend

1.  Crear proyecto Next.js.
2.  Construir landing y formulario.
3.  Consumir API REST.
4.  Panel administrativo.

## Integración

-   API REST JSON.
-   Validación de formularios.
-   Subida de archivos.

## Pruebas

-   Unitarias.
-   Integración.
-   Flujo completo de postulación.

## Despliegue a la nube

1.  Subir código a GitHub.
2.  Backend a Render.
3.  Frontend a Vercel.
4.  Base de datos PostgreSQL administrada.
5.  Configurar dominio y HTTPS.

## Futuras mejoras

-   Integración con OpenAI para análisis de CV.
-   Dashboard analítico.
-   Notificaciones.
