import React from 'react';
import { connect } from 'react-redux';
import './Header.css';
import ActionCreator from './../../../app/ActionCreator';
import {
  Toolbar,
  ToolbarRow,
  ToolbarTitle,
  ToolbarSection,
  ToolbarMenuIcon,
} from 'rmwc';

const Header = () => {
  return (
    <Toolbar>
      <ToolbarRow>
        <ToolbarSection alignStart>
          <ToolbarMenuIcon use='menu'/>
          <ToolbarTitle>Video Capture</ToolbarTitle>
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
