function buscar() {
    var entrada = document.getElementById("entrada").value.toLowerCase();

    var url = "http://pokeapi.co/api/v2/pokemon/" + entrada + "";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var tela = document.getElementById('tela');
            
            tela.innerHTML =
                '<h2>' + data.name + '</h2>' +
                '<img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/' + data.id + '.gif" alt="' + data.name + ' front">' +
                '<img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/' + data.id + '.gif" alt="' + data.name + ' back">' +
                '<p> Id: ' + data.id + '</p>' +
                '<p> Tipo: ' + data.types.map(type => type.type.name).join(', ') + '</p>' +
                '<p> Habilidades: ' + data.abilities.map(ability => ability.ability.name).join(', ') + '</p>';

            document.getElementById("entrada").value = '';
        })
        .catch(erro => {
            var tela = document.getElementById('tela');
            tela.innerHTML = '<p>Pokémon não encontrado, erro: ' + erro.message + '</p>';
        });
}
