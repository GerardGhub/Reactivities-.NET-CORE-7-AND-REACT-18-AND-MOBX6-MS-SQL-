import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Item, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import ActivityListItem from "./ActivityListItem";


export default function ActivityList() {

    const {activityStore} = useStore();
    const {activitiesByDate} = activityStore;




    return (
        <Segment>
            <Item.Group divided>
                {activitiesByDate.map(activity => (
                    <ActivityListItem  key={activity.id} activity={activity}/>
                ))}
            </Item.Group>
        </Segment>
    )
}