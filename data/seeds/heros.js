exports.seed = function(knex) {
    return knex('heros').truncate()
    .then(function () {
        return knex('heros').insert([
            {Hero: 'Iron Man', SuperPower: 'Big Brain, Big Tech'},
            {Hero: 'Batman', SuperPower:"He's rich"},
            {Hero: 'Hulk', SuperPower:'Smash stuff'},
            {Hero: 'Superman', SuperPower:'Superhuman god'},
            {Hero: 'Thor', SuperPower:'God of thunder'},
            {Hero: 'Aquaman', SuperPower:'King of Atlantis'}
        ]);
    });
};