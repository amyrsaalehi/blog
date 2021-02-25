import { IsNotEmpty, IsOptional } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput {

  @Field()
  @IsNotEmpty()
  id: number;

  @Field()
  // @IsOptional()
  title: string;

  @Field()
  // @IsOptional()
  body: string;
}