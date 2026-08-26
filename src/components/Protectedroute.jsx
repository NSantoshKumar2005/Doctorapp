import React from 'react'
function Protectedroute({children,login}){
if(login){
    return children
}
    return(
        <h1>Please login</h1>
    )
}
export default Protectedroute