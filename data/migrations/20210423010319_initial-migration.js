
exports.up = function(knex) {
    return knex.schema
    .createTable('heros',tbl=>{
        tbl.increments('hero_id')
        tbl.text('Hero').notNullable()
        tbl.text('SuperPower').notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('heros')
};
