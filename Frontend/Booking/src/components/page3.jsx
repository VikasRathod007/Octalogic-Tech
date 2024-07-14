import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Page3() {
    const location = useLocation();
    const { state } = location;
    const selectedValue = state?.selectedValue || 'None';
    const [value, setValue] = React.useState(selectedValue);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
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
                    <div className="flex flex-col space-y-4"> {/* Added flex container for alignment */}
                        <div className="flex items-center border border-gray-200 rounded dark:border-gray-700 mb-4">
                            <select
                                value={value}
                                onChange={handleChange}
                                className="w-full p-2 border rounded pl-0"
                            >
                                <option value="option1">Some option</option>
                                <option value="option2">Other option</option>
                                <option value="option3">Some option</option>
                                <option value="option4">Other option</option>
                            </select>
                        </div>
                        <button type='submit' className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                            Next
                        </button>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default Page3;
