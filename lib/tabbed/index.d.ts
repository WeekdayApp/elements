import * as React from "react";
interface ITabbedProps {
    start: number;
    size?: string;
    borderless?: boolean;
    footer?: any;
    panels: any;
    onChange?: any;
}
export declare const Tabbed: React.FunctionComponent<ITabbedProps>;
export {};
