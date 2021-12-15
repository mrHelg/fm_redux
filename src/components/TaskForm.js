import React from 'react';
import {Formik, Form, Field} from 'formik';
import {connect} from 'react-redux';
import { createTask } from '../actions/todoCreators';

const TaskForm = (props) => {
  const {createTaskAction} = props;
  const onSubmit = (values, formikBag) => {
    createTaskAction(values);
    formikBag.resetForm();
  }
  return (
    <Formik initialValues={{body:'', isDone:false}}  
    onSubmit={onSubmit}>
      <Form>
        <Field name='body'/>
        <input type='submit' value='Add task'/>
        <input type='reset' value='Reset'/>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createTaskAction: (values)=> dispatch(createTask(values))
})


export default connect(undefined, mapDispatchToProps)(TaskForm);
