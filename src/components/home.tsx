import React from "react";

// @ts-ignore
import logo from "../assets/logo.png"
import "../styles/home.scss";

export function Home() {
	return (
		<main>
			<article>
				<div className="icon">
					<img alt="hypnos logo" src={logo}/>
				</div>

        <iframe src="https://discord.com/widget?id=626974236753264664&amp;theme=dark"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
			</article>
		</main>
	);
}
