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
}

export default new SupplierRepository()