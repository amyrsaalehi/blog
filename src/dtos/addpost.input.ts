import { Field, InputType } from '@nestjs/graphql'
import {IsNotEmpty} from 'class-validator'


@InputType()
export class AddPostInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  body: string;
}