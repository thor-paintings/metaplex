import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/index.less';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Thor: The 3 Year Old Artist.</title>
        <meta content="This is the Thor: The 3 Year Old Artist pages." name="description"></meta>
      </Head>
      <div id="header"
        style={ 
          { 
            margin: 10,
            padding: 10,
            border:2,
            borderColor: 'white',
            textAlign: 'center'
          }
        }>
        <h1>Wellcome to the Thor: The 3 Year Old Artist.</h1>
          <p><img src="atwork_mini.jpg"></img></p>
      </div>
      <div id="root">
        <Component {...pageProps} />
      </div>
      <div id="footer" 
        style={ 
          { 
            margin: 10,
            padding: 10,
            border:2,
            borderColor: 'white',
            textAlign: 'center'
          }
        }>
        <a href="https://twitter.com/ThorTheArtist"><img src="twitter.png" width="96" height="96"></img></a>
      </div>
    </>
  );
}
