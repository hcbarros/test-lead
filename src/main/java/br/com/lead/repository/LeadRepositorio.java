package br.com.lead.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.lead.model.Lead;

public interface LeadRepositorio extends JpaRepository<Lead, Integer> {

}
