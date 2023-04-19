import React, { FunctionComponent } from "react"

export const ContentScript: FunctionComponent = () => {
    return (
        <div className="flex justify-center">
            <div className="text-center">
                <p className="normal-case dark:text-white ...">Home feed has been Hidden</p>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Button
                </button>
            </div>
        </div>

    )
}
