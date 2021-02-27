import React from "react";
import Header from "./Header";
import { Container } from "semantic-ui-react";
import Head from "next/head";

export default (props) => {
  return (
    <Container>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          async
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
        />
      </Head>
      <Header owner={props.owner} />
      {props.children}
    </Container>
  );
};
