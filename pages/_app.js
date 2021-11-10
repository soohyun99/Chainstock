/** @format */
import React from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>StockChain</title>
			</Head>
			<GlobalStyle />
			<Main>
				<Component {...pageProps} />
			</Main>
		</>
	);
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;
const Main = styled.main`
	width: 100vw;
	height: 100vh;
`;
