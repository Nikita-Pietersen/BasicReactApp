import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import css from "./custom.css";
import Dropdown from "react-bootstrap/Dropdown";

const User = {
    name: "Nikita",
    surname: "Pietersen",
    date_of_birth: "28.09.2000",
    country: "SA",
    email: "nikitap544@gmail.com",
    telephone: "081 744 2647",
    company: "Co Grammar",
    profile_picture: "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/aster-flowers.jpg?itok=3bl-Stkz",
    interests: ["Baking", "Reading", "Coding", "Photography"]
}

function Display() {
    return (
     <div>
     <img src = {User.profile_picture} /> <br></br> 
     { User.name } { User.surname } <br></br>
     <Dropdown>
     <Dropdown.Toggle>
     Display Info:
     </Dropdown.Toggle>
     <Dropdown.Menu>
     { User.date_of_birth } <br></br>
     { User.country } <br></br>
     { User.email } <br></br>
     { User.company } <br></br>
     { User.telephone } <br></br>
     { User.interests } 
     </Dropdown.Menu>
     </Dropdown>
     </div>
    );
}

const Root = document.getElementById("root");
ReactDOM.render(<Display />, Root);

/// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();