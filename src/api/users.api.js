import client from "./client";

export default {

    async getUser(id) {
        return client.parseResponse(await client.get('/user/' + id));
    },

    async login(credentials) {
        return client.parseResponse(await client.post('/login', credentials))
    },

    async savePreferences(credentials) {
        return client.parseResponse(await client.post('/preferences', credentials))
    },

    async logout(filters) {
        return client.parseResponse(await client.get('/logout', filters))
    },

    async registerUser(data) {
        return client.parseResponse(await client.post('/register', data))
    },

}
