import React from 'react';
import './SearchBar.css';
import { Form, FormGroup, Input } from 'reactstrap';
import * as Icon from 'react-feather';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
     this.state = {}
  }

  render() {
    return(
      <div className='searchBar'>
        <div className='searchBarLeft'>
          <Icon.Instagram className='instaIcon' />
          <img className='instaCursive'
            src='https://fontmeme.com/images/instagram-new-logo.png'
            alt='Instagram Cursive' />  
        </div>
        <Form>
          <FormGroup>
            <Input 
              type='search'
              name='search'
              id='exampleSearch'
              onChange={this.props.searchPosts}
              placeholder='🔍 Search'
            />
          </FormGroup>
        </Form>
        <div>
          <Icon.Compass className='navIcons' />
          <Icon.Heart className='navIcons' />
          <Icon.User className='navIcons' />
        </div>
      </div>
    )
  }
}

export default SearchBar;