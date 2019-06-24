import './style.scss';
import React, { Component } from 'react';
import Header from '../Header';

export default Page =>
  class extends Component {
    static getInitialProps = Page.getInitialProps;

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className="layout">
          <Header />
          <Page {...this.props} />
        </div>
      );
    }
  };

// export default function Layout({ children }) {
//   return (
//     <div className="layout">
//       <Header />
//       {children}
//     </div>
//   );
// }
