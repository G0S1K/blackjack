import { createContext, useContext, useState } from "react";
import { Card } from "../types/Card";

interface CardsContextParams {
	cards: Card[];
	addCard: (card: Card) => void;
	clearHand: () => void;
}

const CardsContext = createContext<CardsContextParams | null>(null);

const useCardsContext = () => useContext(CardsContext) as CardsContextParams;

const CardsProvider = ({ children }: { children: React.ReactNode }) => {
	const [cards, setCards] = useState<Card[]>([]);

	const addCard = (card: Card) => setCards([...cards, card]);

	const clearHand = () => setCards([]);

	return (
		<CardsContext.Provider value={{ cards, addCard, clearHand }}>
			{children}
		</CardsContext.Provider>
	);
};

export {useCardsContext, CardsProvider}
