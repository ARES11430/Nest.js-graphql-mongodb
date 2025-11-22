import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  @Query(() => LessonType)
  lesson() {
    return {
      id: 'some-id',
      name: 'Physics Class',
      startDate: '2023-03-28T12:00:00Z',
      endDate: new Date().toISOString(),
    };
  }
}
