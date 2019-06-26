import './style.scss';
import React, { Component } from 'react';
import Header from '../Header';

export default async Page =>
  class extends Component {
    static getInitialProps = Page.getInitialProps
      ? await Page.getInitialProps
      : {};

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
