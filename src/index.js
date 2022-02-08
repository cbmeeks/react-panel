import React, { Component } from "react";

export default class Panel extends Component({title, width, children, className}) {
    render({title, width, children, className}) {
        return (
            <div className={`font-[Poppins] ${width ?? ""} ${className ?? ""}`}>
                <div
                    className={`rounded-t-lg border-t-2 border-l-2 border-r-2 border-gray-200 bg-blue-600 pl-4 pt-2 pb-2 text-lg font-semibold text-blue-100 shadow`}>
                    {title}
                </div>
                <div
                    className={`border-2 border-gray-200 bg-white px-4 py-2 shadow`}>
                    {children}
                </div>
            </div>
        );
    }
}
