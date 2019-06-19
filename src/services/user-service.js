export const UserService = {
  getUsers: () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => users);
  },
  getUserById: userId => {
    return fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then(res => res.json())
      .then(users => users);
  }
};
