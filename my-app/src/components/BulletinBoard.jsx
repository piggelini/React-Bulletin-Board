import ReactPost from "./ReactPost";

const bulletins = [

    {
        question: "Vad är tre fördelar med att använda React?",
        answer: "- På grund av Reacts popularitet, finns det en stor andel utvecklare som kan ramverket. Det innebär att det finns många anställningsbara React-utvecklare och att det finns en stor community att vända sig till för hjälp."
    },
    {
        question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
        answer: "blablblbalbalblbalalbbalblaablblbalb"
    },
    {
        question: "Nämn tre skillnader mellan React och Angular.",
        answer: "blablblablbblblbalbbalbalblbalablablbalabbalablblblbalbal"
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