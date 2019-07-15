package br.com.provamaxima.resource;

import br.com.provamaxima.domain.Produto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

public interface ProdutoResource {

	ResponseEntity<List<Produto>> fetch();
	ResponseEntity<Produto> save(final Produto produto, final UriComponentsBuilder ucBuilder);
	ResponseEntity<Void> delete(final Long id);

}
