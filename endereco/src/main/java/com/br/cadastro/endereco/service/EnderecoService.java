package com.br.cadastro.endereco.service;

import com.br.cadastro.endereco.feign.EnderecoFeign;
import com.br.cadastro.endereco.model.dto.EnderecoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class EnderecoService {

    private final EnderecoFeign enderecoFeign;

    public EnderecoResponse executa(String cep) {
        return enderecoFeign.buscaEnderecoCep(cep);
    }
}
