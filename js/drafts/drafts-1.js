// Поиск друга
//
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// const findFriend = function(allFriends, name) {
//     console.log('allFriends: ', allFriends);
//     console.log('name ', name);

//     for (const friend of allFriends) {
//         if (name === friend) {
//             return 'Нашли такого друга';
//         }
//     }
//     return 'Друг не найден'
// };


// const r1 = findFriend(friends, 'Poll')
// console.log(r1)

// const r2 = findFriend(friends, 'ajax')
// console.log(r2)

// const r3 = findFriend(friends, 'Kiwi')
// console.log(r3)

// Более простой вариант:
const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

const findFriend = function(allFriends, name) {
   const isInFriends = allFriends.includes(name);
    return isInFriends ? 'Нашли такого друга' : 'Друг не найден';
}
const r1 = findFriend(friends, 'Poll');
console.log(r1);

const r2 = findFriend(friends, 'ajax');
console.log(r2);

const r3 = findFriend(friends, 'Kiwi');
console.log(r3);