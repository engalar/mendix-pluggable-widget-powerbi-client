import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { PowerbiClientPreviewProps } from "../typings/PowerbiClientProps";

export function getProperties(
    values: PowerbiClientPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: PowerbiClientPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
