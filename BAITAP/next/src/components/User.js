import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import userApi from "../api/userApi";

function User(props) {
    useEffect(() => {
        const fetchUser = async () => {
            const UserList = await userApi.getAll();
            console.log(UserList);
        };
        fetchUser();
    }, [])
    return (
        <div>
            <h1>Trang sAN PHAM</h1>
        </div>
    );
}

export default User;