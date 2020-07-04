import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Live } from '../entities/live.entity';

@Injectable()
export class LivesService {
  constructor(
    @InjectRepository(Live)
    private liveRepository: Repository<Live>,
  ) {}

  async findAll(): Promise<Live[]> {
    return await this.liveRepository.find();
  }

  async create(live: Live): Promise<Live> {
    return await this.liveRepository.save(live);
  }

  async update(live: Live): Promise<UpdateResult> {
    return await this.liveRepository.update(live.id, live);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.liveRepository.delete(id);
  }
}
