/* eslint-disable class-methods-use-this */
import axios from 'axios';
import _ from 'lodash';
import {getFromLocalStorage} from "../utils/local-storage";

class Client {
    constructor() {
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE';

        const meta = document.head.querySelector('meta[name="csrf-token"]');
        if (meta) {
            axios.defaults.headers.common['X-CSRF-TOKEN'] = meta.content;
        }
        const user = getFromLocalStorage('user');
        const token = user?.token
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        this.http = axios.create({
            // baseURL: "/api",
            baseURL: "http://127.0.0.1:8000/api",
        });

        this.http.interceptors.response.use(response => response, async (error) => {
            if (error.response && error.response.status === 401) {
                localStorage.removeItem('app_token');
                if (!window.location.href.includes("auth") && !window.location.href.includes("register")) {
                    window.location.href = '/login';
                }
            }
            return Promise.reject(error);
        });
    }

    // setHeader(key, value) {
    //     this.http.defaults.common.headers[key] = value;
    //     return this;
    // }

    // setToken(token) {
    //     this.setHeader('Authorization', `Bearer ${token}`);
    //     return this;
    // }

    get(path, params, config) {
        return this.http.get(path, {params, ...config});
    }

    post(path, data, config) {
        return this.http.post(path, data, config);
    }

    upload(path, data, file, config) {
        const form = new FormData();
        _.each(data, (value, key) => {
            form.append(key, value);
        });
        return this.post(path, form, {
            ...config,
            headers: {'Content-Type': 'multipart/form-data'},
        });
    }

    put(path, data, config) {
        return this.http.put(path, data, config);
    }

    delete(path, params, config) {
        return this.http.delete(path, {params, ...config});
    }

    parseResponse({data}) {
        return data;
    }
}

export default new Client();
