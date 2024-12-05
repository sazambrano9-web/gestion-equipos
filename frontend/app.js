fetch('http://localhost:5000/equipos')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('equipos');
        data.forEach(equipo => {
            const equipoElement = document.createElement('div');
            equipoElement.innerHTML = `
                <h3>${equipo.nombre_equipo}</h3>
                <p>${equipo.especificaciones}</p>
            `;
            container.appendChild(equipoElement);
        });
    })
    .catch(err => console.error(err));
