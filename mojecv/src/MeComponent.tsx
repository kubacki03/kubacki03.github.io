function MeComponent() {
    return (
        nameElement
    );
}


const Me = {
    name: "Jakub",
    surname: "Dabrowski",
    phone: "727 791 153",
    email: "polichronowe@gmail.com",
    city: "Bialystok",
    age: 22,
    school: "Politachnika Bialostocka Wydzial Informatyki",
    description: "Jestem studentem Informatyki i Ekonometri na 3 roku, moja pasja jest tworzenie aplikacji webowych, w szczegolnosci w technologiach Java Spring Web oraz Asp.Net Core"
}


const nameElement =
    <>
        <h1 className="font-bold text-4xl font-mono m-2 ">{Me.name} {Me.surname}</h1>
        <h2 className="font-mono text-3xl mx-2">Wiek: {Me.age} lata</h2>
        <h2 className="font-mono text-3xl mx-2">Miejsce zamieszkania: {Me.city}</h2>
        <h2 className="font-mono text-3xl mx-2">Numer telefonu: {Me.phone} </h2>
        <h2 className="font-mono text-3xl mx-2"> Moj email: {Me.email}</h2>
        <h2 className="font-mono text-2xl mx-2">Uczelnia: {Me.school}</h2>
        <h3 className="font-mono text-2xl mx-2">{Me.description}</h3>
    </>

export default MeComponent;