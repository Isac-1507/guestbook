const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('guestbook.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS entries (name TEXT, message TEXT)")
});
module.exports = db;