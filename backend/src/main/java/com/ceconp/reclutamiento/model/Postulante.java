package com.ceconp.reclutamiento.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.time.LocalDateTime;

@Entity
@Table(name = "postulante")
public class Postulante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 80)
    private String nombres;

    @NotBlank
    @Size(max = 80)
    private String apellidos;

    @NotBlank
    @Email
    @Size(max = 120)
    private String correo;

    @Size(max = 25)
    private String telefono;

    @Size(max = 120)
    private String universidad;

    @Size(max = 120)
    private String carrera;

    @Size(max = 40)
    private String ciclo;

    @Size(max = 200)
    private String linkedin;

    @Column(columnDefinition = "TEXT")
    private String motivacion;

    @Column(columnDefinition = "TEXT")
    private String experiencia;

    @Column(columnDefinition = "TEXT")
    private String disponibilidad;

    @Size(max = 255)
    private String cvUrl;

    @Size(max = 30)
    private String estado = "PENDIENTE";

    private LocalDateTime fechaPostulacion = LocalDateTime.now();

    public Postulante() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombres() { return nombres; }
    public void setNombres(String nombres) { this.nombres = nombres; }
    public String getApellidos() { return apellidos; }
    public void setApellidos(String apellidos) { this.apellidos = apellidos; }
    public String getCorreo() { return correo; }
    public void setCorreo(String correo) { this.correo = correo; }
    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }
    public String getUniversidad() { return universidad; }
    public void setUniversidad(String universidad) { this.universidad = universidad; }
    public String getCarrera() { return carrera; }
    public void setCarrera(String carrera) { this.carrera = carrera; }
    public String getCiclo() { return ciclo; }
    public void setCiclo(String ciclo) { this.ciclo = ciclo; }
    public String getLinkedin() { return linkedin; }
    public void setLinkedin(String linkedin) { this.linkedin = linkedin; }
    public String getMotivacion() { return motivacion; }
    public void setMotivacion(String motivacion) { this.motivacion = motivacion; }
    public String getExperiencia() { return experiencia; }
    public void setExperiencia(String experiencia) { this.experiencia = experiencia; }
    public String getDisponibilidad() { return disponibilidad; }
    public void setDisponibilidad(String disponibilidad) { this.disponibilidad = disponibilidad; }
    public String getCvUrl() { return cvUrl; }
    public void setCvUrl(String cvUrl) { this.cvUrl = cvUrl; }
    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
    public LocalDateTime getFechaPostulacion() { return fechaPostulacion; }
    public void setFechaPostulacion(LocalDateTime fechaPostulacion) { this.fechaPostulacion = fechaPostulacion; }
}
