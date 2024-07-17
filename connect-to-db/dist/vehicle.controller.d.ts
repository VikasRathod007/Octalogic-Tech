import { VehicleService } from './vehicle.service';
export declare class VehicleController {
    private vehicleService;
    constructor(vehicleService: VehicleService);
    getCategory(id: string): Promise<import("./entities/category.entity").Category[]>;
    getModels(id: string): Promise<import("./entities/model.entity").Model[]>;
}
