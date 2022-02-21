import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Button, Grid } from "semantic-ui-react";
import LoadingComponent from '../../app/layout/LoadingComponent';
import { PagingParams } from '../../app/models/pagination';
import { useStore } from '../../app/stores/store';
import ActivitiyFilters from './ActivityFilters';
import ActivityList from './ActivityList';



export default observer(function ActivityDashboard() {

    const { activityStore } = useStore();
    const { loadActivities, activityRegistry, setPagingParams, pagination } = activityStore;
    const [loadingNext, setLoadingNext] = useState(false);

    function handleGetNext() {
        setLoadingNext(true);
        setPagingParams(new PagingParams(pagination!.currentPage + 1))
        loadActivities().then(() => setLoadingNext(false));
    }



    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry.size, loadActivities])



    if (activityStore.loadingInitial && !loadingNext) return <LoadingComponent content='Loading activities ...' />


    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
                <Button
                    floated='right'
                    content='More...'
                    positive
                    onClick={handleGetNext}
                    loading={loadingNext}
                    disabled={pagination?.totalPages === pagination?.currentPage}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivitiyFilters />
            </Grid.Column>
        </Grid>
    )
})