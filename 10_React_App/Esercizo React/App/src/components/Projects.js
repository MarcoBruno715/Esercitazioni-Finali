import React from 'react';

function Projects() {
    const listaProgetti = [
        {
            nome: "Progetto 1",
            descrizione: "Questo � un progetto di esempio."
        },
        {
            nome: "Progetto 2",
            descrizione: "Questo � un altro progetto di esempio."
        }
    ];

    return (
        <section>
            <h2>I miei progetti</h2>
            <ul>
                {listaProgetti.map((progetto, index) => (
                    <li key={index}>
                        <h3>{progetto.nome}</h3>
                        <p>{progetto.descrizione}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;