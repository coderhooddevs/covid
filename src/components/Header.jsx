import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'home',
    };
  }

  render() {
    const { selected } = this.state;
    return (
      <header
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          backgroundColor: 'peru',
          alignItems: 'center',
          justifyContent: 'flex-end',
          listStyle: 'none',
        }}
      >
        <li
          style={{
            padding: '20px',
            backgroundColor: selected === 'home' ? 'white' : 'peru',
          }}
          onClick={() => {
            this.setState({ selected: 'home' });
            this.props.onSelect('home');
          }}
        >
          <h3>Home</h3>
        </li>
        <li
          style={{
            padding: '20px',
            backgroundColor: selected === 'blog' ? 'white' : 'peru',
          }}
          onClick={() => {
            this.setState({ selected: 'blog' });
            this.props.onSelect('blog');
          }}
        >
          <h3>Blog</h3>
        </li>
        <li
          style={{
            padding: '20px',
            backgroundColor: selected === 'about' ? 'white' : 'peru',
          }}
          onClick={() => {
            this.setState({ selected: 'about' });
            this.props.onSelect('about');
          }}
        >
          <h3>About</h3>
        </li>
      </header>
    );
  }
}

export default Header;
