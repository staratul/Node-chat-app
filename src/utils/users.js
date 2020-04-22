const users = [];

// Create user
const addUser = ({ id, username, room }) => {
    // clean the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Validate the data
    if(!username || !room) {
        return {
            error: 'Username and room is required'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if(existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = { id, username, room };
    users.push(user);
    return { user }
}

// Remove user
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// Get User
const getUser = (id) => {
    return users.find((user) => user.id === id);
}

// Get User in room
const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room.trim().toLowerCase());
}


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
