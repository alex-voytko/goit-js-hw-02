const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const nameToFind1 = 'Poly';

const findFriend = function(allFriends, name) {
    console.log('allFriends: ', allFriends);
    console.log('name ', name);

    for (const friend of allFriends) {
        if (name === friend) {
            return 'Нашли такого друга';
        }
    }
    return 'Друг не найден'
};


const r1 = findFriend(friends, 'Poll');
console.log(r1)

const r2 = findFriend(friends, 'Ajax');
console.log(r2)
