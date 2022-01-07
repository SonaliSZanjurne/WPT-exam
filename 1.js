const mysql = require("mysql");
const Promise = require("bluebird");

const Connection = require("mysql/lib/Connection");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
console.log("hello msg");

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "data",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Connection successful");
  await connection.endAsync();
}
connectionCheck();

async function addMsg(message) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("connection success");
  let sql = `insert into message(msg)values(?)`;
  await connection.queryAsync(sql, [message.msg]);
  await connection.endAsync();
  console.log("Message Added");
}

console.log("connect");

//const message = {msg : "Hello"};

const message = { msg: "how are you" };

addMsg(message);

async function showMsg(message) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("lets check msg");
  let sql = `select * from message`;

  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  console.log(list);
  return list;
}

showMsg(message);
module.exports = { showMsg };
