
import { Injectable } from '@nestjs/common';
import { ITask } from '../interfaces/task.interface';
import { BaseUseCase } from '@project-manager-api/domain/use-cases/base-use-case';
import { TasksRepositoryService } from '../../infrastructure/repositories/tasks.repository.service';

@Injectable()
export class GetTaskByIdService implements BaseUseCase {
  constructor(private readonly tasksRepository: TasksRepositoryService) {}

  async execute(taskId: number): Promise<ITask> {
    const task = await this.tasksRepository.findById(taskId);

    return task;
  }
}
