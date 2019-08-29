import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Post } from './post.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @Column({ type: 'varchar', nullable: false })
  author: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ name: 'created_at', default: () => `now()` })
  createdAt: Date;

  @ManyToOne(type => Post, post => post.comments, {
    primary: true,
    cascade: ['insert']
  })
  post: Post;
}
