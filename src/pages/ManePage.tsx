import { useCardsContext } from "../context/cartsContext";
import { Card } from "../types/Card";

const MainPage = () => {

    const {cards, addCard} = useCardsContext();

    return (
        <>
            <div onClick={() => addCard({number: 3, suit: "♠️"})}>hello</div>
            {cards.map((card: Card) => <div>{card.number}{card.suit}</div>)}
        </>
    )
}

export default MainPage;