
    const ecopontos = {
      pilhas: [
        { nome: "Supermercado Verde", endereco: "Av. Sustentável, 123 - São Paulo" },
        { nome: "Loja EcoTech", endereco: "Rua Recicle, 456 - Campinas" }
      ],
      reciclaveis: [
        { nome: "Centro Recicla Fácil", endereco: "Rua Ambiental, 789 - Curitiba" },
        { nome: "Associação Reutilize", endereco: "Av. Natureza, 321 - Porto Alegre" }
      ],
      vidros: [
        { nome: "Ponto de Vidro Claro", endereco: "Rua Transparente, 55 - Belo Horizonte" },
        { nome: "Vidro & Vida", endereco: "Av. Cristalina, 87 - São Paulo" }
      ],
      eletronicos: [
        { nome: "Tecno Lixo Zero", endereco: "Av. Digital, 100 - Recife" },
        { nome: "Eco Eletrônicos", endereco: "Rua Conexão, 202 - Salvador" }
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
          </div>
        `;
      });
    }