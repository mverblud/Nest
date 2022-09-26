import { Injectable } from '@nestjs/common';

import { Productos } from '../interfaces/productos.interface';

@Injectable()
export class ProductosService {
    private readonly productos: Productos[] = [];
    
    create(producto: Productos) {
        this.productos.push(producto);
    }

    findAll(): Productos[] {
        return this.productos;
    }
}
