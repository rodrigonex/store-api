import supplierService from "../services/supplierService.js";


class SupplierController {
  async createSupplier(response, request){
    const supplier = request.body;

    if(!supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.andress){
      throw new Error("Name, CNPJ, Phone, EMail, Andress is required");
    }

    response.send(await supplierService.createSupplier(supplier));
  }
}

export default new SupplierController()