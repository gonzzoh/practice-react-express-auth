const knex = require('../knex');
// const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class Upload {
//   #passwordHash = null; // a private property

  // Why have a constructor here? We need a way to take the raw data returned from
  // the database and hide the passwordHash before sending it back to the controller
//   constructor({ id, username, password_hash }) {
//     this.id = id;
//     this.username = username;
//     this.#passwordHash = password_hash;
//   }

  static async list() {
    const query = 'SELECT * FROM uploads';
    const { rows } = await knex.raw(query);
    // use the constructor to hide each user's passwordHash
    return rows.map((upload) => new Upload(upload));
  }

//   static async find(id) {
//     const query = 'SELECT * FROM users WHERE id = ?';
//     const args = [id];
//     const { rows } = await knex.raw(query, args);
//     const user = rows[0];
//     return user ? new User(user) : null;
//   }

//   static async findByUsername(username) {
//     const query = 'SELECT * FROM users WHERE username = ?';
//     const args = [username];
//     const { rows } = await knex.raw(query, args);
//     const user = rows[0];
//     return user ? new User(user) : null;
//   }

  static async create(title, created_by, before_image, job_description, location, under_contract) {
    const query = `INSERT INTO uploads (title, created_by, before_image, job_description, location, under_contract)
      VALUES (?, ?, ?, ?, ?, ?) RETURNING *`;
    const args = [title, created_by, before_image, job_description, location, under_contract];
    const { rows } = await knex.raw(query, args);
    const upload = rows[0];
    return new Upload(upload);
  }

  static async deleteAll() {
    return knex.raw('TRUNCATE uploads;');
  }

//   update = async (username) => { // dynamic queries are easier if you add more properties
//     const rows = await knex('users')
//       .where({ id: this.id })
//       .update({ username })
//       .returning('*');

//     const updatedUser = rows[0];
//     return updatedUser ? new User(updatedUser) : null;
//   };

//   isValidPassword = async (password) => (
//     isValidPassword(password, this.#passwordHash)
//   );
}

module.exports = Upload;
