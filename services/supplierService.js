import supplierRepository from "../repositories/supplier.repository"

class SupplierService {
  async createSupplier(supplier){
    return supplierRepository.createSupplier(supplier);
  }
}

export default new SupplierService()