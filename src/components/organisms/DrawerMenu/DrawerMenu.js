import React from 'react';
import { connect } from 'react-redux';
import './DrawerMenu.css';
import ActionCreator from './../../../app/ActionCreator';
import {
  TemporaryDrawer,
  TemporaryDrawerHeader,
  TemporaryDrawerContent,
  ListItem,
  ListItemText,
} from 'rmwc';

const DrawerMenu = () => {
  return (
    <TemporaryDrawer
      open={false}>
      <TemporaryDrawerHeader style={{ backgroundColor: '#f6f6f6' }}>
        TemporaryDrawerHeader
      </TemporaryDrawerHeader>
      <TemporaryDrawerContent>
        <ListItem>
          <ListItemText>Cookies</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Pizza</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Icecream</ListItemText>
        </ListItem>
      </TemporaryDrawerContent>
    </TemporaryDrawer>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => {
      dispatch(ActionCreator.fuga());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
