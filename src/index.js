import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

class TextArea extends React.Component {
  constructor (props){
    super(props);
  }

  render () {
    return(
      <div>
        <h1>Wirte your message</h1>
        <input type='text' />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TextArea />
  </React.StrictMode>
);

