/**
 * Defining Lesson Schema type
 * @ObjectType is similar to @Entity
 * but comes with super-powers
 */

import { Field, ObjectType, ID } from '@nestjs/graphql';
import { StudentType } from 'src/student/student.type';

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

  @Field((type) => [StudentType])
  students: string[];
}
