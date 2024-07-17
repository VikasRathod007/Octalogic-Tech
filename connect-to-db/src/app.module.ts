import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Model } from './entities/model.entity';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';
import { VehicleType } from './entities/vehicle-type.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass',
      database: 'Octalogic_Tech',
      entities: [Category, VehicleType, Model],
      synchronize: false,
    }),TypeOrmModule.forFeature([Category, Model]),
  ],
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class AppModule {}
