import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>
  ){}

  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    const product = await this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
  }

  findAll(): Promise<ProductEntity[] | null> {
    const products = this.productRepository.find();

    return products;
  }

  async findOne(id: number): Promise<ProductEntity | null> {
    const product = await this.productRepository.findOne(id);
    return product;
  } 

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productRepository.update(id, updateProductDto);
  }

  async remove(id: number) {
    const product = this.productRepository.delete(id);
    return product;
  }
}
