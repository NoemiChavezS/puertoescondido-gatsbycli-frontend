import * as React from "react";
import SliderContainer from "./SliderContainer"
import { useState } from "react"
import {graphql, navigate, useStaticQuery} from "gatsby";
import PostCard from "./PostCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PropertyCard from "./PropertyCard";
import Button from "@mui/material/Button";
import {ArrowCircleRightOutlined} from "@mui/icons-material";

const title:string = "Últimas entradas";
const subtitle:string = "De nuestro blog";

const LatestPosts = () => {
    const [ posts, setPosts ] = useState<any>([]);

    const data = useStaticQuery(graphql`
        query LatestPosts {
            allSanityPost(limit: 4) {
                edges {
                    node {
                        title
                        slug {
                            current
                        }
                        categories {
                            title
                        }
                        author {
                            name
                        }
                        mainImage {
                            asset {
                                gatsbyImageData(
                                    fit: FILLMAX,
                                    placeholder: BLURRED,
                                    breakpoints: [750, 1080, 1366, 1920],
                                    height: 200,
                                    formats: [AVIF, WEBP]
                                )
                            }
                        }
                    }
                }
            }
        }
    `);

    React.useEffect(() => {
        if( data ) {
            setPosts( data.allSanityPost.edges )
        }
    },[ data ])

    return(
        <>
            {
                posts.length > 0 && (
                    <div style={
                        fullScreen ? fullScreenStyles : {}
                    }>
                        {
                            /*
                            <SliderContainer
                            title={ title }
                            fullScreen={ fullScreen }
                            attached={ attached }
                            subtitle={ subtitle }
                            data={ properties }
                            viewMoreButtonRedirectPath="propiedades"
                        />
                             */
                        }

                        <Container sx={{
                            pl: 2,
                        }}
                                   maxWidth="xl"
                        >

                            <Grid
                                container
                                justifyContent="space-between"
                                spacing={ 1 }
                            >
                                {
                                    posts.map((post:any, index:number) => (
                                        <Grid item xs={ 12 }
                                              md={ 3 } >
                                            <PostCard data={post.node} key={index}/>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid container justifyContent="right" display="flex">
                                <Grid item>
                                    <Button
                                        startIcon={ <ArrowCircleRightOutlined/> }
                                        sx={{ textTransform: 'none' }}
                                        color="primary"
                                        onClick={ () => navigate('/blog')  }
                                        variant="contained"
                                    >
                                        { 'Explorar blog' }
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                )
            }
        </>
    )
}


export default LatestPosts;