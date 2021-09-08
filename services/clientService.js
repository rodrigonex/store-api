import clientRepository from "../repositories/client.repository.js"

class ClientService{
  async createClient(client){
    return await clientRepository.insertClient(client)  
  }

  async getClients(){
    return await clientRepository.getClients() 
  }

  async getClient(id){
    return await clientRepository.getClient(id) 
  }

  async deleteClient(id){
    await clientRepository.deleteClient(id) 
  }

  async updateClient(id, client){
    return await clientRepository.updateClient(id, client) 
  }
  
}

export default new ClientService()