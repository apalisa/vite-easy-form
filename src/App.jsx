import React from 'react';
import { DynamicForm } from './components/DynamicForm';
import { formConfig } from './formConfig';

export const App = () => {
    return (
        <div className="App">
            <h1>Dynamic Form Generator</h1>
            <DynamicForm config={formConfig} />
        </div>
    );
}
