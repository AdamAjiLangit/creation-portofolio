import React from "react";

export default function SectionHeading({ children }) {
    return (
        <h2 className="text-3xl text-white font-poppinsMedium capitalize mb-8 text-center">
            {children}
        </h2>
    );
}