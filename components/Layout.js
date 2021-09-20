import {
  ThemeProvider,
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  CssBaseline,
  Switch,
  createTheme,
  Badge,
} from '@material-ui/core'
import Head from 'next/head'
import useStyles from '../utils/styles'
import NextLink from 'next/link'
import { Store } from '../utils/Store'
import { useContext } from 'react'
import Cookies from 'js-cookie'

export default function Layout({ title, children, description }) {
  const { state, dispatch } = useContext(Store)
  const { darkMode, cart } = state

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
    spacing: 8,
  })

  const classes = useStyles()

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' })
    const newDarkMode = !darkMode
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF')
  }

  return (
    <div>
      <Head>
        <title>{title ? `${title}- Amazon-Clone` : 'Amazon-Clone'}</title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='static' className={classes.navbar}>
          <Toolbar>
            <NextLink href='/' passHref>
              <Link>
                <Typography className={classes.brand}>Amazonclone</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>

              <NextLink href='/cart' passHref>
                <Link>
                  {cart.cartItems.length > 0 ? (
                    <Badge
                      color='secondary'
                      badgeContent={cart.cartItems.length}
                    >
                      Cart
                    </Badge>
                  ) : (
                    'Cart'
                  )}
                </Link>
              </NextLink>
              <NextLink href='/login' passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>Hopefully all rights reserved. Amazonclone.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  )
}
