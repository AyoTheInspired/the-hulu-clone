import React from "react";
import styled from "styled-components";

function HeaderItem({ Icon, title }) {
	return (
		<Div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
			<Icon className="h-8 mb-1 group-hover:animate-bounce" />
			<p className="tracking-widest opacity-0 group-hover:opacity-100">
				{title}{" "}
			</p>
		</Div>
	);
}

export default HeaderItem;

const Div = styled.div``;
