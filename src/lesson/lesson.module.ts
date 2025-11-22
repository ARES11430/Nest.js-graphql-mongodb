import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver'; // <--- Import this

@Module({
  providers: [LessonResolver],
})
export class LessonModule {}
