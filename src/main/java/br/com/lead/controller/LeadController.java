package br.com.lead.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.lead.model.Lead;
import br.com.lead.service.LeadService;


@RestController
@RequestMapping("/lead")
@Validated
public class LeadController {

	@Autowired
	private LeadService leadService;
	
	@GetMapping
	public List<Lead> todos(Lead filtro) {
		return leadService.filtraPor(filtro);
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Lead salvar(@RequestBody @Valid Lead lead) {
		return leadService.salvar(lead);
	}
	
	@PutMapping("/{id}")
	public Lead alterar(@PathVariable Integer id, @RequestBody Lead lead) {
		return leadService.alterar(id, lead);
	}
	
	@DeleteMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void excluir(@PathVariable Integer id) {
		leadService.excluir(id);
	}
	
}


