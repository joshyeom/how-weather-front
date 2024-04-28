import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Layout from './components/layout/index';
import Loading from './components/loading';
import IntroPage from './pages/intro';
import MainPage from './pages/main';
import NotFoundPage from './pages/notFound';
import RecommendPage from './pages/recommend';
import SettingPage from './pages/setting';
import './reset.css';


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
     <BrowserRouter>
       <Suspense fallback={<Loading />}>
         <Routes>
           <Route path="/" element={<IntroPage />} />
           <Route element={<Layout />}>
             <Route path="/home" element={<MainPage />} />
             <Route path="/recommend" element={<RecommendPage />} />
             <Route path="/setting" element={<SettingPage />} />
           </Route>
           <Route path="*" element={<NotFoundPage />} />
         </Routes>
       </Suspense>
     </BrowserRouter>
  </React.StrictMode>
);
