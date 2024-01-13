import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cats.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}
  create(createCatDto: CreateCatDto) {
    if (!createCatDto.photo) {
      createCatDto.photo = 'https://cataas.com/cat';
    }
    return this.catsRepository.save(createCatDto);
  }
  empty() {
    return this.catsRepository.clear();
  }
  fill() {
    const mockCats: CreateCatDto[] = [
      {
        name: 'plouf',
        birthdate: '2021-01-01',
        race: 'european',
        gender: 'male',
        city: 'London',
        description: 'A very cute cat',
        adoptionStatus: 'Adoptable',
      },
      {
        name: 'plume',
        birthdate: '2020-01-23',
        race: 'maltais',
        gender: 'female',
        city: 'Paris',
        description: 'The cutest cat',
        adoptionStatus: 'Adoptable',
      },
      {
        name: 'moogly',
        birthdate: '2020-04-11',
        race: 'central asian',
        gender: 'male',
        city: 'New York',
        description: 'The most beautiful cat',
        adoptionStatus: 'Adoptable',
      },
    ];
    for (let cat of mockCats) {
      this.create(cat);
    }
    return 'This action fills the database with cats';
  }
  findAll() {
    return this.catsRepository.find();
  }

  findOne(id: number) {
    return this.catsRepository.findOneBy({ id });
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return this.catsRepository.update(id, updateCatDto);
  }

  remove(id: number) {
    return this.catsRepository.delete(id);
  }
}
