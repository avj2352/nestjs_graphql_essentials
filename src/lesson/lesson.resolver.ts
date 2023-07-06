import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateLessonInput } from './lesson.dto';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

/**
 * GraphQL controller
 * methods are endpoints
 * all methods are of POST with query params
 */
@Resolver((returns) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  // define queries
  @Query((_) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLessonById(id);
  }

  // mutation - create lesson
  @Mutation((returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }
}
