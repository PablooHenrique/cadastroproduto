package br.com.provamaxima.resource;

import br.com.provamaxima.domain.Produto;
import br.com.provamaxima.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
public class ProdutoResourceImpl implements ProdutoResource {

	private final ProdutoService produtoService;

	@Autowired
	public ProdutoResourceImpl(ProdutoService produtoService) {
		this.produtoService = produtoService;
	}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Produto>> fetch() {
		final List<Produto> produtos = produtoService.fetch();
		return new ResponseEntity<>(produtos, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Produto> save(@RequestBody final Produto produto, final UriComponentsBuilder ucBuilder) {
		final Produto saved = produtoService.save(produto);
		final HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/produtos/{id}").buildAndExpand(saved.getId()).toUri());
		return new ResponseEntity<>(headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable("id") final Long id) {
		produtoService.remove(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
