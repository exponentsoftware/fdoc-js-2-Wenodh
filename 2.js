//  2.	Write a function which filter users who has  scoresGreaterThan85,
// 	Write a function which addUser  to the user array only if the user does not exist.
// 	Write a function which addUserSkill which can add skill to a user only if the user exist.
// 	Write a function which editUser if the user exist in the users array.
// 	```js
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16,
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18,
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22,
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25,
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26,
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18,
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20,
    },
];

function scoresGreaterThan85(users) {
    return users.filter((e) => {
        return e.scores > 85;
    });
}
// console.log(scoresGreaterThan85(users));

// Write a function which addUser  to the user array only if the user does not exist.
function addUser(users, user) {
    users.forEach((element) => {
        if (element.name === user.name) return 'user already exist';
    });
    users.push(user);
    return users;
}
let user = {
    name: 'Vinod',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20,
};

console.log(addUser(users, user));

// 	Write a function which addUserSkill which can add skill to a user only if the user exist.

function addUserSkill(users, userName, skill) {
    users.map((e) => {
        if (e.name === userName) e.skills.push(skill);
    });
    return users;
}
console.log(addUserSkill(users, 'Brook', 'REACT'));
console.log(addUserSkill(users, 'Vinod', 'REACT'));

// Write a function which editUser if the user exist in the users array.
function editUser(users, newUser) {
    users.map((e) => {
        if (e.name === newUser.name) {
            e.name = newUser.name;
            if (newUser.scores) e.scores = newUser.scores;
            if (newUser.skills) e.skills = newUser.skills;
            if (newUser.age) e.age = newUser.age;
        }
    });
    return users;
}
console.log(editUser(users, { name: 'Vinod', scores: 100 }));
