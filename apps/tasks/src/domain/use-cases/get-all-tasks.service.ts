
import { Injectable } from '@nestjs/common';
import { ITask } from '../interfaces/task.interface';
import { BaseUseCase } from '@project-manager-api/domain/use-cases/base-use-case';
import { TasksRepositoryService } from '../../infrastructure/repositories/tasks.repository.service';

@Injectable()
export class GetAllTasksService implements BaseUseCase {
  constructor(private readonly tasksRepository: TasksRepositoryService) {}

  async execute(userId: number): Promise<ITask[]> {
    const tasks = await this.tasksRepository.findAll(userId);

    return tasks;
  }
}
