import './App.css';
import React, {Suspense} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ArticleCategories from "./components/pages/ArticleCategories";
import Article from "./components/pages/Article";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Account from "./components/pages/Account";

const ProtectedRoute = React.lazy(
    () => import('./utils/ProtectedRoute')
);

const AuthenticatedRoute = React.lazy(
    () => import('./utils/AuthenticatedRoute')
);

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Suspense fallback={<p> Loading ... </p>}>
                    <Routes>
                        <Route path={'/category/:category_id'} element={<ArticleCategories/>}></Route>
                        <Route path={'/articles'} element={<Article/>}></Route>
                        <Route path={'/articles/:article_id'} element={<Article/>}></Route>
                        <Route path={'/auth'} element={<AuthenticatedRoute><Login/></AuthenticatedRoute>}></Route>
                        <Route path={'/signup'} element={<AuthenticatedRoute><Register/></AuthenticatedRoute>}></Route>
                        <Route path={'/account'} element={<ProtectedRoute><Account/></ProtectedRoute>}></Route>
                        <Route path={'/'} element={<Home/>}></Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
