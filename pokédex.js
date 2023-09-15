const container = document.getElementById('container');
const cardElements = [];

fetch('pokedex.json').then((response)=>{
    if(!response.ok){
        throw new Error(`Error during fetching: ${response.status}`);
    }
    return response.json();
}).then((pokedex)=>{
    for(let i=0; i<pokedex.pokemon.length; i++){
        let card = document.createElement('div');
        card.classList.add(`card${i+1}`, 'card');
        cardElements.push(card);
        let view1 =  document.createElement('div');
        view1.setAttribute('class', 'view1')
        let foto = document.createElement('img');
        foto.setAttribute('src', pokedex.pokemon[i].img);
        view1.appendChild(foto);
        let id = document.createElement('span');
        id.classList.add('id');
        id.innerHTML = pokedex.pokemon[i].id < 10 ? `#00${pokedex.pokemon[i].id}` : `#0${pokedex.pokemon[i].id}`; 
        switch(pokedex.pokemon[i].type[0]){
            case 'Grass':
                card.style.backgroundColor = '#D8F7DD';
                id.style.backgroundColor = '#C0DDC3';
                break;
            case 'Poison':
                card.style.backgroundColor = '#89C79F';
                id.style.backgroundColor = '#7BB68E';
                break;
            case 'Water':
                card.style.backgroundColor = '#D8EFFD';
                id.style.backgroundColor = '#C1D3E0';
                break;
            case 'Bug':
                card.style.backgroundColor = '#FCCF9B';
                id.style.backgroundColor = '#E5B98B';
                break;
            case 'Fire':
                card.style.backgroundColor = '#FFDFDC';
                id.style.backgroundColor = '#E6C8C7';
                break;
            case 'Electric':
                card.style.backgroundColor = '#FBE8B0';
                id.style.backgroundColor = '#D7C99E';
                break;
            case 'Ground':
                card.style.backgroundColor = '#E9D0BD';
                id.style.backgroundColor = '#C1A897';
                break;
            case 'Normal':
                card.style.backgroundColor = '#F4F3F4';
                id.style.backgroundColor = '#D5D3D5';
                break;
            case 'Flying':
                card.style.backgroundColor = '#F4F3F4';
                id.style.backgroundColor = '#D5D3D5';
                break;
            }
        view1.appendChild(id);

        let name = document.createElement('span');
        name.innerHTML = pokedex.pokemon[i].name;
        name.classList.add('name');
        view1.appendChild(name);

        let type = document.createElement('span');
        type.innerHTML = `Type: ${pokedex.pokemon[i].type[0]}`;
        type.classList.add('type');
        view1.appendChild(type);

        
        // VIEW2
        let view2 = document.createElement('div');
        view2.setAttribute('class', 'view2');

        let contname2 = document.createElement('div');
        contname2.setAttribute('class', 'contname2')
        let name2 = name.cloneNode(true);
        contname2.appendChild(name2);
        view2.appendChild(contname2);
        
        let listView2 = document.createElement('ul');
        listView2.setAttribute('class', 'list')
        let height = document.createElement('li');
        height.innerHTML = `<strong>Height</strong>: ${pokedex.pokemon[i].height}`;
        listView2.appendChild(height);
        let weight = document.createElement('li');
        weight.innerHTML = `<strong>Weight</strong>: ${pokedex.pokemon[i].weight}`;
        listView2.appendChild(weight);
        let weaknesses = document.createElement('li');
        weaknesses.innerHTML = `<strong>Weaknesses</strong>: ${pokedex.pokemon[i].weaknesses.join(', ')}`;
        listView2.appendChild(weaknesses);
        
        view2.appendChild(listView2)
        card.appendChild(view1);
        card.appendChild(view2);
        container.appendChild(card);
    }
})