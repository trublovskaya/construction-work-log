import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WorkEntryModule } from './work-entry/work-entry.module';
import { WorkTypeModule } from './work-type/work-type.module';
import dbConfig from './config/db.config';
import { DbConfig } from './config/types';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [dbConfig] }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const db = configService.get<DbConfig>('db');

        return {
          ...db,
          autoLoadEntities: true,
        };
      },
    }),
    WorkEntryModule,
    WorkTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
