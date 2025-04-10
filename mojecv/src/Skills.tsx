function Skills() {
    return (
        <div>
            <h2 className="m-2 font-mono text-2xl font-bold">Znajomość języków</h2>
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
        avgLevel: "Średnio-zaawansowany",
    },
    {
        id: 2,
        name: "C#",
        avgLevel: "Średnio-zaawansowany",
    },
    {
        id: 6,
        name: "SQL",
        avgLevel: "Średnio-zaawansowany",
    },
    {
        id: 7,
        name: "HTML",
        avgLevel: "Średnio-zaawansowany",
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
   
];


export default Skills;