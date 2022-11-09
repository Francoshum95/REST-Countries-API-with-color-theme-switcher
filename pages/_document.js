import Document, { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () =>(
    <Html>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet"/> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
)

export default MyDocument;