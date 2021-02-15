import gql from 'graphql-tag';

export const articleQuery = gql`
query articleQuery {  
    articles {
        id
        title
        description
        cover {
            url
        }
    }
}
`
