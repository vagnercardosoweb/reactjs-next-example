import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';

import store from '../store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let props = {};

    if (typeof Component.getInitialProps === 'function') {
      props = await Component.getInitialProps(ctx);
    }

    props.reduxStore = store;
    props.isServer = typeof window === 'undefined';

    return { props };
  }

  render() {
    const { Component, props } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...props} reduxStore={store} />
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
