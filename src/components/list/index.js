import React from "react";

const List = props =>{
    return(
        <ul className={props.className}>
            {
                props.listData.map((item,key)=>
                    <li>{item}</li>
                )
            }
        </ul>
    )
}

export default List