import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      autoSchemaFile: true,
    }),
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
