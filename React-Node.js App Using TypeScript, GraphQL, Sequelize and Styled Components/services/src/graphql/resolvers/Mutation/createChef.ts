import { Chef } from "#root/db/models";

const createChefResolver = (context: any, {name}: {name: string}) => {
    return Chef.create({ name });
    //This is why apollo is useful
    //If you were to insert using SQL you would need: INSERT INTO...
    //and check for sql injection, etc. but this handles that for you
}

export default createChefResolver;