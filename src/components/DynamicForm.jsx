import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export const DynamicForm = ({ config }) => {
    const validationSchema = yup.object().shape(config.validationSchema);
    const formik = useFormik({
        initialValues: config.initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            {config.fields.map((field) => (
                <div key={field.name} style={{ marginBottom: '16px' }}>
                    {field.type === 'text' && (
                        <TextField
                            fullWidth
                            id={field.name}
                            name={field.name}
                            label={field.label}
                            value={formik.values[field.name]}
                            onChange={formik.handleChange}
                            error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                            helperText={formik.touched[field.name] && formik.errors[field.name]}
                        />
                    )}
                    {field.type === 'select' && (
                        <FormControl fullWidth>
                            <InputLabel id={`${field.name}-label`}>{field.label}</InputLabel>
                            <Select
                                labelId={`${field.name}-label`}
                                id={field.name}
                                name={field.name}
                                value={formik.values[field.name]}
                                onChange={formik.handleChange}
                                error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                            >
                                {field.options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                </div>
            ))}
            <Button color="primary" variant="contained" type="submit">
                Submit
            </Button>
        </form>
    );
};
