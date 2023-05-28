import articles from './articles.api'
import users from './users.api'
import categories from './categories.api'
import authors from './authors.api'

export default {
    ...articles,
    ...users,
    ...categories,
    ...authors
}