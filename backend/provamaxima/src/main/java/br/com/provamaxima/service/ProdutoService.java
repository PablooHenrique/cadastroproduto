package br.com.provamaxima.service;

import br.com.provamaxima.domain.Produto;
import br.com.provamaxima.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

	private final ProdutoRepository produtoRepository;

	@Autowired
	public ProdutoService(ProdutoRepository produtoRepository) {
		this.produtoRepository = produtoRepository;
	}

	public List<Produto> fetch() {
		return produtoRepository.findAll();
	}

	public Produto save(final Produto produto) {
		return produtoRepository.save(produto);
	}

	public void remove(final Long id) {
		final Optional<Produto> optional = produtoRepository.findById(id);
		optional.ifPresent(produtoRepository::delete);
	}

	public Produto fetchById(Long id) {
		final Optional<Produto> optional = produtoRepository.findById(id);
		return optional.orElse(null);
	}
}
