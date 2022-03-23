import React from "react";

const Trancate = (props) => {

    return props.initaialString?.length > props.lengthFixed ?
     (<>{props.initaialString.substr(0, props.lengthFixed - 1) + "..."}</>) : 
     (<>{props.initaialString}</>);

}
export default Trancate;