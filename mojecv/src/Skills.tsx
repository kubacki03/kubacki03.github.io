function Skills() {
    return (
        <div>
            <h2 className="m-2 font-mono text-2xl font-bold">Znajomosc jezykow</h2>
            <ul className="mx-2">
                {languages.map((lang) => (
                    <li key={lang.id} className="font-mono text-xl">
                        <strong>{lang.name}</strong>  {lang.avgLevel}
                    </li>
                ))}
            </ul>
        </div>
    );
}

type Language = {
    id: number;
    name: string;
    avgLevel: string;
};

const languages: Language[] = [
    {
        id: 1,
        name: "Java",
        avgLevel: "Srednio-zaawansowany",
    },
    {
        id: 2,
        name: "C#",
        avgLevel: "Srednio-zaawansowany",
    },
    {
        id: 3,
        name: "Python",
        avgLevel: "Podstawowy",
    },
    {
        id: 4,
        name: "TypeScript",
        avgLevel: "Podstawowy",
    },
    {
        id: 5,
        name: "C",
        avgLevel: "Podstawowy",
    },
    {
        id: 6,
        name: "SQL",
        avgLevel: "Srednio-zaawansowany",
    },
    {
        id: 7,
        name: "HTML",
        avgLevel: "Srednio-zaawansowany",
    },
];


export default Skills;