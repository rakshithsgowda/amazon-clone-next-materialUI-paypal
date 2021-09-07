import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import useStyles from '../utils/styles'

export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <div>
      <Head>
        <title>Amazon Clone</title>
      </Head>
      <AppBar position='static' className={classes.navbar}>
        <Toolbar>
          <Typography>Amazonclone</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>Hopefully all rights reserved. Amazonclone.</Typography>
      </footer>
    </div>
  )
}
