import { Iprueba2Service } from "./interface";
import prueba2 from "../../models/prueba2.model";
import * as Kafka from "../../config/stream/kafka"

/**
 * @export
 * @implements {Iprueba2ModelService}
 */
const prueba2Service: Iprueba2Service = {
    /**
     * @returns {Promise < any[] >}
     * @memberof prueba2Facade
     */
    async findAll(): Promise<any[]> {
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        return prueba2.findAll();
    }
}

export default prueba2Service;