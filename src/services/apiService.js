


export const getPolls = async (userId) => {

    const apiUrl = `http://localhost:8080/polls`;


    try {
        const response = await fetch(apiUrl, {
            credentials: 'include'
        });
        if(response.status === 200){
            const data = await response.json();
            console.log(data)
            return data;
        }
        else if(response.status === 401)
            return false;
    }
    catch (error) {
        console.log(error);
    }
}


export const getPoll = async(link) => {
    const apiUrl = `http://localhost:8080/polls/vote/${link}`;

    try {
        const response = await fetch(apiUrl, {
            credentials: 'include'
        });
        if(response.status === 200){
            const data = await response.json();
            return data;
        }
        else{
            return false;
        }

    } catch (error) {
        console.log(error)
    }
}

export const getUser = async(userId) => {
    const apiUrl = `http://localhost:8080/users/${userId}`;

    try {
        const response = await fetch(apiUrl, {
            credentials: 'include'
        });
        if(response.status === 200){
            const data = await response.json();
            return data;
        }
        else{
            return false;
        }

    } catch (error) {
        console.log(error)
    }
}

export const openClosePoll = async(pollId) => {
    const apiUrl = `http://localhost:8080/polls/${pollId}/openclose`;

    try {
        const response = await fetch(apiUrl, {
            credentials: 'include'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const getAnswers = async (pollId) => {
    const apiUrl = `http://localhost:8080/answers?pollId=${pollId}`;

    try {
        const response = await fetch(apiUrl, {
            credentials: 'include'
        });
        const data = await response.json();
        console.log("answers")
        console.log(pollId)
        console.log(data)
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export const registerUser = async (userData) => {
    const apiUrl = 'http://localhost:8080/signup';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            credentials: 'include'
        });
        if(response.status === 409){
            return false;
        }
        else if(response.status === 200){
            const data = await response.json()
            return data;
        }

    }
    catch (error) {
        console.log(error);
    }
}

export const editUser = async (userData) => {
    const apiUrl = `http://localhost:8080/users/${userData.id}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            credentials: 'include'
        });
        if(response.status === 409){
            return false;
        }
        else if(response.status === 200){
            const data = await response.json()
            return data;
        }

    }
    catch (error) {
        console.log(error);
    }
}

export const vote = async(answer) => {
    const apiUrl = 'http://localhost:8080/answers';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(answer),
            credentials: 'include'
        });
    } catch (error) {
        console.log(error);
    }
}

export const sharePoll = async(pollId) => {
    const apiUrl = `http://localhost:8080/polls/share/${pollId}`;

    try {
        const response = await fetch(apiUrl, {
            credentials: 'include'
        });
        if(response.status === 200){
            const data = await response.json();
            console.log(data);
            return data;
        }
        else{
            return false;
        }

    } catch (error) {
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

export const logOut = async () => {
    const apiUrl = `http://localhost:8080/logout`;

    try{
        const response = await fetch(apiUrl, {
            credentials: 'include'
        });
        localStorage.clear();
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
            const data = await response.json();
            localStorage.setItem("userId", data.id);


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


export const linking = async (pollId) => {
    const apiUrl = `http://localhost:8080/link?pollId=${pollId}`;

    try{
        const response = await fetch(apiUrl, {
            credentials: 'include'
        });
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
}
