import React from 'react';
import PropTypes from 'prop-types';
import './home-layout.css';

const HomeLayout = props => (
  <section>
    {props.children}
  </section>
);

HomeLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HomeLayout;
