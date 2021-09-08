import supplierRepository from "../repositories/supplier.repository.js"

class SupplierService {
  async createSupplier(supplier){
    return await supplierRepository.createSupplier(supplier);
  }

  async getSuppliers() {
    return await supplierRepository.getSuppliers();
  }

  async getSupplier(id) {
    return await supplierRepository.getSupplier(id);
  }

  async deleteSupplier(id) {
    await supplierRepository.deleteSupplier(id);
  }

  async updateSupplier(supplier, id){
    return await supplierRepository.updateSupplier(supplier, id);
  }
  
}

export default new SupplierService()