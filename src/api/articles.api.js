import client from "./client";

export default {

    async getArticles(data) {
        return client.parseResponse(await client.get('/articles/', data))
    },

    async getArticle(id) {
        return client.parseResponse(await client.get('/articles/' + id));
    },

}
