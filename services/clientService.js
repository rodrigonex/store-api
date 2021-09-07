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
  
}

export default new ClientService()