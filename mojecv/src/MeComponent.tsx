

function MeComponent() {
    return (
        MeElement
    );
}


const Me = {
    name: "Jakub",
    surname: "Dąbrowski",
    phone: "727 791 153",
    languages: [{ name: "Angielski", level: "B2" }, {name:"Polski",level:"Ojczysty"}],
    email: "jakubdabrowski2003@wp.pl",
    city: "Białystok",
    age: 22,
    school: "Politechnika Białostocka Wydział Informatyki",
    course: "Informatyka i Ekonometria",
    year: 3,
    github:"https://github.com/kubacki03",
    description: "Jestem studentem Informatyki i Ekonometrii na 3 roku, moją pasją jest tworzenie aplikacji. Szczególnie dobrze czuję się w środowiskach backendowych, gdzie mogę projektować i budować logiczne fundamenty aplikacji. Najlepiej odnajduję się w technologiach webowych takich jak Asp.Net Core i Java Spring Web. Lubię uczyć się nowych technologii, budować projekty od zera i rozwiązywać realne problemy. Mimo, że wewnątrz jestem backendowcem to nie boję się tworzyć frontendu, ponieważ wiem, że jest on bardzo ważny w ocenie aplikacji przez użytkowników końcowych. W przyszłości chciałbym rozwijać sie jako backend developer lub fullstack. Dodatkowo interesuję się też modelowaniem i analizą danych. W wolnych chwilach uwielbiam słuchać winyli z lat 70 i jeździć na rowerze."
}


const MeElement =
    <>
        <h1 className="font-bold text-4xl font-mono m-2 ">{Me.name} {Me.surname}</h1>
        <h2 className="font-mono text-3xl mx-2">Wiek: {Me.age} lata</h2>
        <h2 className="font-mono text-3xl mx-2">&#128205; {Me.city}</h2>
        <h2 className="font-mono text-3xl mx-2">&#128222; {Me.phone} </h2>
        <h2 className="font-mono text-xl sm:text-2xl md:text-3xl mx-2">
            📧 {Me.email}
        </h2>


        

        <div className="my-3">
            <h2 className="font-mono text-2xl mx-2 ">&#127979; Wykształcenie</h2>
            <p className="font-mono text-xl mx-2">{Me.school}</p>
            <p className="font-mono text-xl mx-2">{Me.course}, {Me.year} rok</p>
        </div>

        

        <div className="m-3">
       
            
    </div>
        <h3 className="font-mono text-2xl mx-2">&#128102; O mnie</h3>
        <h3 className="font-mono text-xl mx-2">{Me.description}</h3>

        <div className="mt-2">
            <h1 className="font-mono text-2xl mx-2">💻Github</h1>
            <p className="font-mono text-xl mx-2">
                <a href={Me.github} target="_blank" rel="noopener noreferrer">
                    Tu znajdziesz moje wszystkie projekty https://github.com/kubacki03
                </a>
            </p>

        </div>
        <div className="mt-3 mx-2">
            <h3 className="font-mono text-2xl  ">Języki</h3>
            <ul>
                {Me.languages.map((lang) => (
                    <li key={lang.name} className="font-mono text-xl">
                        {lang.name}: {lang.level}
                    </li>
                ))}
            </ul>
        </div>

        

        <div className="m-2">
        <h3 className="font-mono text-2xl ">Certyfikaty:</h3>
        <p className="font-mono text-xl ">Google Cloud Data Analytics Certificate</p>
        <button
            className="font-mono relative text-amber-600 transition-all duration-300 hover:text-blue-500 hover:animate-pulse text-lg font-semibold"
            onClick={() => window.open("https://www.credly.com/users/jakub-dabrowski.a6c1e57c", "_blank")}
        >
            Zobacz moje credly
        </button>
    </div>

        <h3 className="font-mono text-2xl mx-2 mt-3" > &#128196; Pobierz moje CV</h3>
        <div className="mx-2 my-3">
            <a
                href="/JakubDabrowskiCV.pdf"
                download
                className="bg-amber-500 hover:bg-amber-600 text-white font-mono px-4 py-2 rounded-md shadow-md transition duration-300"
            >
                 Pobierz CV
            </a>

        </div>
    </>


export default MeComponent;