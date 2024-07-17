// src/Page3.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function Page3() {
    const location = useLocation();
    const { state } = location;
    const selectedValue = state?.selectedValue || 'None';
    const [value, setValue] = useState(selectedValue);
    const [vehicles, setVehicles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/vehicles/category/${selectedValue}`);
                console.log('API Response data:', response.data);
                setVehicles(response.data);
                if (response.data.length > 0) {
                    console.log('First vehicle:', response.data[0]);
                    setValue(String(response.data[0].id)); // Set the first vehicle as default
                }
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.response ? err.response.data.message : err.message);
            }
        };
        fetchVehicles();
    }, [selectedValue]);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected value:', value);

        // Only send the ID to the next page
        navigate('/page4', { state: { selectedValue: value } });
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="w-full max-w-lg mx-auto pt-20">
            <div className="form-container">
                <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg custom-form-container">
                    <h1 className="text-2xl font-bold mb-4">Select the type of vehicle.</h1>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center border border-gray-200 rounded dark:border-gray-700 mb-4">
                            <select
                                value={value}
                                onChange={handleChange}
                                className="w-full p-2 border rounded pl-0"
                            >
                                <option value="">Select a vehicle</option>
                                {vehicles.map((vehicle) => (
                                    <option key={vehicle.id} value={vehicle.id}>
                                        {vehicle.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                    <button type='submit' className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Page3;
