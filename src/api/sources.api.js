import client from "./client";

export default {

    async getSources(data) {
        return client.parseResponse(await client.get('/sources/', data))
    },
}
