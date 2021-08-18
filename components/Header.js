import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Header() {
	return (
		<StyledHeader className="">
			<Image
				className="object-contain"
				src="/hulu.png"
				width={200}
				height={100}
			/>
		</StyledHeader>
	);
}

export default Header;

const StyledHeader = styled.header``;
