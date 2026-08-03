package com.ceconp.reclutamiento.data;

import com.ceconp.reclutamiento.model.Postulante;
import com.ceconp.reclutamiento.repository.PostulanteRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final PostulanteRepository repository;

    public DataSeeder(PostulanteRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        Postulante p1 = new Postulante();
        p1.setNombres("Ana");
        p1.setApellidos("Torres");
        p1.setCorreo("ana.torres@ceconp.edu");
        p1.setTelefono("999888777");
        p1.setUniversidad("UPC");
        p1.setCarrera("Ingeniería de Sistemas");
        p1.setCiclo("2026-I");
        p1.setLinkedin("https://linkedin.com/in/ana");
        p1.setMotivacion("Me interesa aportar en automatización documental y desarrollo tecnológico institucional.");
        p1.setExperiencia("He participado en proyectos de análisis de datos y automatización con Python.");
        p1.setDisponibilidad("Disponible de lunes a viernes, de 9:00 a.m. a 5:00 p.m.");
        p1.setCvUrl("https://example.com/cv-ana.pdf");
        p1.setEstado("PENDIENTE");

        Postulante p2 = new Postulante();
        p2.setNombres("Luis");
        p2.setApellidos("Ramirez");
        p2.setCorreo("luis.ramirez@ceconp.edu");
        p2.setTelefono("988776655");
        p2.setUniversidad("UNMSM");
        p2.setCarrera("Administración");
        p2.setCiclo("2026-I");
        p2.setLinkedin("https://linkedin.com/in/luis");
        p2.setMotivacion("Quiero desarrollar procesos institucionales con enfoque tecnológico y analítico.");
        p2.setExperiencia("He apoyado en procesos documentarios y herramientas de reporte.");
        p2.setDisponibilidad("Disponible en horario parcial y con actividades de coordinación.");
        p2.setCvUrl("https://example.com/cv-luis.pdf");
        p2.setEstado("REVISAR");

        repository.save(p1);
        repository.save(p2);
    }
}
