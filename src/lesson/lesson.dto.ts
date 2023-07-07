import { InputType, Field, ID } from '@nestjs/graphql';
import { IsDateString, MinLength, IsArray } from 'class-validator';
/**
 */

@InputType()
export class CreateLessonInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;
}

/**
 * Assign Students to Lesson Input dto
 */

@InputType()
export class AssignStudentsToLessonInput {
  @Field((type) => ID)
  @MinLength(20)
  lessonId: string;

  @Field((type) => [ID])
  @IsArray()
  studentIds: string[];
}
