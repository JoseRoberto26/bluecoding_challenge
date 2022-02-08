import { Box, IconButton, TextField } from '@material-ui/core';
import React, { useState } from 'react'; 
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

interface FormComponentProps {
    handleSearch: (query?: string) => void;
}

const FormComponent = ( {handleSearch}: FormComponentProps ) => { 

    const [ query, setQuery] = useState<string>('');

    const handleChangeQuery = (event: any) => { 
        setQuery(event.target.value);
    }

    const clear =() => {
        setQuery('')
        handleSearch();
    }

    return ( 
        <Box component={"form"} >
            <div>
                <TextField  id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                    onChange={handleChangeQuery}
                />
                <IconButton onClick={() => handleSearch(query)}>
                    <SearchIcon/>
                </IconButton>
                <IconButton disabled={query ? false : true} onClick={() => clear()}>
                    <ClearIcon/>
                </IconButton>
            </div>
        </Box>
    )
}

export default FormComponent