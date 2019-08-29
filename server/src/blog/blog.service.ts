import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Post)
    private repo: Repository<Post>
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.repo.find({ relations: ['comments'] });
  }
}
