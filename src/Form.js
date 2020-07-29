import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const schema = yup.object().shape({
    title: yup.string().required(),
    email: yup.string().required().email(),
    website: yup.string().required().url()
})

const FormApp = () => {

    const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });

    const onFormSubmit = (data) => { console.log("Data => ", data); }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <pre>
                {JSON.stringify(errors, null, 4)}
            </pre>
            <div style={{ margin: '20px 0px' }}>
                <TextField error={Boolean(errors.title)} helperText={errors.title ? errors.title.message : ""} inputRef={register} name="title" label="Title" variant="outlined" />
            </div>
            <div style={{ margin: '20px 0px' }}>
                <TextField error={errors.email ? true : false} helperText={errors.email ? errors.email.message : ""} inputRef={register} name="email" label="Email" variant="outlined" />
            </div>

            <div style={{ margin: '20px 0px' }}>
                <TextField error={errors.website ? true : false} helperText={errors.website ? errors.website.message : ""} inputRef={register} name="website" label="Website" variant="outlined" />
            </div>

            <div style={{ margin: '20px 0px' }}>
                <Button variant="contained" type="submit"> Submit</Button>
            </div>

        </form>
    )
}

export default FormApp;

// npm install @hookform/resolvers
// https://www.malwarebytes.com/
// You9:51 AM
// https://www.npmjs.com/package/yup
// https://www.ccleaner.com/