import client from "./client";

export default {

    async getCategories(data) {
        return client.parseResponse(await client.get('/categories', data))
    },

}
