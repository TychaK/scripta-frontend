// combine all the stores, then send that to the root of the application
import {configureStore} from "@reduxjs/toolkit";
import articlesReducer from "./articles.store";
import categoriesReducer from './categories.store'
import usersReducer from './users.store'
import authorsReducer from './authors.store'
import sourcesReducer from './sources.store'

const store = configureStore({
    reducer: {
        articles: articlesReducer,
        categories: categoriesReducer,
        users: usersReducer,
        authors: authorsReducer,
        sources: sourcesReducer
    }
})

export default store