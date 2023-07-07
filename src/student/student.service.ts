import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ulid } from 'ulid';
import { CreateStudentInput } from './student.dto';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  // dependencies
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  getStudentById(id: string): Promise<Student> {
    return this.studentRepository.findOneBy({ id });
  }

  createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const student = this.studentRepository.create({
      id: ulid(),
      firstName,
      lastName,
    });
    return this.studentRepository.save(student);
  }
}
