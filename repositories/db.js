import pg from 'pg';

async function connect(){
  if(global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString: "postgres://ekqvxjsn:2VXpCEfjeahBDWnYav32rTYRFgjLpwyy@queenie.db.elephantsql.com/ekqvxjsn"
  })

  global.connection = pool;
  return pool.connect()
}

export {
  connect
}