import React from "react";
function Footer (){
    return(
        <footer style={{ backgroundColor: '#333', color: 'white', textAlign:'center', padding:'15px', marginTop:'30px'}}>
        <div>
            <p>@Copy;{new Date ().getFullYear()} 2025</p>
        </div>

        </footer>
       
    );
}

export default Footer;