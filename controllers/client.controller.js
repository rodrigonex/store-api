import ClientService from "../services/clientService.js";

class ClientController {
  async createClient(req, res, next){
    let client = req.body;
    
    try{
      if(!client.name || !client.cpf || !client.phone || !client.email || !client.address){
        throw new Error("Name, cpf, phone, email e address são obrigatorios.")
      } 
      
      res.send(await ClientService.createClient(client));

      logger.info(`POST / client ${JSON.stringify(client)}`)
    } catch (err){
      return next(err)
    }
  }

  async getClients(req, res, next){
    try{
      res.send(await ClientService.getClients());
      logger.info("POST / client")
    }catch(err){
      next(err)
    }
  }

  async getClient(req, res, next){
    try{
      res.send(await ClientService.getClient(req.params.id));
      logger.info("POST / client")
    }catch(err){
      next(err)
    }
  }
}

export default new ClientController()