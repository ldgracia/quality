import { Iprueba1Service } from "./interface";
import prueba1 from "../../models/prueba1.model";
import * as Kafka from "../../config/stream/kafka"

/**
 * @export
 * @implements {Iprueba1ModelService}
 */
const prueba1Service: Iprueba1Service = {
    /**
     * @returns {Promise < any[] >}
     * @memberof prueba1Facade
     */
    async findAll(): Promise<any[]> {
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        if(1==1)
        return prueba1.findAll();
        else
        return prueba1.findAll();;
    }
}

export default prueba1Service;