import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function Page4() {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;
    const selectedValue = state?.selectedValue || 'None';
    console.log(selectedValue)
    const [value, setValue] = useState("");
    const [models, setModels] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/vehicles/models/${selectedValue}`);
                console.log('Response data:', response.data);
                setModels(response.data);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.response ? err.response.data.message : err.message);
            }
        };
        fetchModels();
    }, [selectedValue]);

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/page5', { state: { selectedModel: value } });
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="w-full max-w-lg mx-auto pt-20">
            <div className="form-container">
                <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg custom-form-container" onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold mb-4">Select the model.</h1>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center border border-gray-200 rounded dark:border-gray-700 mb-4">
                            <select
                                value={value}
                                onChange={handleChange}
                                className="w-full p-2 border rounded pl-0"
                            >
                                <option value="">Select a model</option>
                                {models.map((model, index) => (
                                    <option key={index} value={model.id}>
                                        {model.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <button type='submit' className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Page4;