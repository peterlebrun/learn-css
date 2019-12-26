import React from 'react';
import { Header } from './Header';
import { Nav } from './Nav';
import { Body } from './Body';
import { Footer } from './Footer';
import styles from './style.css';
import {
    Box,
    Button,
    ButtonGroup,
    BottomNavigation,
    BottomNavigationAction
} from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div className={styles.container}>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
          <BottomNavigation> {/* value={value} onChange={handleChange} className={classes.root}> */}
  <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
  <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
</BottomNavigation>
        {/*
          <Header/>
          <Nav/>
          <Body/>
          <Footer/>
         */}

        </div>
    );
  }
}
