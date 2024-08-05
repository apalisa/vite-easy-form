import * as yup from 'yup';

export const formConfig = {
    initialValues: {
        name: '',
        age: '',
        gender: '',
        agreeToTerms: false,
        comments: '',
    },
    validationSchema: yup.object({
        name: yup.string().required('Name is required'),
        age: yup.number().required('Age is required').min(0, 'Age must be greater than zero'),
        gender: yup.string().required('Gender is required'),
        agreeToTerms: yup.bool().oneOf([true], 'You must agree to the terms'),
        comments: yup.string().required('Comments are required'),
    }),
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
        { name: 'agreeToTerms', type: 'checkbox', label: 'Agree to Terms' },
        { name: 'comments', type: 'textarea', label: 'Comments' },
    ],
};
