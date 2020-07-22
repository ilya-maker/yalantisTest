const BASE_URL = 'https://yalantis-react-school-api.yalantis.com/api';

export const getUsersFromApi = () => {
    return fetch(`${BASE_URL}/task0/users`)
        .then(response => response.json());
};
