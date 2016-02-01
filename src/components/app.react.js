import React, { PropTypes } from 'react';

import Footer from './footer/footer.react';
import Navbar from './navbar/navbar.react';
import './app.less';

const App = (props) => {
  return (
    <div>
      <Navbar />
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
