import { HttpException, Injectable } from '@nestjs/common';
import { AddPostInput } from '../dtos/addpost.input'

import { POSTS } from '../mocks/posts.mock'
import { Post } from '../models/post.model'

@Injectable()
export class PostsService {
  posts = POSTS

  getPosts() {
    return this.posts
  }

  getPost(id: number) {
    return this.posts.find(post => post.id === id)
  }

  async addPost(input: AddPostInput): Promise<Post[]> {
    const lastPost = this.posts.slice(-1).pop()
    const post: Post = {
      id: lastPost.id + 1,
      title: input.title,
      body: input.body,
    }

    this.posts.push(post)
    return this.posts;
  }

  deletePost(id: number): Post[] {
    const postIndex = this.posts.findIndex(post => post.id === id)
    if(postIndex === -1) {
      throw new HttpException('Post Not Found', 404)
    }

    this.posts.splice(postIndex, 1);
    return this.posts
  }
}
