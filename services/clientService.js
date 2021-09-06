import clientRepository from "../repositories/client.repository"

class ClientService{
  async createClient(client){
    return await clientRepository.insertClient(client)  
  }
}

export default new ClientService()