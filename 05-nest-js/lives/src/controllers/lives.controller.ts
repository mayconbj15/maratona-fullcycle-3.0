import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { Live } from '../entities/live.entity';
import { LivesService } from '../services/lives.service';
import { identity } from 'rxjs';

@Controller('lives')
export class LivesController {
  constructor(private livesService: LivesService) {}

  @Get()
  getAll(): Promise<Live[]> {
    return this.livesService.findAll();
  }

  @Post()
  async create(@Body() liveData: Live): Promise<any> {
    return this.livesService.create(liveData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() liveData: Live): Promise<any> {
    liveData.id = Number(id);
    console.log('Update #' + liveData.id);
    return this.livesService.update(liveData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.livesService.delete(id);
  }
}
