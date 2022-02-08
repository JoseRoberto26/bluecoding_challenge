import { CircularProgress, Container, Grid } from '@material-ui/core';
import useGiphyApi from '../../hooks/useGiphyApi';
import React, { useEffect } from 'react'; 
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import './HomePage.style.scss';
import FormComponent from '../../components/FormComponent/FormComponent';

const HomePage = () => { 

    const {getGifs, data, loading, error} = useGiphyApi();

    const gifResolutionTag = 'fixed_width';

    const handleSearch = (query?: string) => { 
        getGifs(query);
    }

    useEffect(() => { 
        getGifs();
    }, [])

    return (
        <Container className={'home-container'} maxWidth={'xl'}>
            <h1>Welcome to Get Giphy! Check out the trending GIFs or search for your favorite GIF right here!</h1>
            <div className='search-form-container'>
                <FormComponent handleSearch={handleSearch}/>
            </div>
            {loading ? (<CircularProgress/>) : 
            (
                
                <Grid className={'grid-container'} container spacing={4} alignItems="stretch">
                {
                    data?.map(gif => ( 
                        <Thumbnail id={gif.id} gifImage={
                            gif.images[gifResolutionTag]
                        } />
                    ))
                }
                
                </Grid>
                
            )
        }
        </Container>
    )

}

export default HomePage;