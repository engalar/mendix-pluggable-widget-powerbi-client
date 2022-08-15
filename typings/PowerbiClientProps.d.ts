/**
 * This file was generated from PowerbiClient.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface PowerbiClientContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    embedUrl: EditableValue<string>;
    accessToken: EditableValue<string>;
}

export interface PowerbiClientPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    embedUrl: string;
    accessToken: string;
}
