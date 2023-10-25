

export const getPolls = async (userId) => {
    const apiUrl = `http://localhost:8080/users/${userId}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data.polls)
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
            body: JSON.stringify(pollData)
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
            body: JSON.stringify(pollData)
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
            }
        });
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
}

export const loginUser = async (userData) => {
    const apiUrl = `http://localhost:8080/${userData.userName}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // if user is found (data is not null or other message)
        // save current userId to local storage and return true
    }
    catch (error) {
        console.log(error);
    }
}
