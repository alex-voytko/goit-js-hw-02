//Перевод всех букв в маленькие, сплит строк
//

const slagify = function(string) {
    const words = string.toLowerCase().split(' ');
    const slug = words.join('-');

    return slug;
}

// const slag1 = slagify('Top 10 benefits of React framework');
// console.log(slag1);

// const slag2 = slagify('Data Protection and protecting your users in light of GDPR');
// console.log(slag2);

//Массив строк
// 
const articles = [
    'Top 10 benefits of React framework',
    'Data Protection and protecting your users in light of GDPR',
    'How to find Unoque and Memorable Name for Your Product',
    'Build Mean Stak Application',
    '11 fruitful resources to improve Javascript knowledge',
];

const slugs = [];

for (const article of articles) {
    const slug = slagify(article);

    slugs.push(slug);
}

console.log(slugs);