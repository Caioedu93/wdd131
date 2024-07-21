document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('navigation');
    const playerGallery = document.getElementById('player-gallery');

    const players = [
        {
            name: "Rafael",
            position: "goalkeeper",
            number: 23,
            age: 35,
            nationality: "Brazil",
            goals: 0,
            assists: 0,
            games: 15,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-rafael.png" 
        },
        {
            name: "Jandrei",
            position: "Goalkeeper",
            number: 93,
            age: 31,
            nationality: "Brazil",
            goals: 0,
            assists: 0,
            games: 8,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-jandrei-ajustada.png"
        },
        {
            name: "Young",
            position: "Goalkeeper",
            number: 50,
            age: 22,
            nationality: "Brazil",
            goals: 0,
            assists: 0,
            games: 0,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-young-ajustada.png"
        },
        {
            name: "Igor Vinicius",
            position: "Right Fullback",
            number: 2,
            age: 27,
            nationality: "Brazil",
            goals: 0,
            assists: 3,
            games: 22,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-igor-v.png"
        },
        {
            name: "Rafinha",
            position: "Right Fullback",
            number: 13,
            age: 38,
            nationality: "Brazil",
            goals: 0,
            assists: 0,
            games: 3,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-rafinha.png"
        },
        {
            name: "Robert Arboleda",
            position: "Center Back",
            number: 5,
            age: 32,
            nationality: "Equator",
            goals: 1,
            assists: 0,
            games: 21,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/arboleda-v3.png"
        },
        {
            name: "Alan Franco",
            position: "Center Back",
            number: 28,
            age: 25,
            nationality: "Argentina",
            goals: 0,
            assists: 1,
            games: 16,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/alan-franco-v3.png"
        },
        {
            name: "Nahuel Ferraresi",
            position: "Center Back",
            number: 32,
            age: 25,
            nationality: "Venezuela",
            goals: 1,
            assists: 0,
            games: 6,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/ferraresi-v3.png"
        },
        {
            name: "Sabino",
            position: "Center Back",
            number: 35,
            age: 27,
            nationality: "Brazil",
            goals: 0,
            assists: 0,
            games: 1,
            imageUrl: "https://cdn.saopaulofc.net/2024/03/sabino.png"
        },
        {
            name: "Patryck",
            position: "left back",
            number: 36,
            age: 21,
            nationality: "Brazil",
            goals: 0,
            assists: 0,
            games: 6,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-patrick.png"
        },
        {
            name: "Welington",
            position: "left back",
            number: 6,
            age: 23,
            nationality: "Brazil",
            goals: 0,
            assists: 1,
            games: 19,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-welington.png"
        },
        {
            name: "Pablo Maia",
            position: "defensive midfielder",
            number: 29,
            age: 22,
            nationality: "Brazil",
            goals: 0,
            assists: 0,
            games: 6,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-pablo-maia.png"
        },
        {
            name: "Luiz Gustavo",
            position: "defensive midfielder",
            number: 16,
            age: 36,
            nationality: "Brazil",
            goals: 3,
            assists: 0,
            games: 12,
            imageUrl: "https://cdn.saopaulofc.net/2024/01/spfc-capa-l-gustavo.png"
        },
        {
            name: "Alisson",
            position: "defensive midfielder",
            number: 25,
            age: 31,
            nationality: "Brazil",
            goals: 2,
            assists: 2,
            games: 22,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/alisson-v3.png"
        },
        {
            name: "Damián Bobadilla",
            position: "defensive midfielder",
            number: 21,
            age: 23,
            nationality: "Paraguay",
            goals: 1,
            assists: 0,
            games: 9,
            imageUrl: "https://cdn.saopaulofc.net/2024/01/bobadilla-v3.png"
        },
        {
            name: "Rodriguinho",
            position: "midfielder",
            number: 18,
            age: 20,
            nationality: "Brazil",
            goals: 0,
            assists: 0,
            games: 3,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-rodriguinho.png"
        },
        {
            name: "W. Rato",
            position: "midfielder",
            number: 27,
            age: 32,
            nationality: "Brazil",
            goals: 0,
            assists: 0,
            games: 10,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-rato.png"
        },
        {
            name: "James Rodriguez",
            position: "midfielder",
            number: 55,
            age: 33,
            nationality: "Colombia",
            goals: 1,
            assists: 1,
            games: 4,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-james.png"
        },
        {
            name: "Lucas Moura",
            position: "midfielder",
            number: 7,
            age: 31,
            nationality: "Brazil",
            goals: 5,
            assists: 1,
            games: 14,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-lucas.png"
        },
        {
            name: "Giuiliano Gallopo",
            position: "midfielder",
            number: 8,
            age: 25,
            nationality: "Argentina",
            goals: 0,
            assists: 1,
            games: 14,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/galoppo-v3.png"
        },
        {
            name: "Rodrigo Nestor",
            position: "midfielder",
            number: 11,
            age: 23,
            nationality: "Brazil",
            goals: 0,
            assists: 2,
            games: 17,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-nestor.png"
        },
        {
            name: "Michel Araujo",
            position: "midfielder",
            number: 15,
            age: 27,
            nationality: "Uruguay",
            goals: 0,
            assists: 2,
            games: 16,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-m-araujo.png"
        },
        {
            name: "Ferreira",
            position: "wing",
            number: 47,
            age: 26,
            nationality: "Brazil",
            goals: 4,
            assists: 2,
            games: 17,
            imageUrl: "https://cdn.saopaulofc.net/2024/01/ferreira-v3.png"
        },
        {
            name: "Erick",
            position: "wing",
            number: 33,
            age: 26,
            nationality: "Brazil",
            goals: 2,
            assists: 1,
            games: 12,
            imageUrl: "https://cdn.saopaulofc.net/2024/01/erick-v3.png"
        },
        {
            name: "João Moreira",
            position: "Right Back",
            number: 30,
            age: 20,
            nationality: "Portugal",
            goals: 0,
            assists: 0,
            games: 2,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-moreira.png"
        },
        {
            name: "Luciano",
            position: "Forward",
            number: 10,
            age: 31,
            nationality: "Brazil",
            goals: 9,
            assists: 1,
            games: 20,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-luciano.png"
        },
        {
            name: "André Silva",
            position: "Forward",
            number: 17,
            age: 27,
            nationality: "Brazil",
            goals: 4,
            assists: 1,
            games: 18,
            imageUrl: "https://cdn.saopaulofc.net/2024/03/andre-silva-2.png"
        },
        {
            name: "Juan",
            position: "Forward",
            number: 31,
            age: 22,
            nationality: "Brazil",
            goals: 3,
            assists: 1,
            games: 11,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/spfc-capa-juan.png"
        },
        {
            name: "Jonathan Calleri",
            position: "Forward",
            number: 9,
            age: 30,
            nationality: "Argentina",
            goals: 7,
            assists: 2,
            games: 19,
            imageUrl: "https://cdn.saopaulofc.net/2023/11/calleri-v3-1.png"
        }
    ];
    menuToggle.addEventListener('click', function() {
        if (menu.style.display === 'flex' || menu.style.display === '') {
            menu.style.display = 'none';
            menuToggle.textContent = '☰';
        } else {
            menu.style.display = 'flex';
            menuToggle.textContent = 'X';
        }
    });

    document.querySelectorAll('#navigation a').forEach(link => {
        link.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            displayPlayers(filter);
            menu.style.display = 'none';
            menuToggle.textContent = '☰';
        });
    });

    const createPlayerCard = (player) => {
        const figure = document.createElement('figure');
        figure.innerHTML = `
            <img src="${player.imageUrl}" alt="${player.name}" loading="lazy">
            <figcaption>
                <h3>${player.name}</h3>
                <p>Position: ${player.position}</p>
                <p>Number: ${player.number}</p>
                <p>Age: ${player.age}</p>
                <p>Nationality: ${player.nationality}</p>
                <p>Goals: ${player.goals}</p>
                <p>Assists: ${player.assists}</p>
                <p>Games: ${player.games}</p>
            </figcaption>
        `;
        return figure;
    };

    const displayPlayers = (filter) => {
        playerGallery.innerHTML = '';
        let filteredPlayers = [...players];

        if (filter === 'goals') {
            filteredPlayers.sort((a, b) => b.goals - a.goals);
        } else if (filter === 'assists') {
            filteredPlayers.sort((a, b) => b.assists - a.assists);
        } else if (filter === 'games') {
            filteredPlayers.sort((a, b) => b.games - a.games);
        }

        filteredPlayers.forEach(player => {
            const playerCard = createPlayerCard(player);
            playerGallery.appendChild(playerCard);
        });
    };

    displayPlayers('all');
});
