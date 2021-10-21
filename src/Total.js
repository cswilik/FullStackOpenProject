import React from "react";

function Totals({text, values}) {
     return (
        <table>
            <tr>
                <td>{text}</td>
                <td>{values}</td>
            </tr>
            
       </table>
    )
}

export default Totals;