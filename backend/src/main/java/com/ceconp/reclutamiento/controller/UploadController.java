package com.ceconp.reclutamiento.controller;

import com.ceconp.reclutamiento.model.Postulante;
import com.ceconp.reclutamiento.repository.PostulanteRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UploadController {

    private final PostulanteRepository repository;

    public UploadController(PostulanteRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/postulantes/upload")
    public ResponseEntity<Postulante> upload(
            @RequestParam("nombres") String nombres,
            @RequestParam("apellidos") String apellidos,
            @RequestParam("correo") String correo,
            @RequestParam("telefono") String telefono,
            @RequestParam("universidad") String universidad,
            @RequestParam("carrera") String carrera,
            @RequestParam("ciclo") String ciclo,
            @RequestParam("linkedin") String linkedin,
            @RequestParam("motivacion") String motivacion,
            @RequestParam("experiencia") String experiencia,
            @RequestParam("disponibilidad") String disponibilidad,
            @RequestParam("cv") MultipartFile cv) throws IOException {

        Postulante postulante = new Postulante();
        postulante.setNombres(nombres);
        postulante.setApellidos(apellidos);
        postulante.setCorreo(correo);
        postulante.setTelefono(telefono);
        postulante.setUniversidad(universidad);
        postulante.setCarrera(carrera);
        postulante.setCiclo(ciclo);
        postulante.setLinkedin(linkedin);
        postulante.setMotivacion(motivacion);
        postulante.setExperiencia(experiencia);
        postulante.setDisponibilidad(disponibilidad);
        postulante.setCvUrl("data:application/pdf;base64," + Base64.getEncoder().encodeToString(cv.getBytes()));
        postulante.setEstado("PENDIENTE");

        return ResponseEntity.ok(repository.save(postulante));
    }
}
