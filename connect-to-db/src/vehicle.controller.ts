import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { VehicleService } from './vehicle.service';

@Controller('vehicles')
export class VehicleController {
  constructor(private vehicleService: VehicleService) { }

  @Get('category/:id')
  async getCategory(@Param('id') id: string) {
    try {
      const categoryId = parseInt(id, 10);
      return await this.vehicleService.getCategoriesByVehicleTypeId(categoryId);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Error in getCategory:', error);
      throw new Error(`An error occurred while fetching the category: ${error.message}`);
    }
  }
  @Get('/models/:id')
  async getModels(@Param('id') id: string) {
    const modelId = parseInt(id, 10);
    return await this.vehicleService.getModelsByCategoryId(modelId);
  }
}