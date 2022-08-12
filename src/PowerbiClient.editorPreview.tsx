import { parseStyle } from "./piw-utils-internal";
import { PowerbiClientPreviewProps } from "../typings/PowerbiClientProps";

declare function require(name: string): string;

export function preview(props: PowerbiClientPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
