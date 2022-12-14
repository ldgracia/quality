import { prueba1Service } from "../../services";
import { Iprueba1Facade } from "./interface";


/**
 * @export
 * @implements {Iprueba1ModelService}
 */
const prueba1Facade: Iprueba1Facade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof prueba1Facade
     */
    async findAll(): Promise<any[]> {

        let prueba1 = await prueba1Service.findAll();
        return prueba1;
    }
}

export default prueba1Facade;