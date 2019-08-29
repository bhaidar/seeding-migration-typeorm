import { Controller, Get, Req } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Post } from './post.entity';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async findAll(@Req() req: any): Promise<Post[]> {
    return await this.blogService.findAll();
  }
}
