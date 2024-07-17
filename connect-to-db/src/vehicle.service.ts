import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { Model } from './entities/model.entity';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Model)
    private modelRepository: Repository<Model>
  ) { }
  
    


  async getCategoriesByVehicleTypeId(vehicleTypeId: number): Promise<Category[]> {
    const categories = await this.categoryRepository.find({
      where: { vehicle_type_id: vehicleTypeId },
      relations: ['vehicleType'],
    });

    if (categories.length === 0) {
      throw new NotFoundException(`No categories found with Vehicle Type ID ${vehicleTypeId}`);
    }

    return categories;
  }
  async getModelsByCategoryId(categoryID: number): Promise<Model[]> {
    const model = await this.modelRepository.find({
      where: { category_id: categoryID },
      relations: ['category'],
    });

    if (model.length === 0) {
      throw new NotFoundException(`No categories found with Vehicle Type ID ${categoryID}`);
    }

    return model;
  }
}
