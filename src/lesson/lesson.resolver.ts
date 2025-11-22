import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(() => LessonType)
  lesson() {
    return {
      id: 'some-id',
      name: 'Physics Class',
      startDate: '2023-03-28T12:00:00Z',
      endDate: new Date().toISOString(),
    };
  }

  createLesson(name: string, startDate: string, endDate: string) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }

  getLessons() {
    return this.lessonService.getLessons();
  }

  getLessonById(id: string) {
    return this.lessonService.getLessonById(id);
  }
}
