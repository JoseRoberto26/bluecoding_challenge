import { Card, CardContent, Grid } from '@material-ui/core';
import * as React from 'react';
import { GifImageProps } from '../../types/Gif';
import './Thumbnail.style.scss';

interface ThumbnailProps {
    gifImage: GifImageProps;
    id: string;
}

const Thumbnail = ({gifImage, id}: ThumbnailProps) => { 

    return (
        <Grid key={id} item md={4} className={'grid-item'} >
            <img className='gif-thumbnail' src={gifImage.url}/>
        </Grid>
    )

} 

export default Thumbnail;