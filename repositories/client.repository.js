import { connect } from "./db.js"

class ClientRepository{
  async insertClient(client){
    const conn = await connect();
    try{
      const sql = "INSERT INTO clients (name, cpf, phone, email, andress) VALUES ($1, $2, $3, $4, $5) RETURNING *";
      const values = [client.name, client.cpf, client.phone, client.email, client.address]

      const res = await conn.query(sql, values);

      return res.rows[0];
    } catch(err){
      throw new err;
    }finally{
      conn.release();
    }
  }

  async getClients(){
    const conn = await connect();

    try{
      const res = await conn.query("SELECT * FROM clients")
      return res.rows;
    }catch(err){
      throw new err;
    } finally{
      conn.release()
    }
  }

  async updateClient(id, client){
    const conn = await connect();
    
    try{
      const sql = "UPDATE clients SET name = $1, cpf = $2, phone = $3, email = $4, andress = $5 WHERE client_id	= $6 RETURNING *";
      const values = [client.name, client.cpf, client.phone, client.email, client.andress, id]

      const res = await conn.query(sql, values);

      return res.rows[0]
    }catch(err){
      throw new err;
    } finally{
      conn.release()
    }
  }

  async getClient(id){
    const conn = await connect();

    try{
      const res = await conn.query("SELECT * FROM clients WHERE client_id = $1", [id])
      return res.rows[0]
    }catch(err){
      throw new err;
    } finally{
      conn.release()
    }
  }

  async deleteClient(id){
    const conn = await connect();

    try{
      const res = await conn.query("DELETE FROM clients WHERE client_id = $1", [id])
    }catch(err){
      throw new err;
    } finally{
      conn.release()
    }
  }
}

export default new ClientRepository()