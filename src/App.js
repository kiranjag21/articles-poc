import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import SearchPage from './modules/articles/searchPage';
import './App.css';
import Popup from './controls/modal/modal';
import LoadingIndicator from './controls/loadingIndicator/loadingIndicator';
import ResultPage from './modules/articles/resultpage';
import { articleReducer, initialState } from './reducer';
import { useReducer, createContext } from 'react';

export const ArticleContext = createContext();

function App() {

  const [currentPopup, setCurrentPopup] = React.useState(0);
  const [state, dispatch] = useReducer(articleReducer, initialState);

  const setPopup = (e)  => {
    setCurrentPopup(e);
  }

  const getPopupContent = ()  => {
    switch(currentPopup) {
      case 1: 
        return <LoadingIndicator content="Processing your request. once done you will be navigated to result page" />;
          break;
      default: 
        return null;
    }
  }

  return (
    <div className="App" style={{ padding: '20px 30px'}}>
    <ArticleContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route exact path="/" element={<SearchPage setPopup={setPopup} />} />
                <Route path="/result" element={<ResultPage setPopup={setPopup} />} />
              </Routes>
          </React.Suspense>
        </BrowserRouter>

        {currentPopup > 0 &&
          <Popup visible={true}>
            {getPopupContent()}
          </Popup>
        }
      </ArticleContext.Provider>
    </div>
  );
}

export default App;
