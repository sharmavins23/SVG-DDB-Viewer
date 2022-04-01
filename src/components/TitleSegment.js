// Imports
import React from "react";
import { Typography } from "antd";
const { Title } = Typography;

// Title segment container
export default function TitleSegment({ svgTitle }) {
    return (
        <>
            <Title>SVG from a Decentralized Database Viewer</Title>
            <Title level={2}>
                Current display: <b>{svgTitle}</b>
            </Title>
        </>
    );
}
