import React from "react";

export default function ErrrMessage({ error }) {
    if (error) {
        switch (error.type) {
            case "required":
                return <span>⚠ This is required</span>;
            case "minLength":
                return <span>⚠ Your last name need minmium 2 charcaters</span>;
            case "pattern":
                return <span className="error-field py-2">⚠ Enter a valid email address</span>;
            case "min":
                return <span className="error-field">⚠ Minmium age is 18</span>;
            case "validate":
                return <span className="error-field">⚠ Username is already used</span>;
            default:
                return null;
        }
    }

    return null;
}
