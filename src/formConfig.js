import * as yup from 'yup';

export const formConfig = {
    initialValues: {
        name: '',
        age: '',
        gender: '',
    },
    validationSchema: {
        name: yup.string().required('Name is required'),
        age: yup.number().required('Age is required').min(0, 'Age must be greater than zero'),
        gender: yup.string().required('Gender is required'),
    },
    fields: [
        { name: 'name', type: 'text', label: 'Name' },
        { name: 'age', type: 'text', label: 'Age' },
        {
            name: 'gender',
            type: 'select',
            label: 'Gender',
            options: [
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other' },
            ],
        },
    ],
};
