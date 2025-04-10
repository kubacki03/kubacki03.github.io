import React from "react";
import { useState } from "react";

function Technologies() {
    const [selectedLanguage, setSelectedLanguage] = useState("Wszystkie");
    const [selectedLevel, setSelectedLevel] = useState("Wszystkie");

    const uniqueLanguages = ["Wszystkie", ...new Set(technologies.map(t => t.language))];
    const uniqueLevels = ["Wszystkie", ...new Set(technologies.map(t => t.level))];

    const filteredTechnologies = technologies.filter((tech) => {
        return (
            (selectedLanguage === "Wszystkie" || tech.language === selectedLanguage) &&
            (selectedLevel === "Wszystkie" || tech.level === selectedLevel)
        );
    });

    return (
        <div>
            <h2 className="m-2 font-mono text-2xl font-bold">Znajomość technologii</h2>

            <div className="flex gap-4 m-2">
                <div>
                    <label className="block text-sm">Język:</label>
                    <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="border rounded p-1"
                    >
                        {uniqueLanguages.map((lang) => (
                            <option key={lang}>{lang}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm">Poziom:</label>
                    <select
                        value={selectedLevel}
                        onChange={(e) => setSelectedLevel(e.target.value)}
                        className="border rounded p-1"
                    >
                        {uniqueLevels.map((lvl) => (
                            <option key={lvl}>{lvl}</option>
                        ))}
                    </select>
                </div>
            </div>

            <ul className="mx-2">
                {filteredTechnologies.map((tech) => (
                    <li key={tech.id} className="font-mono text-xl">
                        <strong>{tech.name}</strong> {tech.level}
                    </li>
                ))}
            </ul>
        </div>
    );
}


type Technology = {
    id: number,
    name: string,
    level: string,
    language: string,
    projects: string[],

}

const technologies: Technology[] = [
    {
        id: 1,
        name: "Spring Web",
        level: "Średnio-zaawansowany",
        language: "Java",
        projects: []

    },
    {
        id: 13,
        name: "Asp.NET Core",
        language: "C#",
        level: "Średnio-zaawansowany",
        projects: []
    },

    {
        id: 2,
        name: "Hibernate/JPA",
        level: "Średnio-zaawansowany",
        language: "Java",
        projects: []


    },
    {
        id: 6,
        name: "Entity Framework",
        level: "Średnio-zaawansowany",
        language: "C#",
        projects: []
    },
    {
        id: 7,
        name: "Razor",
        level: "Średnio-zaawansowany",
        language: "C#",
        projects: []

    },
    {
        id: 3,
        name: "Spring Security",
        level: "Podstawowy",
        language: "Java",
        projects: []
    },
    {
        id: 4,
        name: "Thymealeaf",
        level: "Podstawowy",
        language: "Java",
        projects: []
    },
    {
        id: 5,
        name: "WPF",
        level: "Podstawowy",
        language: "C#",
        projects: []
    },

    {
        id: 9,
        name: "Swing",
        language: "Java",
        level: "Podstawowy",
        projects: []
    },
    {
        id: 10,
        name: "TailwindCSS",
        language: "CSS",
        level: "Podstawowy",
        projects: []
    },
    {
        id: 11,
        name: "Angular",
        language: "TypeScript",
        level: "Podstawowy",
        projects: []
    }, 
    {
        id: 13,
        name: "Google Cloud Platform",
        language: "Chmura",
        level: "Podstawowy",
        projects: []
    },

    {
        id: 8,
        name: "Flask",
        language: "Python",
        level: "Bardzo podstawowy",
        projects: []
    },
   
    {
        id: 12,
        name: "React",
        language: "TypeScript",
        level: "Bardzo podstawowy",
        projects: []
    },
   


]


export default Technologies;