import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import SearchPage from './modules/articles/searchPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Suspense key={2} fallback={<div>Loading...</div>}>
          <Routes>
              <Route exact path="/" element={<SearchPage />} />
            </Routes>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
