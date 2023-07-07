import React from 'react';

function Skills() {
    const listaCompetenze = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"];

    return (
        <section>
            <h2>Competenze tecniche</h2>
            <ul>
                {listaCompetenze.map((competenza, index) => (
                    <li key={index}>{competenza}</li>
                ))}
            </ul>
        </section>
    );
}

export default Skills