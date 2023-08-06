import axios, { AxiosRequestConfig } from 'axios'

export interface FetchResponce<T> {
    count: number;
    next: string | null;
    results: T[];
}
 
const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '30f87f69962b496b8dd4a5ca9d3f582f'
    }
})



class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponce<T>>(this.endpoint, config)
            .then(res => res.data)
    }

}


export default APIClient;