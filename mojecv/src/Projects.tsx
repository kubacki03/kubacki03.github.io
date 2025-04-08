import { useState } from "react";

function Projects() {
    const [selectedLang, setSelectedLang] = useState<string>("Wszystkie");

    const langs = ["Wszystkie", ...Array.from(new Set(projects.map(p => p.lang)))];
    const filteredProjects = selectedLang === "Wszystkie"
        ? projects
        : projects.filter(pro => pro.lang === selectedLang);

    return (
        <div>
            <h2 className="m-2 font-mono text-2xl font-bold">Moje projekty</h2>


            <div className="mx-2 mb-4">
                <label className="font-mono font-semibold mr-2">Filtruj po jezyku:</label>
                <select
                    className="border p-1 rounded font-mono"
                    value={selectedLang}
                    onChange={(e) => setSelectedLang(e.target.value)}
                >
                    {langs.map(lang => (
                        <option key={lang} value={lang}>{lang}</option>
                    ))}
                </select>
            </div>

            <ul className="mx-2">
                {filteredProjects.map((pro) => (
                    <li key={pro.name} className="my-1">
                        <h1 className="font-mono text-xl font-bold">{pro.name}</h1>
                        <h2 className="font-mono text-lg">{pro.description}</h2>
                        <p>
                            <button
                                className="font-mono relative text-amber-600 transition-all duration-300 hover:text-blue-500 hover:animate-pulse text-lg font-semibold"
                                onClick={() => window.open(pro.github, "_blank")}
                            >
                                Github
                            </button>

                            <div className="inline-block relative group mx-2">
                                <button
                                    className={`font-mono relative text-lg font-semibold transition-all duration-300 ${pro.demo
                                            ? "text-amber-600 hover:text-green-800 hover:animate-pulse"
                                            : "text-gray-400 cursor-not-allowed"
                                        }`}
                                    onClick={pro.demo ? () => window.open(pro.demo, "_blank") : undefined}
                                    disabled={!pro.demo}
                                >
                                    Demo
                                </button>
                                {!pro.demo && (
                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        Demo niedostepne
                                    </span>
                                )}
                            </div>

                            <hr />
                        </p>
                    </li>
                ))}

            </ul>
        </div>
    );
}


type Project = {
    name: string,
    description: string,
    github: string,
    demo: string
    lang: string

}


const projects: Project[] = [
    { lang: "Python", name: "Ksiegowanie", description: "Aplikacja webowa ulatwiajaca prowadzenie kont ksiegowych w firmie", github: "https://github.com/kubacki03/AccountingWebApp.git", demo: "https://youtu.be/rM0imLPcLf0" }, //git
    { lang: "Python", name: "Analiza danych", description: "Projekt sluzy do modelowania a w przyszlosci do analizy i prognozowania danych dotyczacych rocznej emisji CO2 w Polsce", github: "https://github.com/kubacki03/PythonProject.git", demo: "" },
    { lang: "Python", name: "Analiza wielowymiarowa danych", description: "Projekt analizy wielowymiarowej zmiennej jakosc zycia w wojewodztwach", github: "https://github.com/kubacki03/statWebApp.git", demo: "https://youtu.be/FztD9q8nv5o" },
    { lang: "C#", name: "Monte Carlo Casino", description: "Projekt kasyna online", github: "https://github.com/kubacki03/MonteCarlo-Casino.git", demo: "https://drive.google.com/file/d/10lQV5FzIoWe3IUnJnW6jPc_q2rL5V7pw/view?usp=sharing" },
    { lang: "C#", name: "Jira", description: "Jira-like projekt do zarzadzania projektami", github: "https://github.com/kubacki03/Jira.git", demo: "https://youtu.be/ZdTvzKR5b94" }, //git
    { lang: "C#", name: "Sklep Online", description: "sklep online z rozszerzonymi funkcjonalnosciami", github: "https://github.com/kubacki03/Sklep-Online-WebApp.git", demo: "https://youtu.be/gEpwFOSvnXw" }, //git
    { lang: "C#", name: "Hotel", description: "Hotel-WebApp to prosta strona internetowa umozliwiajaca logowanie oraz rezerwacje pokoi w hotelu", github: "https://github.com/kubacki03/Hotel-WebApp.git", demo: "https://youtu.be/kAdftqyzGWg" },//git
    { lang: "C#", name: "Duolingo type app", description: "Aplikacja webowa stworzona do nauki jezykow obcych, ktora wykorzystuje OpenAI API do generowania dynamicznych materialow edukacyjnych, zadan praktycznych oraz quizow.", github: "https://github.com/kubacki03/Duolingo.git", demo: "https://youtu.be/dCM9Afysi50" },
    { lang: "C#", name: "Aplikacja osobisty asystent", description: "Osobisty asystent ProjektWPF to prosta aplikacja asystenta, ktora ma pomagac w codziennych czynnosciach", github: "https://github.com/kubacki03/ProjektWPF.git", demo: "https://youtu.be/RX7q7QCLsFM" },
    { lang: "C", name: "Interpreter polecen Linux", description: "Projekt cmd, ktory wykonuje skrypty, obsluguje potoki, przekierowywanie std i obsluge sygnalow oraz wspolbieznosc", github: "https://github.com/kubacki03/Podstawowe-cmd-dla-linux.git", demo: "" },
    { lang: "Java", name: "Music Center", description: "Aplikacja do podgladu statystyk z spotify i lastfm, daje tez mozliwosc komentowania i oceniania artystow oraz polecen na podstawie gustu", github: "https://github.com/kubacki03/Spotify-Stats-SwingApp.git", demo: "https://youtu.be/neGxNlNFvbY" },
    { lang: "Java", name: "BarberShop", description: "Aplikacja do rezerwacji wizyt w barbershopie", github: "https://github.com/kubacki03/BarberWeb.git", demo: "https://youtu.be/UMDIT9wWuG4" },
    { lang: "Java", name: "Backend do to-do-list like aplikacji", description: "Aplikacja, ktora sluzy za backend do apki typu To-Do-List.", github: "https://github.com/kubacki03/ToDoListJavaBackend.git", demo: "https://youtu.be/3r_7X_QT2Ak" },
    { lang: "TypeScript", name: "Frontend do to-do-list aplikacji", description: "Aplikacja w Angularze, ktora sluzy jako frontend", github: "https://github.com/kubacki03/ToDoList.git", demo: "https://youtu.be/3r_7X_QT2Ak" },
]


export default Projects;