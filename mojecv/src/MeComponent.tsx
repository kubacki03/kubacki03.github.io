function MeComponent() {
    return (
        MeElement
    );
}


const Me = {
    name: "Jakub",
    surname: "Dabrowski",
    phone: "727 791 153",
    email: "polichronowe@gmail.com",
    city: "Bialystok",
    age: 22,
    school: "Politechnika Bialostocka Wydzial Informatyki",
    course: "Informatyka i Ekonometria",
    year: 3,
    description: "Jestem studentem Informatyki i Ekonometrii na 3 roku, moja pasja jest tworzenie aplikacji, w szczegolnosci w technologiach Java Spring Web oraz Asp.Net Core. Lubie uczyc sie nowych technologii, budowac projekty od zera i rozwiazywac realne problemy. W przyszlosci chcialbym rozwijac sie jako backend developer lub fullstack. Dodatkowo interesuje sie tez modelowaniem i analiza danych. W wolnych chwilach uwielbiam sluchac winyli z lat 70 i jezdzic na rowerze."
}


const MeElement =
    <>
        <h1 className="font-bold text-4xl font-mono m-2 ">{Me.name} {Me.surname}</h1>
        <h2 className="font-mono text-3xl mx-2">Wiek: {Me.age} lata</h2>
        <h2 className="font-mono text-3xl mx-2">&#128205; {Me.city}</h2>
        <h2 className="font-mono text-3xl mx-2">&#128222; {Me.phone} </h2>
        <h2 className="font-mono text-3xl mx-2"> &#128231; {Me.email}</h2>

        <div className="my-3">
            <h2 className="font-mono text-2xl mx-2 ">&#127979; Wyksztalcenie</h2>
            <p className="font-mono text-xl mx-2">{Me.school}</p>
            <p className="font-mono text-xl mx-2">{Me.course}, {Me.year} rok</p>
        </div>

        <h3 className="font-mono text-2xl mx-2">&#128102; O mnie</h3>
        <h3 className="font-mono text-xl mx-2">{Me.description}</h3>

        <h3 className="font-mono text-2xl mx-2 mt-3" > &#128196; Pobierz moje CV</h3>
        <div className="mx-2 my-3">
            <a
                href="/Jakub_Dabrowski_CV.pdf"
                download
                className="bg-amber-500 hover:bg-amber-600 text-white font-mono px-4 py-2 rounded-md shadow-md transition duration-300"
            >
                 Pobierz CV
            </a>
        </div>
    </>


export default MeComponent;