import { Button } from 'rmwc/Button';
import {Image, Grid, Row, Col} from 'react-bootstrap';
import React, { Component } from 'react';
import logo from '../../../img/logo-white-font.png';

import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMenuIcon,
  ToolbarIcon
} from 'rmwc/Toolbar';


class NavigationBar extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
    <div>
    	<div>
	        <Toolbar>
			  <ToolbarRow className='top-bar'>
			  	<ToolbarSection alignStart>
				  	<Image className='logo' src={logo} responsive/>
				  	<ToolbarTitle></ToolbarTitle>
			  	</ToolbarSection>
			  	<ToolbarSection className="site-sections" alignEnd>
				  	<ToolbarTitle>About Us</ToolbarTitle>
				  	<ToolbarTitle>Services</ToolbarTitle>
			  	</ToolbarSection>
			  </ToolbarRow>
			</Toolbar>
		</div> 
		<div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
		</div>
	</div>

    )   
  }
}

export default NavigationBar;