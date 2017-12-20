import * as React from 'react';
import { connect } from 'react-redux';
import './Header.css';
import ActionCreator from './../../../app/ActionCreator';
import { Model } from './../../../app/Models';
const {
  Toolbar,
  ToolbarRow,
  ToolbarTitle,
  ToolbarSection,
  ToolbarMenuIcon,
} = require('rmwc');

const Header = () => {
  return (
    <Toolbar>
      <ToolbarRow>
        <ToolbarSection alignStart={true}>
          <ToolbarMenuIcon use="menu"/>
          <ToolbarTitle>Video Capture</ToolbarTitle>
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>
  );
};

const mapStateToProps = (state: Model) => {
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
