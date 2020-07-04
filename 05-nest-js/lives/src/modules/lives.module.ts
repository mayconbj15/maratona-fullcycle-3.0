import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LivesController } from '../controllers/lives.controller';
import { Live } from '../entities/live.entity';
import { LivesService } from 'src/services/lives.service';

@Module({
  imports: [TypeOrmModule.forFeature([Live])],
  providers: [LivesService],
  controllers: [LivesController],
})
export class LivesModule {}
