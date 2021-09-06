import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Amazon Clone</title>
      </Head>
      <AppBar position='static'>
        <Toolbar>
          <Typography>Amazon-clone</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>Hopefully all rights reserved. Amazon-clone.</Typography>
      </footer>
    </div>
  )
}
