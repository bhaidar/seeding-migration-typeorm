import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Post } from '../src/blog/post.entity';
import { Comment } from '../src/blog/comment.entity';

export class SEEDDATA1566763187470 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // create a post
    const post = getRepository(Post).create({
      title: 'Seeding data to database with TypeORM',
      content:
        'In this post I will walk you through a step by step guide on how to seed data to database.'
    });

    await getRepository(Post).save(post);

    // create a comment
    const comment1 = getRepository(Comment).create({
      content: 'Nice job!',
      author: 'Jim Jones',
      email: 'jim.jones@myemail.com',
      post
    });

    // create a comment
    const comment2 = getRepository(Comment).create({
      content: 'Informative blog post!',
      author: 'Bin Nadal',
      email: 'bin.nadal@myemail.com',
      post
    });

    await getRepository(Comment).save(comment1);
    await getRepository(Comment).save(comment2);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
