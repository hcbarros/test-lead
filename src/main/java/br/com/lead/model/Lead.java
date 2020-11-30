package br.com.lead.model;

import java.time.LocalDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class Lead {

	@Id
	@GeneratedValue
	private Integer id;
	
	@Column(name = "nome", length = 100, nullable = false)
	@NotBlank(message = "{lead.nome.obrigatorio}")
	private String nome;
		
	@Column(name = "email", length = 100, nullable = false)
	@NotBlank(message = "{lead.email.obrigatorio}")
	private String email;
	
	@Column(name = "telefone", length = 15, nullable = false)
	@NotBlank(message = "{lead.telefone.obrigatorio}")
	private String telefone;
	
	@Column(columnDefinition = "timestamp default current_timestamp", insertable = false, updatable = false)
	private LocalDateTime criadoEm;
	
	private LocalDateTime atualizadoEm;
	
	
	public Lead() {
		

	}
	
	public Lead(String nome, String email, String telefone) {
		super();
		this.nome = nome;
		this.email = email;
		this.telefone = telefone ;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	
	public LocalDateTime getCriadoEm() {
		return criadoEm;
	}

	public void setCriadoEm(LocalDateTime criadoEm) {
		this.criadoEm = criadoEm;
	}

	public LocalDateTime getAtualizadoEm() {
		return atualizadoEm;
	}

	public void setAtualizadoEm(LocalDateTime atualizadoEm) {
		this.atualizadoEm = atualizadoEm;
	}	
	
}
