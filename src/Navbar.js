import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';
import { withStyles } from  '@material-ui/core/styles';
import styles from './styles/NavBarStyles';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

const content = {
  albanian: {
    flag: '🇦🇱',
    search: 'Kerko',
    title: 'Faqja e Hyrjes'
  },
  english: {
    flag: '🇬🇧',
    search: 'Search',
    title: 'Sign In Page'
  },
  italian: {
    flag: '🇮🇹',
    search: 'Cerca',
    title: 'Pagina di Registrazione'
  }
}

function Navbar(props) {
  const { classes } = props;
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext)
  const { flag, search, title } = content[language];
  return (
    <div className={classes.root}>
      <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit'>
            <span>{flag}</span>
          </IconButton>
          <Typography className={classes.title} variant='h6' color='inherit'>
            {title}
          </Typography>
          <Switch onClick={toggleTheme}/>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase 
              placeholder={`${search}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Navbar);
