import React, { useState, Link } from 'react';
import { useHref, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function CreateButton() {

    const redirect = useNavigate();

    return (
        <>
        <div>
            <FaPlus className="nav-icon" onClick={ () => redirect("/create")}/>
        </div>
    </>
    )
};
export default CreateButton;