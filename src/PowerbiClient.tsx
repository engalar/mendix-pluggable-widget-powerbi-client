import { useMemo } from "react";
import { PowerbiClientContainerProps } from "../typings/PowerbiClientProps";
import { ValueStatus } from "mendix";
import classNames from "classnames";

import { models } from "powerbi-client";
import "./ui/index.scss";
import DemoApp from "./components/DemoApp";

export default function (props: PowerbiClientContainerProps) {
    const reportConfig = useMemo(() => {
        const cfg: models.IReportEmbedConfiguration = {
            type: "report",
            embedUrl: undefined,
            tokenType: models.TokenType.Embed,
            accessToken: undefined,
            settings: undefined,
            hostname: 'https://app.powerbi.cn'
        };
        if (props.embedUrl.status === ValueStatus.Available && props.accessToken.status === ValueStatus.Available) {
            cfg.accessToken = props.accessToken.value;
            cfg.embedUrl = props.embedUrl.value;
        }
        return cfg;
    }, [props.embedUrl, props.accessToken]);

    return (
        <div style={props.style} className={classNames("mendixcn-powerbi-client", props.class)}>
            <DemoApp {...reportConfig}></DemoApp>
        </div>
    );
}
