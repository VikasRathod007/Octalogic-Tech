import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Datepicker from "react-tailwindcss-datepicker";

function Page5() {
    const location = useLocation();
    const { state } = location;
    const selectedModel = state?.selectedModel || 'None';
    const navigate = useNavigate();  // Add the useNavigate hook

    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/page6', { state: { selectedModel, dateRange: value } }); // Navigate to Page6 with state
    };

    return (
        <div className="w-full max-w-lg mx-auto pt-20">
            <div className="form-container">
                <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg custom-form-container">
                    <h1 className="text-2xl font-bold mb-4">Select Dates</h1>
                    <p className="mb-4">Selected Model: {selectedModel}</p>
                    <Datepicker
                        value={value}
                        onChange={handleValueChange}
                        placeholder="Select date range"
                        color="blue"
                        useRange={false}
                        readOnly={true}
                    />
                    <button type='submit' className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 mt-4">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Page5;
