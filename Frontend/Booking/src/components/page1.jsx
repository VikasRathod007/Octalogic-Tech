import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './page1.css';

function Page1() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/page2', { state: { firstname: firstName } });
    };

    return (
        <div className="w-full max-w-lg mx-auto pt-20">
            <div className="form-container">
                <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg custom-form-container" onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold mb-4">First, what's your name?</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor='firstname'>
                            First Name
                        </label>
                        <input
                            className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100"
                            type="text"
                            id='firstname'
                            name='firstname'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor='lastname'>
                            Last Name
                        </label>
                        <input
                            className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100"
                            type="text"
                            id='lastname'
                            name='lastname'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <button type='submit' className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Page1;
