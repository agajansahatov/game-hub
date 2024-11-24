import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://api.rawg.io/api',
        params: {
            key: '9601f29df832411f93fbb2dbc87e34fa'
        }
    }
)