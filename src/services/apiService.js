


export const getPolls = async (userId) => {
    const apiUrl = `http://localhost:8080/users/${userId}`;

    try {
        const response = await fetch(apiUrl, {
            credentials: 'include'
        });
        const data = await response.json();
        return data.polls;
    }
    catch (error) {
        console.log(error);
    }
}

export const registerUser = async (userData) => {
    const apiUrl = 'http://localhost:8080/users';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        return await response.json()
    }
    catch (error) {
        console.log(error);
    }
}

export const createPoll = async (pollData) => {
    const apiUrl = 'http://localhost:8080/polls';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pollData),
            credentials: 'include'
        });

        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
}

export const editPoll = async (pollData) => {
    const apiUrl = `http://localhost:8080/polls/${pollData.id}`;

    try{
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pollData),
            credentials: 'include'
        });
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
}

export const deletePoll = async (pollData) => {
    const apiUrl = `http://localhost:8080/polls/${pollData.id}`;

    try{
        const response = await fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
}

export const loginUser = async (username, password) => {
    const apiUrl = `http://localhost:8080/login`;
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString(),
            credentials: 'include'
        });

        if (response.ok) {



            return true;
        } else {
            console.log('Error logging in', response.status, response.statusText);
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
