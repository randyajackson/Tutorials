import { Resolver, Mutation, Query, Arg, Int, InputType, Field} from "type-graphql";
import { Movie } from "../entity/Movie";

@InputType()
class MovieInput {
    @Field()
    title: string;

    @Field(() => Int)
    minutes: number;
}

//this is used so that you can update certain fields as opposed to all or nothing
@InputType()
class MovieUpdateInput {
    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => Int, { nullable: true })
    minutes?: number;
}

@Resolver()
export class MovieResolver {
    //create
    @Mutation(() => Movie)

    async createMovie(@Arg("options", () => MovieInput) options: MovieInput){
                
                const movie = await Movie.create(options).save();
                return movie;  

            }
            // @Arg('the_best_movie', () => String) title: string,
            // @Arg('minutes', () => Int) minutes: number
    
    //read
    @Query(() => [Movie] )
    movies() {return Movie.find();}

    //update
    @Mutation( () => Boolean)
    async updateMovie(@Arg('id', () => Int) id: number,
    @Arg("input", () => MovieUpdateInput) input: MovieUpdateInput
    ){
        await Movie.update({id}, input);
        return true;
    }

    //delete
    @Mutation( () => Boolean)
    async deleteMovie(
        @Arg("id", () => Int) id: number
    ){
        Movie.delete({id});
        return true;
    }
        
    

    
}