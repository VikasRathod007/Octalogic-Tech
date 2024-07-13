import React from "react";
import { useLocation } from "react-router-dom";
function page3() {
    const location = useLocation()
    const { state } = location
    const selectedValue = state?.selectedValue || 'None'
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="w-full max-w-lg mx-auto">
                <h1 className="text-2xl font-bold mb-4">Selected Value: {selectedValue}</h1>
            </div>
        </div>
    )

}
export default page3