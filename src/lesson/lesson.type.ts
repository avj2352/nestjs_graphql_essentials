/**
Defining Lesson Schema type
@ObjectType is similar to @Entity
*/

import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType('Lesson')
export class LessonType {
  @Field((_) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
