package com.ceconp.reclutamiento.controller;

import com.ceconp.reclutamiento.model.Postulante;
import com.ceconp.reclutamiento.service.PostulanteService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PostulanteController {

    private final PostulanteService service;

    public PostulanteController(PostulanteService service) {
        this.service = service;
    }

    @PostMapping("/postulantes")
    public ResponseEntity<Postulante> crear(@Valid @RequestBody Postulante postulante) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.crear(postulante));
    }

    @GetMapping("/postulantes")
    public List<Postulante> listar() {
        return service.listar();
    }

    @PatchMapping("/postulantes/{id}/estado")
    public ResponseEntity<Postulante> actualizarEstado(@PathVariable Long id, @RequestParam String estado) {
        return ResponseEntity.ok(service.actualizarEstado(id, estado));
    }
}
