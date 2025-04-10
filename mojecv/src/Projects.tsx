import React from "react";
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
                <label className="font-mono font-semibold mr-2">Filtruj po języku:</label>
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
                    <li key={pro.name} className="my-4">
                        <h1 className="font-mono text-xl font-bold">{pro.name}</h1>
                        <h2 className="font-mono text-lg">{pro.description}</h2>

                 
                        <div className="my-2 flex flex-wrap gap-2">
                            {pro.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-amber-100 text-amber-800 font-mono text-sm px-2 py-1 rounded-full"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

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
                                        Demo niedostępne
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
    lang: string,
    tags: string[]

}


const projects: Project[] = [
    { lang: "Python", name: "Rachunkowość", description: "Aplikacja webowa ułatwiająca prowadzenie kont księgowych w firmie", github: "https://github.com/kubacki03/AccountingWebApp.git", demo: "https://youtu.be/rM0imLPcLf0", tags:["Flask"] }, //git
    { lang: "Python", name: "Analiza danych", description: "Projekt służy do modelowania a w przyszłości do analizy i prognozowania danych dotyczących rocznej emisji CO2 w Polsce", github: "https://github.com/kubacki03/PythonProject.git", demo: "", tags:["DataScience", "Ekonometria", "Python"] },
    { lang: "Python", name: "Analiza wielowymiarowa danych", description: "Projekt analizy wielowymiarowej danych", github: "https://github.com/kubacki03/statWebApp.git", demo: "https://youtu.be/FztD9q8nv5o", tags:["DataScience", "Python", "Flask"] },
    { lang: "C#", name: "Monte Carlo Casino", description: "Projekt kasyna online", github: "https://github.com/kubacki03/MonteCarlo-Casino.git", demo: "https://drive.google.com/file/d/10lQV5FzIoWe3IUnJnW6jPc_q2rL5V7pw/view?usp=sharing", tags: [".Net", "EntityFramework", "Identity", "Stripe"] },
    { lang: "C#", name: "Jira", description: "Jira-like aplikacja do zarządzania projektami", github: "https://github.com/kubacki03/Jira.git", demo: "https://youtu.be/ZdTvzKR5b94", tags:[".Net", "EntityFramework","TailwindCSS"] }, //git
    { lang: "C#", name: "Sklep Online", description: "Sklep online z rozszerzonymi funkcjonalnościami", github: "https://github.com/kubacki03/Sklep-Online-WebApp.git", demo: "https://youtu.be/gEpwFOSvnXw", tags: [".Net", "EntityFramework"] }, //git
    { lang: "C#", name: "Hotel", description: "Hotel-WebApp to prosta strona internetowa umożliwiająca logowanie oraz rezerwacje pokoi w hotelu", github: "https://github.com/kubacki03/Hotel-WebApp.git", demo: "https://youtu.be/kAdftqyzGWg", tags:[".Net","EntityFramework","Identity","Stripe","TailwindCSS"] },//git
    { lang: "C#", name: "Duolingo-like app", description: "Aplikacja webowa stworzona do nauki języków obcych, która wykorzystuje OpenAI API do generowania dynamicznych materiałów edukacyjnych, zadań praktycznych oraz quizów.", github: "https://github.com/kubacki03/Duolingo.git", demo: "https://youtu.be/dCM9Afysi50",tags:[".Net","EntityFramework","Identity","OpenAi","TailwindCSS"] },
    { lang: "C#", name: "Aplikacja osobisty asystent", description: "Osobisty asystent ProjektWPF to prosta aplikacja asystenta, która ma pomagać w codziennych czynnościach", github: "https://github.com/kubacki03/ProjektWPF.git", demo: "https://youtu.be/RX7q7QCLsFM", tags: ["WPF", "EntityFramework", "OpenAi"] },
    { lang: "C", name: "Interpreter poleceń Linux", description: "Projekt cmd, który wykonuje skrypty, obsługuje potoki, przekierowywanie std i obsługę sygnałów oraz wspołbieżność", github: "https://github.com/kubacki03/Podstawowe-cmd-dla-linux.git", demo: "", tags: ["C", "Linux"] },
    { lang: "Java", name: "Music Center", description: "Aplikacja do podglądu statystyk z spotify i lastfm, daje też możliwość komentowania i oceniania artystów oraz poleceń na podstawie gustu", github: "https://github.com/kubacki03/Spotify-Stats-SwingApp.git", demo: "https://youtu.be/neGxNlNFvbY", tags:["Java Swing"] },
    { lang: "Java", name: "BarberShop", description: "Aplikacja do rezerwacji wizyt w barbershopie", github: "https://github.com/kubacki03/BarberWeb.git", demo: "https://youtu.be/UMDIT9wWuG4", tags: ["Spring Web", "Spring Security","TailwindCSS" ] },
    { lang: "Java", name: "Backend do to-do-list like aplikacji", description: "Aplikacja, która służy za backend do aplikacji typu To-Do-List.", github: "https://github.com/kubacki03/ToDoListJavaBackend.git", demo: "https://youtu.be/3r_7X_QT2Ak",tags:["Spring Security","Spring Web","Jwt","RestApi"] },
    { lang: "TypeScript", name: "Frontend do to-do-list like aplikacji", description: "Aplikacja w Angularze, która służy jako frontend", github: "https://github.com/kubacki03/ToDoList.git", demo: "https://youtu.be/3r_7X_QT2Ak",tags:["Angular","TailwindCSS"] },
    { lang: "C#", name: "RecipeBook .net + react", description: "Interaktywana aplikacja do tworzenia i udostępniania przepisow.", github: "https://github.com/kubacki03/CookBook.git", demo:"",tags:[".Net","React","RestApi","Jwt","EntityFramework"] }

]


export default Projects;