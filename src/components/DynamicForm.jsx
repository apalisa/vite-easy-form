import React from 'react';
import { useFormik } from 'formik';
import { TextField, Checkbox, FormControlLabel, Select, MenuItem, Button, TextareaAutosize } from '@mui/material';

const DynamicForm = ({ config }) => {
    const { initialValues, validationSchema, fields } = config;
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const renderField = (field) => {
        switch (field.type) {
            case 'text':
                return (
                    <TextField
                        key={field.name}
                        id={field.name}
                        name={field.name}
                        label={field.label}
                        value={formik.values[field.name]}
                        onChange={formik.handleChange}
                        error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                        helperText={formik.touched[field.name] && formik.errors[field.name]}
                    />
                );
            case 'select':
                return (
                    <TextField
                        key={field.name}
                        select
                        id={field.name}
                        name={field.name}
                        label={field.label}
                        value={formik.values[field.name]}
                        onChange={formik.handleChange}
                        error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                        helperText={formik.touched[field.name] && formik.errors[field.name]}
                    >
                        {field.options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                );
            case 'checkbox':
                return (
                    <FormControlLabel
                        key={field.name}
                        control={
                            <Checkbox
                                id={field.name}
                                name={field.name}
                                checked={formik.values[field.name]}
                                onChange={formik.handleChange}
                            />
                        }
                        label={field.label}
                    />
                );
            case 'textarea':
                return (
                    <TextareaAutosize
                        key={field.name}
                        id={field.name}
                        name={field.name}
                        label={field.label}
                        value={formik.values[field.name]}
                        onChange={formik.handleChange}
                        style={{ width: '100%', minHeight: '100px' }}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            {fields.map((field) => (
                <div key={field.name} style={{ marginBottom: '16px' }}>
                    {renderField(field)}
                </div>
            ))}
            <Button color="primary" variant="contained" type="submit">
                Submit
            </Button>
        </form>
    );
};