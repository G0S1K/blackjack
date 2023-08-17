import {createContext,useContext, useState } from "react";

interface PointsContextParams {
	points: number;
    addPoints: (value: number) => void;
    subPoints: (value: number) => void;
}

const PointsContext = createContext<PointsContextParams | null>(null);

const usePointsContext = () => useContext(PointsContext) as PointsContextParams;

const PointsProvider = ({ children }: { children: React.ReactNode }) => {
	const [points, setPoints] = useState<number>(500);

    const addPoints = (value: number) => setPoints(points + value);

    const subPoints = (value: number) => setPoints(points - value);

	return (
		<PointsContext.Provider value={{ points, addPoints, subPoints }}>
			{children}
		</PointsContext.Provider>
	);
};

export { PointsProvider, usePointsContext };
