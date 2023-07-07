import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateStudentInput } from './student.dto';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

/**
 * GraphQL controller
 * methods are endpoints
 * all methods are POST with query params
 */
@Resolver((returns) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  // fetch all students
  @Query((_) => [StudentType])
  students() {
    return this.studentService.getStudents();
  }

  // fetch students by id
  @Query((_) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudentById(id);
  }

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
