import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './lib/Header';

const styles =  require('./App.css') as any;

interface AppState {
}

class App extends Component<any, AppState> {
  
  // private term: Xterm

  constructor(props: any) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
        <div className={styles.app}>
          <Header />
        </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));