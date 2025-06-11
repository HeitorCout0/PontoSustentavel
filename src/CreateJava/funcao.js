const ecopontos = {
  pilhas: [
    { nome: "Secretaria de Meio Ambiente", endereco: "Av. Cerro Azul, 544", telefone: "3293-8771" },
    { nome: "Atacadão Maringá", endereco: "Rua Fernão Dias, 300", telefone: "3218-8424" }
  ],
  reciclaveis: [

    { nome: "CooperPalmeiras", endereco: "Rodovia PR 317, 200", telefone: "99946-5778" },
    { nome: "CooperCicla", endereco: "Avenida Guairá, 184", telefone: "99873-6425" },
    { nome: "CooperNorte", endereco: "Rodovia PR 317, 200", telefone: "99702-4263" },
    { nome: "CooperAmbiental", endereco: "Rua Izaura Gambá Vitorino, 345", telefone: "99951-0772" },
    { nome: "CooperMaringa", endereco: "Rodovia PR 317, 200", telefone: "99888-2518" },
  ],
  vidros: [
    { nome: "Paróquia Nossa Senhora de Guadalupe", endereco: "Av. Carlos Borges, 1.999", telefone: "3259-2020" },
    { nome: "Sub. Prefeitura de Floriano", endereco: "Rua Pion. Octavio Franco, 1.135", telefone: "3260-1101" },
    { nome: "Coopervidros", endereco: "Estrada São Luiz, 2119, Gleba pinguim", telefone: "98415-3410" },
    { nome: "Tiro de Guerra de Maringá", endereco: "Av. Mandacaru, 730 ", telefone: "3901-1817" },
    { nome: "Paróquia Menino Jesus de Praga", endereco: "Rua Monsenhor Kimura, 31", telefone: "3227-2983" }
  ],
  eletronicos: [
    { nome: "Paço Municipal", endereco: "Av. XV de Novembro, 701", telefone: "3221-1200" },
    { nome: "Supermercados Cidade Canção ", endereco: "Av. Brasil, 7225", telefone: "3225-5000" },
    { nome: "SESI", endereco: "Rua Antonio Carniel, 499", telefone: "3218-5650" },
    { nome: "Tiro de Guerra de Maringá", endereco: "Av. Mandacaru, 730", telefone: "3901-1817" },
    { nome: "Faculdades Maringá 3027-1103", endereco: "Av. Prudente de Morais, 815", telefone: "3027-1103" }
  ]
};

function mostrarEcopontos(tipo) {
  const container = document.getElementById('conteudo');
  const lista = ecopontos[tipo];

  if (!lista) return;

  container.innerHTML = `<h2>Ecopontos de ${tipo.replace(/^\w/, c => c.toUpperCase())}</h2>`;
  lista.forEach(ponto => {
    container.innerHTML += `
      <div class="ecoponto">
        <h3>${ponto.nome}</h3>
        <p>📍 ${ponto.endereco}</p>
        <p>📞 ${ponto.telefone}</p>
      </div>
    `;
  });
}
