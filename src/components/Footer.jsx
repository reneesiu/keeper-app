//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.


import React from "react";

const date = new Date();
const currentYear = date.getFullYear();

let copyright = "Copyright ⓒ " + currentYear;

function Footer() {
    return <footer>
        <p>
            {copyright}
        </p>
    </footer>
}

export default Footer;