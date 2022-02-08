export type GifImageProps =  { 
    height: number;
    width: number;
    url: string;
}

export type GifImageObject = { 
    [T: string]: GifImageProps;
}

export type Gif = { 
    id: string;
    images: GifImageObject;
    title: string; 
    url: string;
}