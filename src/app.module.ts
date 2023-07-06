import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
// modules
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
// entities
import { Lesson } from './lesson/lesson.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://admin:zuko2352@own-apps-cluster.4jagm.mongodb.net/graphql-nest-basic?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Lesson],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    LessonModule,
  ],
})
export class AppModule {}
