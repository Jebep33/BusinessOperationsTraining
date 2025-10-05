fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(res => res.json()) //good as await
    .then(data => {
        console.log(data.name);
        console.log(data.abilities[0].ability.name);
        console.log(data.sprites.front_default);

        let image = document.createElement("img");
        image.src = data.sprites.front_default;
        document.body.appendChild(image);
    })

