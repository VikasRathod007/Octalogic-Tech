"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("./entities/category.entity");
const model_entity_1 = require("./entities/model.entity");
const vehicle_controller_1 = require("./vehicle.controller");
const vehicle_service_1 = require("./vehicle.service");
const vehicle_type_entity_1 = require("./entities/vehicle-type.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'pass',
                database: 'Octalogic_Tech',
                entities: [category_entity_1.Category, vehicle_type_entity_1.VehicleType, model_entity_1.Model],
                synchronize: false,
            }), typeorm_1.TypeOrmModule.forFeature([category_entity_1.Category, model_entity_1.Model]),
        ],
        controllers: [vehicle_controller_1.VehicleController],
        providers: [vehicle_service_1.VehicleService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map