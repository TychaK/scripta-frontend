import articles from './articles.api'
import users from './users.api'
import categories from './categories.api'
import authors from './authors.api'
import sources from './sources.api'

export default {
    ...articles,
    ...users,
    ...categories,
    ...authors,
    ...sources
}