import { gql } from 'apollo-server';

//this describes the structure of the graphql api
//! means the id is required
const typeDefs = gql`
type Chef {
    id: ID! 
    name: String!
    restaurants: [Restaurant!]!    
}

type Restaurant{
    id: ID!
    name: String!    
}

type Query {
    chefs: [Chef!]!
}
`;

export default typeDefs;