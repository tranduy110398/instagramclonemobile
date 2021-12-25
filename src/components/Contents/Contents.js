import React from 'react'
import "./Contents.css";
import { Grid } from '@material-ui/core';
import Story from '../Story/Story';
import Posts from '../Posts/Posts';

const Contents =() => {
    return (
        <div>
        <Grid container>
            {/* ****** Empty Space ******  */}

            {/* ****** Empty Space ******  */}

            <Grid item xs={3}>
                <Story/>
                <Posts/>
            </Grid>
            <Grid item xs={2}>
                    {/* <Account/>
                    <Suggestions/> */}
            </Grid>
            <Grid item xs={2}>
                
            </Grid>
        </Grid>
    </div>
    )
}

export default Contents;
