import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './responsive.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import {BicolorSorts, CreamSorts, GardenSorts, GreenSorts, HotpinkSorts, LavanderSorts, OrangeSorts, OtherSorts, PinkSorts, RedSorts, WhiteSorts, YellowSorts} from './components/catalog/sortsArray';

export const Context = createContext(null);
ReactDOM.render(
  // <React.StrictMode>
    <Context.Provider value={{
      bicolor: new BicolorSorts(),
      cream: new CreamSorts(),
      green: new GreenSorts(),
      hotpink: new HotpinkSorts(),
      pink: new PinkSorts(),
      red: new RedSorts(),
      yellow: new YellowSorts(),
      lavander: new LavanderSorts(),
      white: new WhiteSorts(),
      orange: new OrangeSorts(),
      garden: new GardenSorts(),
      other: new OtherSorts(),
    }}>
    {/* <Suspense fallback={(<div>Loading</div>)}> */}
      {/* <Spinner animation="border" role="status" variant="danger">
        <span className="sr-only">Loading...</span>
      </Spinner> */}
      <App />
    {/* </Suspense> */}
    </Context.Provider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
