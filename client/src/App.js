import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Grow, Grid, Typography } from '@material-ui/core';
import memories from './images/memories.png';

import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './styles';

const App = () => {

    const [currentId, setCurrentId] = useState(0);
    const styleClasses = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={styleClasses.appBar} position="static" color="inherit">
                <Typography className={styleClasses.heading} variant="h2" align="center">Memories</Typography>
                <img className={styleClasses.image} src={memories} alt="memories" height="60"></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Posts setCurrentId={setCurrentId}></Posts>
                        </Grid>

                        <Grid item xs={12} sm={4} >
                            <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
