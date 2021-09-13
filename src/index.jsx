import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {Provider} from './context/context'
import {SpeechProvider} from '@speechly/react-client'

ReactDOM.render(
  <SpeechProvider appId='274cfbaf-bf7c-4024-9b10-d85669b6a4ec' language='en-US'>
   <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
 
  document.getElementById('root')
);