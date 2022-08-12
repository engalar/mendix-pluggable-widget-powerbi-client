// import { useMemo } from "react";
import { PowerbiClientContainerProps } from "../typings/PowerbiClientProps";
// import { ValueStatus } from "mendix";
import classNames from "classnames";

import "./ui/index.scss";
import DemoApp from "./components/DemoApp";

export default function (props: PowerbiClientContainerProps) {
    console.log(props);
    // const value = useMemo(() => {
    //     if (props.attribute && props.attribute.status === ValueStatus.Available) {
    //         return props.attribute.value;
    //     }
    // }, [props.attribute]);

    return (
        <div style={props.style} className={classNames("mendixcn-graph", props.class)}>
            hello {props.sampleText} and your value is
            <DemoApp></DemoApp>
        </div>
    );
}
