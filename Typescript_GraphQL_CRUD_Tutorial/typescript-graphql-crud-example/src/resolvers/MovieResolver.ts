import { Resolver, Mutation, Query, Arg, Int} from "type-graphql";
import { Movie } from "../entity/Movie";

@Resolver()
export class MovieResolver {
    @Mutation(() => Boolean)

    async createMovie(
        @Arg('the_best_movie', () => String) title: string,
        @Arg('minutes', () => Int) minutes: number
    )
    {
        await Movie.insert({title, minutes});
        console.log(title);
        return true;    
    }

    @Query(() => )
    movies() {return Movie.find();}
}