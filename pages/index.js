import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Hulu</title>
				<meta
					name="description"
					content="Generated b the getsters are not herey create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Navbar />
		</div>
	);
}
