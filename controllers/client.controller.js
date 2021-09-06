import clientService from "../services/clientService.js";

class ClientController {
  async createClient(req, res, next){
    let client = req.body;
    
    try{
      if(!client.name || !client.cpf || !client.phone || !client.email || !client.address){
        throw new Error("Name, cpf, phone, email e address são obrigatorios.")
      } 
      
      res.send(await clientService.createClient(client));

      logger.info(`POST / client ${JSON.stringify(client)}`)
    } catch (err){
      return next(err)
    }
  }
}

export default new ClientController()