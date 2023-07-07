/**
 * Defining Student Schema type
 * @ObjectType is similar to @Entity
 * but comes with super-powers
 */
import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  @Field((_) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
