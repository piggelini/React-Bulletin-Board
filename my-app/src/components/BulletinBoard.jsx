import ReactPost from "./ReactPost";

const bulletins = [

    {
        question: "Vad är tre fördelar med att använda React?",
        answer: "- På grund av Reacts popularitet, finns det en stor andel utvecklare som kan ramverket. Det innebär att det finns många anställningsbara React-utvecklare och att det finns en stor community att vända sig till för hjälp. React går snabbt att lära sig och komma igång med. React är komponentbaserat, vilket gör det lätt att återanvända komponenter i ett projekt och gör koden mer strukturerad."
    },
    {
        question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
        answer: "En Single Page Application (SPA) betyder att en webbsida bara har en sida som laddas när användaren går in på webbsidan och när du navigerar på webbsidan så laddas inte en ny sida om. Istället renderar sidan bara om det innehåll som ska visas. På en 'vanlig webbplats' så laddas sidan om när användaren navigerar sig på webbplatsen."
    },
    {
        question: "Nämn tre skillnader mellan React och Angular:",
        answer: "- Angular har en brant inlärningskurva medan React har en måttlig till enkel inlärningskurva. En annan skillnad är att Angular är baserat på TypeScript och React är baserat på JavaScript. En tredje skillnaden är att Angular använder sig av MVC (Real DOM) medan React använder Virtual DOM."
    }
]


export default function BulletinBoard() {

    return (
        <main className="main">
            <h1>Anslagstavla</h1>
            {bulletins.map((bulletin) => {
                return (<ReactPost question={bulletin.question} answer={bulletin.answer} />)
            })}

        </main>

    )
}