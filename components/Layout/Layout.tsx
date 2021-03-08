import React, { ReactNode } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Head from 'next/head'

import classes from './Layout.module.css'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>James Liberato</title>

      <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/* Fonts and icons */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
          />

          <link
            href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
            rel="stylesheet"
          />


    </Head>

    <Header/>
      
    <main className={classes.Main}>
      <div className={classes.Warp}>
        {children}
      </div>
    </main>

    <Footer/>
  </>
)

export default Layout
