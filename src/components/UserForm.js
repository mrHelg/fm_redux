import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as UserActionCreators from '../actions/userCreators';

const UserForm = (props) => {
  const { createUserReqAction } = props;
  const onSubmit = (values, formikBag) => {
    createUserReqAction(values);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthday: '',
        isMale: true,
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name="firstName" placeholder="firstName" />
        <Field name="lastName" placeholder="lastName" />
        <Field name="email" placeholder="email" />
        <Field name="password" placeholder="password" />
        <Field name="birthday" placeholder="birthday" />
        <Field name="isMale" placeholder="isMale" type="checkbox" />
        <button type="submit">create user</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createUserReqAction: (values) =>
    dispatch(UserActionCreators.createUserRequest(values)),
});

export default connect(undefined, mapDispatchToProps)(UserForm);
