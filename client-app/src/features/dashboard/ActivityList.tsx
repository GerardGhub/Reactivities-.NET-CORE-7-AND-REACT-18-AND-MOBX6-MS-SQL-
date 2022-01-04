import { group } from "console";
import React, { Fragment, SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Header, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import ActivityListItem from "./ActivityListItem";


export default function ActivityList() {

    const { activityStore } = useStore();
    const { groupedActivities } = activityStore;

    return (
        <>
            {groupedActivities.map(([group, activities]) => (
                <Fragment key={group}>
                    <Header sub color='teal'>
                        {group}
                    </Header>

                    {activities.map(activity => (
                        <ActivityListItem key={activity.id} activity={activity} />
                    ))}

                </Fragment>
            ))}

        </>



    )
}