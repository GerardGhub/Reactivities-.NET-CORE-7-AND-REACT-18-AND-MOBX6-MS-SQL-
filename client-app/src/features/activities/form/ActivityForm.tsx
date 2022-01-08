import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, FormField, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from 'uuid';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';



export default observer(function ActivityForm() {
    const history = useHistory();
    const { activityStore } = useStore();
    const { createActivity, updateActivity,
        loading, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams<{ id: string }>();

    const [activity, setActivity] = useState({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    const validationSchema = Yup.object({
        title: Yup.string().required('The activity title is required')
    })

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity]);



    // function handleSubmit() {
    //    if(activity.id.length === 0 ){
    //        let newActivity = {
    //            ...activity,
    //            id: uuid()
    //        };
    //        createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`))
    //    } else {
    //        updateActivity(activity).then(() => history.push(`/activities/${activity.id}`))
    //    }
    // }

    // function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    //     const { name, value } = event.target;
    //     setActivity({ ...activity, [name]: value })
    // }

    if (loadingInitial) return <LoadingComponent content='Loading activity...' />

    return (
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
                initialValues={activity}
                onSubmit={values => console.log(values)}>
                {({ handleSubmit }) => (
                    <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                        <FormField>
                            <Field placeholder='Title' name='title' />
                            <ErrorMessage name='title'
                                render={error => <Label basic color='red' content={error} />} />
                        </FormField>

                        <Field placeholder='Description' name='description' />
                        <Field placeholder='Category' name='category' />
                        <Field type="date" placeholder='Date' name='date' />
                        <Field placeholder='City' name='city' />
                        <Field placeholder='Venue' name='venue' />
                        <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                        <Button as={Link} to='/activities' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>

        </Segment>
    )
})