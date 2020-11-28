package br.com.lead.service;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.stereotype.Service;

import br.com.lead.model.Lead;
import br.com.lead.repository.LeadRepositorio;


@Service
public class LeadService {

	@Autowired
	private LeadRepositorio repositorio;
	
	public Lead salvar(Lead lead) {
		return repositorio.save(lead);
	}
	
	public Lead alterar(Integer id, Lead lead) {
		Lead leadBanco = getLead(id);
		leadBanco.setNome(lead.getNome());
		leadBanco.setEmail(lead.getEmail());
		leadBanco.setTelefone(lead.getTelefone());
		leadBanco.setAtualizadoEm(LocalDateTime.now());
		
		return salvar(leadBanco);
	}
		
	public List<Lead> filtraPor(Lead filtro) {
		ExampleMatcher matcher = ExampleMatcher
				.matching()
				.withIgnoreCase()
				.withStringMatcher(StringMatcher.CONTAINING);
		
		Example<Lead> exemplo = Example.of(filtro, matcher);
		
		return repositorio.findAll(exemplo);
	}
	
	public Lead getLead(Integer id) {
		return repositorio
				.findById(id)
				.orElseThrow(() -> new EntityNotFoundException());
	}
	
	public void excluir(Integer id) {
		repositorio.deleteById(id);
	}
	
}
