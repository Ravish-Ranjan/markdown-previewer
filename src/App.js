import "./App.css";
import { useState } from "react";
import Md from "react-markdown";

export function App() {
	const [md, setMd] = useState("");

	return (
		<div className="app">
			<div>
				<span>Text</span>
				<textarea
					value={md}
					onChange={(e) => setMd(e.target.value)}
					placeholder="Enter your text here..."
				/>
			</div>
			<div>
				<span>Markdown</span>
				<Md className="output">{md || "You will see Markdown here..."}</Md>
			</div>
		</div>
	);
}
