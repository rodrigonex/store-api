import supplierService from "../services/supplierService.js";
class SupplierController {
  async createSupplier(request, response){
    const supplier = request.body;

    if(!supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.andress){
      throw new Error("Name, CNPJ, Phone, EMail, Andress is required");
    }

    response.send(await supplierService.createSupplier(supplier));
  }

  async getSuppliers(request, response) {
    response.send(await supplierService.getSuppliers())
  }

  async getSupplier(request, response) {
    const {id} = request.params;
    response.send(await supplierService.getSupplier(id))
  }

  async deleteSupplier(request, response) {
    const {id} = request.params;
    await supplierService.deleteSupplier(id);
    response.end();
  }

  async updateSupplier(request, response) {
    const {id} = request.params;
    const supplier = request.body;

    if(!supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.andress){
      throw new Error("Name, CNPJ, Phone, EMail, Andress is required");
    }

    response.send(await supplierService.updateSupplier(supplier, id));
  }
}

export default new SupplierController()