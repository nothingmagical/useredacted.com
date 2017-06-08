import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render () {
    // Hack to prevent unstyled flash with styled-components.
    // From https://github.com/zeit/next.js/blob/master/examples/with-styled-components/pages/_document.js
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>Redacted</title>
          {styleTags}
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/619254/777982/css/fonts.css" />
          <link rel="stylesheet" type="text/css" href="/static/base.css" />
          <link rel="icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
