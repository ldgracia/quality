import { prueba2Service } from "../../services";
import { Iprueba2Facade } from "./interface";


/**
 * @export
 * @implements {Iprueba2ModelService}
 */
const prueba2Facade: Iprueba2Facade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof prueba2Facade
     */
    async findAll(): Promise<any[]> {

        let prueba2 = await prueba2Service.findAll();
        return prueba2;
    }
}

export default prueba2Facade;