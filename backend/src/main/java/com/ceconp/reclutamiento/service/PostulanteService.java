package com.ceconp.reclutamiento.service;

import com.ceconp.reclutamiento.model.Postulante;
import com.ceconp.reclutamiento.repository.PostulanteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostulanteService {

    private final PostulanteRepository repository;

    public PostulanteService(PostulanteRepository repository) {
        this.repository = repository;
    }

    public Postulante crear(Postulante postulante) {
        return repository.save(postulante);
    }

    public List<Postulante> listar() {
        return repository.findAll();
    }

    public Postulante actualizarEstado(Long id, String estado) {
        Postulante postulante = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Postulante no encontrado"));
        postulante.setEstado(estado);
        return repository.save(postulante);
    }
}
