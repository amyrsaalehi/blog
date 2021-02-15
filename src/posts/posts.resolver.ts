import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { AddPostInput } from '../dtos/addpost.input';
// import {  } from './dto/update-task.input';
import { Post } from '../models/post.model';

@Resolver('Posts')
export class PostsResolver {
  constructor(
    private readonly postService: PostsService
  ) {}

  @Query(type => [Post])
  async getPosts() {
    return this.postService.getPosts()
  }

  @Query(type => Post)
  async getPost(
    @Args('id') id: number
  ) {
    return this.postService.getPost(id)
  }

  @Mutation(type => [Post])
  async addPost(
    @Args('input') input: AddPostInput
  ) {
    return this.postService.addPost(input)
  }

  @Mutation(type => [Post])
  async deletePost(
    @Args('id') id: number
  ) {
    return this.postService.deletePost(id);
  }
}
