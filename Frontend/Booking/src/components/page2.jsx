import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
function Page2() {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const firstName = state?.firstname || 'Guest';
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/page3', { state: { selectedValue } })

    }
    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (event) => {
        setSelectedValue(event.target.value)
    }

    return (
        <div className="w-full max-w-lg mx-auto pt-20">
            <div className="form-container">
                <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg custom-form-container" onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold mb-4">Hey {firstName}! Select the number of wheels.</h1>
                    <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 mb-4">
                        <input
                            id="radio-2"
                            type="radio"
                            value="2"
                            name="wheels"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">2 Wheels</label>
                    </div>
                    <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 mb-4">
                        <input
                            id="radio-4"
                            type="radio"
                            value="4"
                            name="wheels"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="radio-4" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">4 Wheels</label>
                    </div>
                    <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Page2;
