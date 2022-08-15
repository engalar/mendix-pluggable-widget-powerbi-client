// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { useState } from "react";
import { models, Report, Embed, service } from "powerbi-client";
import { PowerBIEmbed } from "powerbi-client-react";
import "powerbi-report-authoring";


// Root Component to demonstrate usage of wrapper component
function DemoApp(props: models.IReportEmbedConfiguration): JSX.Element {
    // PowerBI Report object (to be received via callback)
    const [report, setReport] = useState<Report>();
    console.log(report);

    // Map of event handlers to be applied to the embedding report
    const eventHandlersMap = new Map([
        [
            "loaded",
            function () {
                console.log("Report has loaded");
            }
        ],
        [
            "rendered",
            function () {
                console.log("Report has rendered");
            }
        ],
        [
            "error",
            function (event?: service.ICustomEvent<any>) {
                if (event) {
                    console.error(event.detail);
                }
            }
        ]
    ]);

    return (
            <PowerBIEmbed
                embedConfig={props}
                eventHandlers={eventHandlersMap}
                cssClassName={"report-style-class"}
                getEmbeddedComponent={(embedObject: Embed) => {
                    console.log(`Embedded object of type "${embedObject.embedtype}" received`);
                    setReport(embedObject as Report);
                }}
            />
    );
}

export default DemoApp;
