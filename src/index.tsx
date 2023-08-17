import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PointsProvider } from "./context/pointsContext";
import { CardsProvider } from "./context/cartsContext";
import MainPage from "./pages/ManePage";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainPage />,
		children: [],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<PointsProvider>
			<CardsProvider>
				<RouterProvider router={router} />
			</CardsProvider>
		</PointsProvider>
	</React.StrictMode>
);
