import { connect } from "./db.js"

class SupplierRepository {
  async createSupplier(supplier){
    const conn = await connect();

    try{
      const sql = "INSERT INTO suppliers (name, cnpj, phone, email, andress) VALUES ($1, $2, $3, $4, $5) RETURNING *";
      const values = [supplier.name, supplier.cnpj, supplier.phone, supplier.email, supplier.andress];

      const res = await conn.query(sql, values);

      return res.rows[0];

    } catch(err){
      throw new err;
    }finally{
      conn.release();
    }
  }

  async getSuppliers(){
    const conn = await connect();
    
    try{
      const res = await conn.query("SELECT * FROM suppliers")

      return res.rows;
    } catch(err){
      throw new err;
    }finally{
      conn.release();
    }
  }

  async getSupplier(id){
    const conn = await connect();
    
    try{
      const res = await conn.query("SELECT * FROM suppliers WHERE supplier_id = $1", [id])

      return res.rows[0];
    } catch(err){
      throw new err;
    }finally{
      conn.release();
    }
  }

  async deleteSupplier(id){
    const conn = await connect();
    
    try{
      await conn.query("DELETE FROM suppliers WHERE supplier_id = $1", [id]);

    } catch(err){
      throw new err;
    }finally{
      conn.release();
    }
  }

  async updateSupplier(supplier, id) {
    const conn = await connect();
    
    try{
      const sql = "UPDATE suppliers SET name = $1, cnpj = $2, phone = $3, email = $4, andress = $5 WHERE supplier_id = $6 RETURNING *";
      const values = [supplier.name, supplier.cnpj, supplier.phone, supplier.email, supplier.andress, id];

      const res = await conn.query(sql, values);

      return res.rows[0];
    } catch(err){
      throw new err;
    }finally{
      conn.release();
    }
  }
}

export default new SupplierRepository()