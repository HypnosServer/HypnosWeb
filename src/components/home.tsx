import React from "react";
// @ts-ignore
import banner from "../assets/banner.png"
import "../styles/home.scss";

export function Home() {
	return (
		<main>
			<article>
				<div className="banner">
					<img alt="hypnos banner" src={banner}/>
				</div>

        <iframe src="https://discord.com/widget?id=626974236753264664&amp;theme=dark"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
			</article>
		</main>
	);
}
