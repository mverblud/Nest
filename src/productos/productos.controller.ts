import { Body, Controller, Post, Get } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductosDto } from '../dto/create-productos.dto';
import { Productos } from '../interfaces/productos.interface';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) { }

    @Post()
    async create(@Body() createProductosDto: CreateProductosDto) {
        this.productosService.create(createProductosDto);
    }

    @Get()
    async findAll(): Promise<Productos[]> {
        return this.productosService.findAll();
    }

}
