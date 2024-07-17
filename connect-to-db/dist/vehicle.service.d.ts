import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { Model } from './entities/model.entity';
export declare class VehicleService {
    private categoryRepository;
    private modelRepository;
    constructor(categoryRepository: Repository<Category>, modelRepository: Repository<Model>);
    getCategoriesByVehicleTypeId(vehicleTypeId: number): Promise<Category[]>;
    getModelsByCategoryId(categoryID: number): Promise<Model[]>;
}
