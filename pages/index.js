import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
	console.log(results);

	return (
		<div>
			<Head>
				<title>Hulu</title>
				<meta property="og:title" content="My page title" key="title" />

				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* BODY */}
			<Header />
			<Navbar />
			<Results results={results} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const genre = context.query.genre;

	const request = await fetch(
		`https://api.themoviedb.org/3${
			requests[genre]?.url || requests.fetchTrending.url
		}`
	).then((res) => res.json());

	return {
		props: {
			results: request.results,
		},
	};
}
