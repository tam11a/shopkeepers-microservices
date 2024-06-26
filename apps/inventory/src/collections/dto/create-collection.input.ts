import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateCollectionInput {
  @Field({
    nullable: false,
  })
  label: string;

  @Field()
  description: string;

  @Field(() => [Int])
  products?: number[];
}
