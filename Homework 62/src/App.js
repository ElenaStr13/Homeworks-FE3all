export const greetingUser = (users) => {
    users.forEach(user => {
        console.log(`Hello ${user.name}`);
    });
}

module.exports = {greetingUser}