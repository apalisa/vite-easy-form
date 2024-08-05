import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/components/DynamicForm.jsx',
            name: 'DynamicFormGenerator',
            fileName: (format) => `dynamic-form-generator.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', '@mui/material', 'formik', 'yup'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    '@mui/material': 'MaterialUI',
                    formik: 'Formik',
                    yup: 'Yup',
                },
            },
        },
    },
    plugins: [react()],
});

