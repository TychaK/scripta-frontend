import client from "./client";

export default {

    async getAuthors(data) {
        return client.parseResponse(await client.get('/authors', data))
    },

}
