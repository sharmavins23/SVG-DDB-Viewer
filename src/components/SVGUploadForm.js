// Imports
import React from "react";
import { Form, Input, Button } from "antd";
const isSVG = require("is-svg");

// SVG upload form container
export default function SVGSelector({ updateSVG }) {
    const onSubmit = (values) => {
        let newSVG = {
            title: values.title,
            svg: values.svg,
        };

        // Check if the SVG is actually real
        if (isSVG(newSVG.svg)) {
            updateSVG(newSVG);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed SVG input:", errorInfo);
    };

    return (
        <>
            <Form
                name="svg-upload-form"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: false }}
                onFinish={onSubmit}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: "Please enter a title for the SVG.",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="SVG"
                    name="svg"
                    rules={[
                        {
                            required: true,
                            message: "Please enter a valid SVG as a string.",
                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}
